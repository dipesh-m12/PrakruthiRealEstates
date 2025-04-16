import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
];

export default function BentoGridSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-[200px]">
          {images.map((src, index) => (
            <div
              key={src}
              className={`
                relative overflow-hidden rounded-lg cursor-pointer
                ${index % 8 === 0 ? "col-span-2 row-span-2" : ""}
                ${index % 8 === 3 ? "col-span-2" : ""}
                ${index % 8 === 5 ? "row-span-2" : ""}
              `}
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Luxury property ${index + 1} in Hyderabad`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                priority={index < 5}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full mx-4">
              <Image
                src={selectedImage}
                alt="Selected luxury property in Hyderabad"
                width={1200}
                height={800}
                className="object-contain rounded-lg"
                sizes="100vw"
              />
              <button
                className="absolute top-2 right-2 bg-white text-black rounded-full p-2 font-poppins"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
