"use client";
import { twMerge } from "tailwind-merge";
import { Check } from "lucide-react";

import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: ["Up to 5 Uploads", "1GB storage", "Basic support"],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Upto 50 Uploads",
      "50GB storage",
      "Upcoming AI features Access",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Unlimited Uploads",
      "200GB storage",
      "Integrations",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export default function PricingSection() {
  return (
    <div>
      <section className="py-24 bg-white">
        <div className="px-5 lg:px-20">
          <div className="max-w-[540px] mx-auto">
            <h2 className="section-title bg-gradient-to-b from-black to-[#c015cc] text-transparent bg-clip-text">
              Pricing
            </h2>
            <p className="section-subtitle mt-5">
              Free forever. Upgrade for unlimited Uploads, better security, and
              exclusive features
            </p>
          </div>

          {/* Tiers */}
          <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
            {pricingTiers.map(
              ({
                title,
                monthlyPrice,
                buttonText,
                popular,
                inverse,
                features,
              }) => (
                <div
                  className={twMerge(
                    "p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_10px_16px_#EAEAEA] max-w-xs w-full",
                    inverse === true && "bg-black text-white/60 border-black"
                  )}
                  key={title}
                >
                  <div className="flex justify-between">
                    <h3
                      className={twMerge(
                        "text-lg font-bold text-black/50",
                        inverse === true && "text-white/60"
                      )}
                    >
                      {title}
                    </h3>
                    {popular === true && (
                      <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                        <motion.span
                          animate={{ backgroundPositionX: "100%" }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                          }}
                          className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#DD7DDF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#DD7DDF)] [background-size:300%] text-transparent bg-clip-text font-medium"
                        >
                          Popular
                        </motion.span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mt-[30px]">
                    <span className="text-4xl font-bold tracking-tighter leading-none">
                      ${monthlyPrice}
                    </span>
                    <span className="tracking-tight font-bol text-black/50">
                      /month
                    </span>
                  </div>
                  <button
                    className={twMerge(
                      "btn w-full mt-[30px]",
                      inverse === true && "bg-white text-black"
                    )}
                  >
                    {buttonText}
                  </button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature, index) => (
                      <li
                        className="text-sm flex items-center gap-4"
                        key={index}
                      >
                        <Check className="h-6 w-6" />
                        <span className="">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
