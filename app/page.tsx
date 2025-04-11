"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import ContactSection from "@/components/ContactSection";
import BentoSection from "@/components/BentoSection";
import h1 from "@/public/images/h1.jpg";
import CardSection from "@/components/CardSection";

const Navbar = () => {
  const [language, setLanguage] = useState<"en" | "te">("en");
  const translations = {
    en: "Prakruti Real Estates",
    te: "ప్రకృతి రియల్ ఎస్టేట్స్",
  };
  const images = [
    "/images/h1.jpg",
    "/images/h2.jpg",
    "/images/h3.jpg",
    "/images/h4.jpg",
    "/images/h5.jpg",
    "/images/h6.jpg",
    "/images/h7.jpg",
    "/images/h8.jpg",
    "/images/h9.jpg",
    "/images/h10.jpg",
    "/images/h11.jpg",
    "/images/h12.jpg",
    "/images/h13.jpg",
    "/images/h14.jpg",
    "/images/h15.jpg",
    "/images/h16.jpg",
    "/images/h17.jpg",
    "/images/h18.jpg",
    "/images/h19.jpg",
    "/images/h20.jpg",
    "/images/h21.jpg",
    "/images/h22.jpg",
    "/images/h23.jpg",
    "/images/h15.jpg",
    "/images/h16.jpg",
    "/images/h17.jpg",
    "/images/h18.jpg",
    "/images/h10.jpg",
    "/images/h11.jpg",
    "/images/h11.jpg",
    "/images/h12.jpg",
  ];
  // const images = [
  //   "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  //   "https://assets.aceternity.com/animated-modal.png",
  //   "https://assets.aceternity.com/animated-testimonials.webp",
  //   "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
  //   "https://assets.aceternity.com/github-globe.png",
  //   "https://assets.aceternity.com/glare-card.png",
  //   "https://assets.aceternity.com/layout-grid.png",
  //   "https://assets.aceternity.com/flip-text.png",
  //   "https://assets.aceternity.com/hero-highlight.png",
  //   "https://assets.aceternity.com/carousel.webp",
  //   "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  //   "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
  //   "https://assets.aceternity.com/signup-form.png",
  //   "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
  //   "https://assets.aceternity.com/spotlight-new.webp",
  //   "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  //   "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
  //   "https://assets.aceternity.com/tabs.png",
  //   "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
  //   "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
  //   "https://assets.aceternity.com/glowing-effect.webp",
  //   "https://assets.aceternity.com/hover-border-gradient.png",
  //   "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
  //   "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
  //   "https://assets.aceternity.com/macbook-scroll.png",
  //   "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
  //   "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
  //   "https://assets.aceternity.com/multi-step-loader.png",
  //   "https://assets.aceternity.com/vortex.png",
  //   "https://assets.aceternity.com/wobble-card.png",
  //   "https://assets.aceternity.com/world-map.webp",
  // ];

  const handleLanguageChange = (checked: boolean) => {
    setLanguage(checked ? "te" : "en");
  };

  return (
    <>
      <nav className="bg-beige-100 text-gray-800 py-4 px-4 sm:px-6 border-b border-green-200 shadow-sm">
        <div className="flex justify-end mb-2 sm:mb-3">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              English
            </span>
            <Switch
              checked={language === "te"}
              onCheckedChange={handleLanguageChange}
              className="data-[state=checked]:bg-green-600"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              తెలుగు
            </span>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Prakruti Real Estates Logo"
              width={40}
              height={40}
              className="mr-2 sm:mr-3"
            />
          </Link>
          <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold tracking-tight text-green-800">
            {translations[language]}
          </h1>
        </div>
      </nav>
      <div className="relative max-h-screen">
        <Image
          src="/bgImage.jpg"
          alt="bgImage"
          width={200}
          height={100}
          className="w-full absolute opacity-50 h-[60vh] sm:h-[90vh]"
        />
        <div className="mx-auto relative my-10 mt-0 max-w-7xl rounded-3xl  p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
          <ThreeDMarquee images={images} />
        </div>
      </div>
      <CardSection language={language} />
      <div className="h-12"></div>
      <BentoSection language={language} />
      <div className="h-12"></div>
      <ContactSection language={language} />
    </>
  );
};

export default Navbar;
