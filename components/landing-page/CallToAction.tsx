"use client";

import { FaArrowRight } from "react-icons/fa";

import Icon1 from "@/assets/website-icon2.png";
import Icon2 from "@/assets/website-icon1.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={ctaRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="px-5 lg:px-20">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-title to-[#c015cc] text-transparent bg-clip-text">
            Sign up for free today
          </h2>
          <p className="section-subtitle mt-5">
            celebrate the joy of accomplishment with an app designed View Your Thumbnail Without Uploading It on YouTube
          </p>
          {/* <motion.img
            src={Icon1.src}
            alt="star-image"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={Icon2.src}
            alt="spring-image"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          /> */}
        </div>

        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn bg-[#c015cc]">Get for free</button>
          <button className="btn btn-text flex flex-row ">
            <span className="">
              Learn More
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
