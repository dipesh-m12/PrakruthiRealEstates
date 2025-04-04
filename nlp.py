import pandas as pd
import numpy as np
import torch
from torch.utils.data import Dataset, DataLoader
from torch.optim import AdamW  # Fixed import for AdamW
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
from tqdm import tqdm
import re
import os

# CUDA verification at the very beginning
print("\n=== CUDA Availability Check ===")
print(f"CUDA is {'available' if torch.cuda.is_available() else 'NOT available'}")
if torch.cuda.is_available():
    print(f"CUDA version: {torch.version.cuda}")
    print(f"Number of CUDA devices: {torch.cuda.device_count()}")
    print(f"Current CUDA device index: {torch.cuda.current_device()}")
    print(f"Current CUDA device name: {torch.cuda.get_device_name(torch.cuda.current_device())}")
print("==============================\n")

# Set random seeds for reproducibility
torch.manual_seed(42)
np.random.seed(42)

# Define the label categories
label_map = {
    'defamation': 0,
    'fake': 1,
    'offensive': 2, 
    'hate': 3,
    'non-hostile': 4
}

# Class to create a PyTorch dataset
class HindiThreatDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_len=128):
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_len = max_len
        
    def __len__(self):
        return len(self.texts)
    
    def __getitem__(self, idx):
        text = str(self.texts[idx])
        label = self.labels[idx]
        
        encoding = self.tokenizer(
            text,
            max_length=self.max_len,
            padding='max_length',
            truncation=True,
            return_tensors='pt'
        )
        
        return {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
            'labels': torch.tensor(label, dtype=torch.long)
        }

# Function to clean text
def clean_text(text):
    text = re.sub(r'http\S+', '', text)  # Remove URLs
    text = re.sub(r'@\w+', '', text)     # Remove mentions
    text = re.sub(r'[^\w\s]', '', text)  # Remove special characters
    return text.strip()

# Function to prepare and load the data
def prepare_data(file_path=None):
    """
    Function to prepare the data from a CSV file
    """
    if file_path:
        try:
            # Try to load from the provided file path
            print(f"Attempting to load data from {file_path}")
            if not os.path.exists(file_path):
                print(f"Warning: File {file_path} does not exist")
                raise FileNotFoundError(f"File {file_path} not found")
            
            df = pd.read_csv(file_path)
            print(f"Successfully loaded data from {file_path}")
            print(f"Data shape: {df.shape}")
            print(f"Columns: {df.columns.tolist()}")
        except Exception as e:
            # If loading fails, use sample data
            print(f"Could not load data from {file_path}: {str(e)}")
            print("Using sample data instead.")
            data = {
                'id': [1, 2, 3, 4],
                'post': [
                    'बीएस की कई रोजगार पार्टी',
                    'https://t.co/Dq05hRE कोई भी कांग्रेसी, उनकी पार्टी',
                    'बिलुप्त होती हुई प्रजातिया',
                    'अंडरवर्ल्ड डॉन छोटा राजन'
                ],
                'label': ['defamation', 'non-hostile', 'hate', 'fake']
            }
            df = pd.DataFrame(data)
    else:
        # Use sample data that includes all five categories
        print("No file path provided. Using built-in sample data.")
        data = {
            'id': [1, 2, 3, 4, 5],
            'post': [
                'बीएस की कई रोजगार पार्टी',
                'https://t.co/Dq05hRE कोई भी कांग्रेसी, उनकी पार्टी',
                'बिलुप्त होती हुई प्रजातिया',
                'अंडरवर्ल्ड डॉन छोटा राजन',
                'तुम्हारे परिवार को गाली देता है'
            ],
            'label': ['defamation', 'non-hostile', 'hate', 'fake', 'offensive']
        }
        df = pd.DataFrame(data)
    
    # Make sure column names match expected format
    required_columns = ['post', 'label']
    for col in required_columns:
        if col not in df.columns:
            if col == 'post' and 'Post' in df.columns:
                print(f"Renaming column 'Post' to 'post'")
                df.rename(columns={'Post': 'post'}, inplace=True)
            elif col == 'label' and 'Labels Set' in df.columns:
                print(f"Renaming column 'Labels Set' to 'label'")
                df.rename(columns={'Labels Set': 'label'}, inplace=True)
            else:
                raise ValueError(f"Required column '{col}' not found in the data.")
    
    # If there are multiple labels per row, take the first one
    df['label'] = df['label'].astype(str).apply(lambda x: x.split(',')[0].strip())
    
    # Filter to include only labels in our label map
    valid_df = df[df['label'].isin(label_map.keys())].reset_index(drop=True)
    
    if len(valid_df) < len(df):
        print(f"Filtered out {len(df) - len(valid_df)} rows with invalid labels.")
        print(f"Valid labels are: {', '.join(label_map.keys())}")
    
    return valid_df

# Function to generate or augment training data if needed
def augment_data(df, multiplier=2):
    """
    Simple data augmentation for small datasets
    """
    augmented_data = []
    
    for _, row in df.iterrows():
        text = row['post']
        label = row['label']
        
        # Add original data
        augmented_data.append({
            'post': text,
            'label': label
        })
        
        # Basic augmentation techniques
        for _ in range(multiplier - 1):
            # Word deletion (remove ~10% of words)
            words = text.split()
            if len(words) > 3:  # Only if we have enough words
                num_to_delete = max(1, int(len(words) * 0.1))
                indices_to_delete = np.random.choice(len(words), num_to_delete, replace=False)
                new_words = [w for i, w in enumerate(words) if i not in indices_to_delete]
                augmented_text = ' '.join(new_words)
                
                augmented_data.append({
                    'post': augmented_text,
                    'label': label
                })
    
    return pd.DataFrame(augmented_data)

# Main training function
def train_hindi_threat_model(df, model_save_path='hindi_threat_model'):
    print("Starting model training...")
    
    # Check if we have enough data, augment if needed
    if len(df) < 20:
        print(f"Dataset is small ({len(df)} samples). Augmenting data...")
        df = augment_data(df, multiplier=5)
        print(f"Data augmented to {len(df)} samples")
    
    # Clean the text
    df['clean_post'] = df['post'].apply(clean_text)
    
    # Convert labels to numeric
    df['label_id'] = df['label'].map(lambda x: label_map.get(x, 0))
    
    # Split data
    X_train, X_val, y_train, y_val = train_test_split(
        df['clean_post'].tolist(), 
        df['label_id'].tolist(),
        test_size=0.2,
        random_state=42,
        stratify=df['label_id'] if len(df) > 10 else None  # Stratify only if enough data
    )
    
    print(f"Training on {len(X_train)} samples, validating on {len(X_val)} samples")
    
    try:
        # Load IndicBERT tokenizer and model
        print("Loading IndicBERT tokenizer...")
        tokenizer = AutoTokenizer.from_pretrained("ai4bharat/indic-bert")
        
        print("Loading IndicBERT model...")
        model = AutoModelForSequenceClassification.from_pretrained(
            "ai4bharat/indic-bert", 
            num_labels=len(label_map)
        )
        
        # Create datasets
        train_dataset = HindiThreatDataset(X_train, y_train, tokenizer)
        val_dataset = HindiThreatDataset(X_val, y_val, tokenizer)
        
        # Create data loaders with smaller batch size for memory efficiency
        batch_size = 8  # Reduced batch size to avoid memory issues
        train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
        val_loader = DataLoader(val_dataset, batch_size=batch_size)
        
        # Setup optimizer with appropriate learning rate
        optimizer = AdamW(model.parameters(), lr=3e-5)
        
        # Training loop
        device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        print(f"Using device: {device}")
        
        # Force CUDA if available
        if torch.cuda.is_available():
            try:
                # Try to move model to CUDA
                model.to(device)
                print("Successfully moved model to CUDA device")
                
                # Verify model is on CUDA
                print(f"Is model on CUDA? {next(model.parameters()).is_cuda}")
            except Exception as e:
                print(f"Error moving model to CUDA: {e}")
                print("Falling back to CPU")
                device = torch.device('cpu')
                model.to(device)
        else:
            print("CUDA not available, using CPU")
            model.to(device)
        
        epochs = 4  # Fewer epochs to avoid overfitting on small data
        best_accuracy = 0
        
        for epoch in range(epochs):
            print(f"Epoch {epoch + 1}/{epochs}")
            
            # Training
            model.train()
            train_loss = 0
            
            for batch in tqdm(train_loader, desc="Training"):
                optimizer.zero_grad()
                
                # Move batch to device and verify
                input_ids = batch['input_ids'].to(device)
                attention_mask = batch['attention_mask'].to(device)
                labels = batch['labels'].to(device)
                
                if torch.cuda.is_available() and device.type == 'cuda':
                    # Verify tensors are on CUDA
                    if not input_ids.is_cuda:
                        print("Warning: input_ids not on CUDA")
                
                outputs = model(
                    input_ids=input_ids,
                    attention_mask=attention_mask,
                    labels=labels
                )
                
                loss = outputs.loss
                train_loss += loss.item()
                
                loss.backward()
                optimizer.step()
            
            avg_train_loss = train_loss / len(train_loader)
            print(f"Average training loss: {avg_train_loss}")
            
            # Validation
            model.eval()
            val_preds = []
            val_true = []
            
            with torch.no_grad():
                for batch in tqdm(val_loader, desc="Validation"):
                    input_ids = batch['input_ids'].to(device)
                    attention_mask = batch['attention_mask'].to(device)
                    labels = batch['labels'].to(device)
                    
                    outputs = model(
                        input_ids=input_ids,
                        attention_mask=attention_mask
                    )
                    
                    preds = torch.argmax(outputs.logits, dim=1).cpu().numpy()
                    val_preds.extend(preds)
                    val_true.extend(labels.cpu().numpy())
            
            # Calculate accuracy
            accuracy = accuracy_score(val_true, val_preds)
            print(f"Validation Accuracy: {accuracy:.4f}")
            
            # Get unique classes in the validation set
            unique_val_classes = np.unique(val_true)
            actual_class_names = [list(label_map.keys())[list(label_map.values()).index(i)] for i in unique_val_classes]
            
            # Print classification report with only labels present in validation data
            print("Classification Report:")
            try:
                report = classification_report(
                    val_true, 
                    val_preds,
                    labels=unique_val_classes,  # Only use classes present in validation data
                    target_names=actual_class_names,
                    zero_division=0
                )
                print(report)
            except Exception as e:
                print(f"Error generating classification report: {e}")
                # Fallback to simple metrics
                print("Fallback metrics:")
                for cls in unique_val_classes:
                    cls_name = list(label_map.keys())[list(label_map.values()).index(cls)]
                    cls_true = [1 if y == cls else 0 for y in val_true]
                    cls_pred = [1 if p == cls else 0 for p in val_preds]
                    cls_acc = accuracy_score(cls_true, cls_pred)
                    print(f"Class {cls_name}: Accuracy = {cls_acc:.4f}")
            
            # Save the best model
            if accuracy > best_accuracy:
                best_accuracy = accuracy
                try:
                    torch.save(model.state_dict(), f"{model_save_path}_best.pt")
                    print(f"Best model saved with accuracy: {best_accuracy:.4f}")
                except Exception as e:
                    print(f"Error saving model: {e}")
        
        # Save the final model and tokenizer
        try:
            print("Saving final model and tokenizer...")
            model.save_pretrained(model_save_path)
            tokenizer.save_pretrained(model_save_path)
            print(f"Model and tokenizer saved to {model_save_path}")
        except Exception as e:
            print(f"Error saving final model: {e}")
            print("Continuing with in-memory model...")
        
        return model, tokenizer, best_accuracy
    
    except Exception as e:
        print(f"Error during training: {e}")
        import traceback
        traceback.print_exc()
        raise

# Function to make predictions with the trained model
def predict_threats(texts, model=None, tokenizer=None, model_path=None):
    if model is None or tokenizer is None:
        if model_path is None:
            model_path = 'hindi_threat_model'
        
        try:
            # Load the model and tokenizer
            print(f"Loading model and tokenizer from {model_path}")
            tokenizer = AutoTokenizer.from_pretrained(model_path)
            model = AutoModelForSequenceClassification.from_pretrained(model_path)
        except Exception as e:
            print(f"Error loading model: {e}")
            return None
    
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    print(f"Using device for prediction: {device}")
    
    model.to(device)
    model.eval()
    
    # Reverse label map for output
    reverse_label_map = {v: k for k, v in label_map.items()}
    
    results = []
    
    for text in texts:
        # Clean the text
        cleaned_text = clean_text(text)
        
        # Tokenize
        inputs = tokenizer(
            cleaned_text,
            return_tensors='pt',
            truncation=True,
            max_length=128,
            padding='max_length'
        )
        
        input_ids = inputs['input_ids'].to(device)
        attention_mask = inputs['attention_mask'].to(device)
        
        # Verify CUDA usage if applicable
        if torch.cuda.is_available():
            if not input_ids.is_cuda:
                print("Warning: Prediction tensors not on CUDA")
        
        # Get prediction
        with torch.no_grad():
            outputs = model(input_ids=input_ids, attention_mask=attention_mask)
            pred = torch.argmax(outputs.logits, dim=1).item()
        
        # Get label
        label = reverse_label_map[pred]
        results.append({
            'text': text,
            'predicted_label': label
        })
    
    return results

# Simple interface for model prediction
def create_prediction_interface(model, tokenizer):
    """
    Creates a simple function to predict text categories
    """
    def predict_text(text):
        result = predict_threats([text], model=model, tokenizer=tokenizer)
        if result:
            return result[0]['predicted_label']
        return "Error predicting text"
    
    return predict_text

# Function to monitor GPU memory usage (if CUDA is available)
def print_gpu_memory_usage():
    if torch.cuda.is_available():
        print("\n=== GPU Memory Usage ===")
        for i in range(torch.cuda.device_count()):
            print(f"GPU {i}: {torch.cuda.get_device_name(i)}")
            print(f"Allocated: {torch.cuda.memory_allocated(i) / 1e9:.2f} GB")
            print(f"Cached: {torch.cuda.memory_reserved(i) / 1e9:.2f} GB")
        print("=======================\n")
    else:
        print("CUDA not available, cannot report GPU memory usage")

# Main execution function for full pipeline
def run_full_pipeline(data_path=None):
    try:
        # Print PyTorch version information
        print(f"PyTorch version: {torch.__version__}")
        
        # Step 1: Load data
        print("Loading data...")
        df = prepare_data(data_path)
        print(f"Loaded {len(df)} samples with labels: {', '.join(df['label'].unique())}")
        
        # Step 2: Train model
        print("Training model...")
        model, tokenizer, accuracy = train_hindi_threat_model(df)
        print(f"Model trained with accuracy: {accuracy:.4f}")
        
        # Print GPU memory usage after training
        print_gpu_memory_usage()
        
        # Step 3: Create prediction function
        predict_text = create_prediction_interface(model, tokenizer)
        
        # Step 4: Test with example texts
        example_texts = [
            "बीजेपी ने फिर से झूठ बोला",
            "सभी लोगों का स्वागत है हमारे कार्यक्रम में",
            "इस समुदाय के लोग खतरनाक होते हैं",
        ]
        
        print("\nTesting model with example texts:")
        for text in example_texts:
            label = predict_text(text)
            print(f"Text: {text}")
            print(f"Predicted Label: {label}")
            print("-" * 50)
        
        return model, tokenizer, predict_text
    
    except Exception as e:
        print(f"Error in pipeline: {e}")
        import traceback
        traceback.print_exc()
        return None, None, None

# Example usage
if __name__ == "__main__":
    # Add explicit CUDA setup
    if torch.cuda.is_available():
        print("Setting up CUDA for training...")
        torch.cuda.empty_cache()  # Clear GPU memory cache
        print(f"Setting device to CUDA device #{torch.cuda.current_device()}")
        # You can optionally set a specific GPU if multiple are available
        # torch.cuda.set_device(0)  # Use first GPU
    
    # Run the full pipeline with dataset.csv
    model, tokenizer, predict_text = run_full_pipeline("dataset.csv")
    
    if model is not None:
        # Print final GPU memory usage
        print_gpu_memory_usage()
        
        # Interactive text prediction
        while True:
            user_text = input("\nEnter Hindi text to classify (or 'q' to quit): ")
            if user_text.lower() == 'q':
                break
            
            prediction = predict_text(user_text)
            print(f"Predicted category: {prediction}")