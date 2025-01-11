
"use client";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const isSigned = true;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 md:px-8 text-lg">
        <Link href="/" className="p-2 font-medium">
          <h1 className="font-bold tight bg-gradient-to-b from-black to-[#c015cc] text-transparent bg-clip-text">
            ThumbSpot
          </h1>
        </Link>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-background md:bg-transparent p-4 md:p-0 border-b md:border-none`}
        >
          <div className="space-y-2 md:space-y-0 md:flex md:space-x-4">
            {isSigned && (
              <>
                <Link href="/dashboard" className="block p-2 font-medium">
                  Product
                </Link>
                <Link
                  href="/dashboard"
                  className="block p-2 font-medium"
                >
                  Profile
                </Link>
              </>
            )}
            <Link href="/pricing" className="block p-2 font-medium">
              Pricing
            </Link>
          </div>
          <div className="space-x-4 flex items-center mt-4 md:mt-0">
            <ModeToggle />
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <SignOutButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
