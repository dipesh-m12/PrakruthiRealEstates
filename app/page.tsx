"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import ContactSection from "@/components/ContactSection";
import BentoSection from "@/components/BentoSection";
const Navbar = () => {
  const [language, setLanguage] = useState<"en" | "te">("en");
  const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  const handleLanguageChange = (checked: boolean) => {
    setLanguage(checked ? "te" : "en");
  };

  return (
    <>
      <nav className="bg-beige-100 text-gray-800 py-4 px-4 sm:px-6 border-b border-green-200 shadow-sm">
        {/* Language Toggle Section (Above, Right-Aligned) */}
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

        {/* Logo Section (Below, Left-Aligned) */}
        <div className="flex justify-start items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Prakruti Real Estates Logo"
              width={40}
              height={40}
              className="mr-2 sm:mr-3"
            />
          </Link>
          <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold tracking-tight text-green-800">
            Prakruti Real Estates
          </h1>
        </div>
      </nav>
      <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div>{" "}
      <BentoSection />
      <ContactSection />
    </>
  );
};

export default Navbar;
