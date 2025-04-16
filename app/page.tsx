"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import ContactSection from "@/components/ContactSection";
import BentoSection from "@/components/BentoSection";
import CardSection from "@/components/CardSection";
import Threads from "@/components/react-bits/Threads";
import SplashCursor from "@/components/react-bits/Splashcursor";
import { ArrowRight } from "lucide-react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Masonry from "@/components/Masonry";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [language, setLanguage] = useState<"en" | "te">("en");
  const contRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);

  // Translations for navbar and hero section
  const translations = {
    en: {
      navbarTitle: "Prakruti Real Estates",
      heroTitle: "Prakruthi",
      heroSubtitle: "Real Estates",
      heroDescription:
        "Crafting exclusive living spaces where modern luxury harmonizes with nature's tranquility. Your sanctuary awaits.",
      viewProperties: "View Properties",
      contactUs: "Contact Us",
      ratingText: "Trusted by 1000+ happy homeowners",
    },
    te: {
      navbarTitle: "ప్రకృతి రియల్ ఎస్టేట్స్",
      heroTitle: "ప్రకృతి",
      heroSubtitle: "రియల్ ఎస్టేట్స్",
      heroDescription:
        "ఆధునిక విలాసం ప్రకృతి యొక్క శాంతితో సమన్వయం చేసే ప్రత్యేక జీవన స్థలాలను రూపొందించడం. మీ స్వర్గధామం మీ కోసం వేచి ఉంది.",
      viewProperties: "ఆస్తులను వీక్షించండి",
      contactUs: "మమ్మల్ని సంప్రదించండి",
      ratingText: "1000+ సంతోషకరమైన గృహయజమానులచే విశ్వసించబడింది",
    },
  };

  const images = [
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737877/h1_aynlvs.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737858/h2_wyrghd.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737866/h3_ovvtza.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737919/h4_pexo53.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737863/h5_krcqax.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737862/h6_ghj4cx.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737862/h7_ymdh2h.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737885/h8_nsdorp.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737948/h9_rbuzgw.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737884/h10_zko047.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737902/h11_mk2zfm.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737944/h12_pgecoy.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737894/h13_f19kos.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737897/h14_g4ar8q.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737909/h15_awzkbz.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737912/h16_oufpoy.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737922/h17_uojhcg.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737954/h18_rrgcjc.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737923/h19_kkjkzk.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737938/h20_yjmytj.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737942/h21_yzg4zn.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737941/h22_hu7ef2.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737954/h23_a0w1ub.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737909/h15_awzkbz.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737912/h16_oufpoy.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737922/h17_uojhcg.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737954/h18_rrgcjc.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737884/h10_zko047.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737902/h11_mk2zfm.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737902/h11_mk2zfm.jpg",
    "https://res.cloudinary.com/dp7wm24gz/image/upload/v1744737944/h12_pgecoy.jpg",
  ];

  const handleLanguageChange = (checked: boolean) => {
    setLanguage(checked ? "te" : "en");
  };

  return (
    <>
      <nav className="min-h-[10vh] bg-beige-100 text-gray-800 py-4 px-4 sm:px-6 border-b border-green-200 shadow-sm">
        <div className="flex justify-end mb-2 sm:mb-3">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span className="text-xs sm:text-sm font-medium text-gray-700 font-poppins">
              English
            </span>
            <Switch
              checked={language === "te"}
              onCheckedChange={handleLanguageChange}
              className="data-[state=checked]:bg-green-600"
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 font-poppins">
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
          <h1 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold tracking-tight text-green-800 font-poppins">
            {translations[language].navbarTitle}
          </h1>
        </div>
      </nav>

      <div className="relative min-h-[89vh] flex flex-col md:flex-row overflow-hidden">
        <div className="basis-1/3 md:basis-2/5 flex items-center z-10">
          <div className="px-6 md:px-12 lg:px-16 sm:py-12 py-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 font-poppins">
              <span className="block">{translations[language].heroTitle}</span>
              <span className="block text-emerald-700">
                {translations[language].heroSubtitle}
              </span>
            </h1>

            <p className="mt-6 text-base md:text-xl text-gray-600 font-poppins">
              {translations[language].heroDescription}
            </p>

            <div className="mt-8 flex flex-row sm:flex-row gap-4">
              <span
                onClick={() =>
                  viewRef?.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-700 hover:bg-emerald-800 transition-colors font-poppins"
              >
                {translations[language].viewProperties}
              </span>
              <span
                onClick={() => {
                  console.log("here");
                  contRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors font-poppins"
              >
                {translations[language].contactUs}
              </span>
            </div>
          </div>
        </div>
        {/* Right image area */}
        <div className="basis-2/3 md:basis-3/5">
          <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-white via-white/90 to-transparent z-[1] h-1/3 sm:h-full w-full md:w-1/2 pointer-events-none" />
          <Image
            src="/images/mainImage.png"
            alt="Luxury real estate property"
            width={1200}
            height={800}
            className="w-[100vw] sm:w-[56vw] object-cover absolute bottom-0 right-0"
            priority
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 z-20 flex items-center sm:space-x-4 space-x-1">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400 max-sm:simple-shadow"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="sm:text-sm text-xs bg-slate-900/40 sm:bg-white text-gray-300 font-semibold sm:font-normal sm:text-slate-800 font-poppins max-sm:simple-shadow">
            {translations[language].ratingText}
          </span>
        </div>
      </div>

      {/* Card section */}
      <div className="flex items-center relative">
        <Image
          src={"/images/yellowBg.jpg"}
          width={200}
          height={200}
          alt="bg"
          className="w-full absolute h-[120vh] sm:h-[70vh]"
        />
        <CardSection language={language} />
      </div>

      {/* Image gallery */}
      <div className="relative mx-auto sm:py-10 w-full overflow-hidden rounded-lg border bg-background">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={1600}
          width={1600}
        />
        <div className="max-w-5xl mx-auto py-10 flex">
          <ThreeDMarquee images={images} />
        </div>
      </div>

      {/* Image gal2 */}
      <div ref={viewRef} className="relative rounded-lg border">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={"absolute"}
        />
        <Masonry />
      </div>

      <BentoSection language={language} />

      <div className="h-12" />
      <div ref={contRef}>
        <ContactSection language={language} />
      </div>
      {/* <SplashCursor /> */}
    </>
  );
};

export default Navbar;
