import React, { useState } from "react";
import Image from "next/image";

function Masonry() {
  const images = [
    "/plot.png",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737877/h1_aynlvs.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737858/h2_wyrghd.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737866/h3_ovvtza.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="w-full px-4 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Empty space on the left */}
          <div className="md:w-1/6"></div>

          {/* First column - wider, contains plot.png */}
          <div
            className="md:w-2/3 h-96 md:h-auto relative cursor-pointer"
            onClick={() => setSelectedImage(images[0])}
          >
            <Image
              src={images[0]}
              alt="Plot visualization"
              fill
              className="object-contain rounded-lg w-fit"
              priority
            />
          </div>

          {/* Second column - narrower, contains 3 stacked images */}
          <div className="md:w-1/3 flex flex-col gap-4">
            {images.slice(1).map((img, index) => (
              <div
                key={index}
                className="h-40 relative cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Empty space on the right */}
          <div className="md:w-1/6"></div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <Image
              src={selectedImage}
              alt="Selected image"
              width={1200}
              height={800}
              className="object-contain h-[80vh] rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2 font-bold"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Masonry;
