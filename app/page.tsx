import { CallToAction } from "@/components/landing-page/CallToAction";
import { Footer } from "@/components/landing-page/Footer";
import PricingSection from "@/components/landing-page/Pricing-section";
import { ProductShowcase } from "@/components/landing-page/ProductShowCase";
import { Testimonials } from "@/components/landing-page/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto x-4 pt-12 text-center">
        <h1 className="text-4xl md:text-2xl font-bold mb-4 tight bg-gradient-to-b from-black to-[#c015cc] text-transparent bg-clip-text mt-5">
          The Ultimate Thumbnail Spot
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Here You can Upload and View Your Thumbnail in Seconds
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-[#c015cc]">
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Button variant="outline">
            <Link href="/dashboard">View Pricing</Link>
          </Button>
        </div>
        {/* <img src="" alt="" className="w-full h-auto mt-8" /> */}
      </main>
      <ProductShowcase />
      <PricingSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
