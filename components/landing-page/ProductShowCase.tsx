"use client";
import productImage from "@/assets/ProductImage.png";
import pyramidImage from "@/assets/website-icon1.png";
import tubeImage from "@/assets/website-icon2.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={productRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="mx-auto px-5 lg:px-20">
        <div className="max-w-[590px] mx-auto">
          <div className="flex justify-center items-center">
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className="text-center text-5xl md:text-7xl md:leading-[60px] font-bold tracking-tightbg  bg-gradient-to-b from-black to-[#c015cc] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5 mb-7">
            Effortlessly Upload Your Thumbnail and win the YouTube Game Without
            Uploading Video on YouTube
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="product-image"
            className="mt-1 border border-[#c015cc]"
          />
          {/* <motion.img
            src={pyramidImage.src}
            alt="pyramid-image"
            className="hidden md:block absolute -right-36 -top-32 "
            height={260}
            width={260}
            style={{ translateY }}
          /> */}
          {/* <motion.img
            src={tubeImage.src}
            alt="tube-image"
            className="hidden md:block absolute -left-36 bottom-24"
            height={260}
            width={260}
            style={{ translateY }}
          /> */}
        </div>
      </div>
    </section>
  );
};
