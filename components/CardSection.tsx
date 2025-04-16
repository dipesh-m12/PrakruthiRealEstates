"use client";
import React from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

interface Testimonial {
  quote: {
    en: string;
    te: string;
  };
  name: string;
  designation: string;
  src: string;
}

interface CardSectionProps {
  language: "en" | "te";
}

function CardSection({ language }: CardSectionProps) {
  const testimonials: Testimonial[] = [
    {
      quote: {
        en: "Prakruti Real Estates made our dream home a reality! The quality of construction and attention to detail in their properties is unmatched.",
        te: "ప్రకృతి రియల్ ఎస్టేట్స్ మా కలల ఇంటిని వాస్తవంగా మార్చింది! వారి ఆస్తుల నిర్మాణ నాణ్యత మరియు వివరాలకు శ్రద్ధ అసాధారణం.",
      },
      name: "Anjali Sharma",
      designation: "Homeowner, Prakruti Greenfields",
      src: "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737877/h1_aynlvs.jpg",
    },
    {
      quote: {
        en: "The team guided us through every step of the buying process with professionalism. Our new villa in Prakruti Heights is perfect!",
        te: "ఈ బృందం కొనుగోలు ప్రక్రియలో ప్రతి దశలో మమ్మల్ని వృత్తిపరంగా మార్గనిర్దేశం చేసింది. ప్రకృతి హైట్స్‌లో మా కొత్త విల్లా సంపూర్ణం!",
      },
      name: "Ravi Kumar",
      designation: "IT Professional",
      src: "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737894/h13_f19kos.jpg",
    },
    {
      quote: {
        en: "Investing in a plot with Prakruti was the best decision. The location is prime, and the amenities are top-notch.",
        te: "ప్రకృతితో ప్లాట్‌లో పెట్టుబడి పెట్టడం ఉత్తమ నిర్ణయం. స్థానం అత్యద్భుతంగా ఉంది, మరియు సౌకర్యాలు అగ్రస్థాయిలో ఉన్నాయి.",
      },
      name: "Priya Reddy",
      designation: "Entrepreneur",
      src: "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737919/h4_pexo53.jpg",
    },
    {
      quote: {
        en: "Their customer service is exceptional. They answered all our queries and ensured a smooth handover of our apartment.",
        te: "వారి కస్టమర్ సేవ అసాధారణం. వారు మా ప్రశ్నలన్నింటికీ సమాధానం ఇచ్చారు మరియు మా అపార్ట్‌మెంట్ హస్తాంతరణ సాఫీగా జరిగేలా చేశారు.",
      },
      name: "Suresh Naidu",
      designation: "Retired Banker",
      src: "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737948/h9_rbuzgw.jpg",
    },
    {
      quote: {
        en: "Prakruti’s projects are built with sustainability in mind. We love the green spaces and modern design of our new home!",
        te: "ప్రకృతి ప్రాజెక్ట్‌లు స్థిరత్వాన్ని దృష్టిలో ఉంచుకుని నిర్మించబడ్డాయి. మా కొత్త ఇంటి ఆకుపచ్చ స్థలాలు మరియు ఆధునిక డిజైన్ మాకు చాలా ఇష్టం!",
      },
      name: "Meena Patel",
      designation: "Environmental Consultant",
      src: "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737862/h7_ymdh2h.jpg",
    },
  ];

  // Map testimonials to select the correct quote based on language
  const localizedTestimonials = testimonials.map(
    ({ quote, name, designation, src }) => ({
      quote: quote[language],
      name,
      designation,
      src,
    })
  );

  return <AnimatedTestimonials testimonials={localizedTestimonials} />;
}

export default CardSection;
