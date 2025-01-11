"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
const testimonials = [
  {
    text: "Finally, a tool that lets me preview my YouTube thumbnails before uploading! It’s saved me so much time tweaking designs.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamiethumbs",
  },
  {
    text: "This app has completely changed how I design my thumbnails. Seeing them on a real YouTube layout is a game-changer!",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@joshvisuals",
  },
  {
    text: "I used to second-guess my thumbnails, but now I can test different styles and pick the most eye-catching one.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morgandesigns",
  },
  {
    text: "I love how easy it is to upload and preview my thumbnails. It gives me so much confidence before publishing!",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseycreator",
  },
  {
    text: "As a content creator, this app is a must-have. I can finally see how my thumbnails will stand out on YouTube!",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorthumbs",
  },
  {
    text: "Simple, fast, and incredibly useful. I can test multiple thumbnails and pick the best one without guessing.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileycreates",
  },
  {
    text: "This thumbnail previewer helped me understand how colors and text size appear on YouTube. My click-through rate improved!",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jordanvisuals",
  },
  {
    text: "No more uploading and deleting videos just to test thumbnails. This tool makes it effortless!",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@samthumbnails",
  },
  {
    text: "The realistic preview feature is amazing. It’s now part of my thumbnail design workflow!",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@caseycreates",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-[24px] "
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card">
              <div className="">{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5 ">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white ">
      <div className="px-5 lg:px-20">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>

          <h2 className="section-title mt-5 bg-gradient-to-b from-black to-[#c015cc] text-transparent bg-clip-text">
            What our users say
          </h2>
          <p className="section-subtitle mt-5">
            From intuitive design to powerful features,our app has become an
            essentials tool for All Content Creators around the world
          </p>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10 max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
