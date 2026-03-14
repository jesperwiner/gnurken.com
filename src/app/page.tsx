"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <Navigation />

      <main className="flex flex-col gap-8 items-center p-8 pb-20 sm:p-20">
        <div className="flex flex-col items-center">
          <Image
            className=""
            src="/logo.png"
            alt="Gnurken logo"
            width={450}
            height={450}
            priority
          />
          <p className="text-xs italic mt-2 mb-4 font-helvetica font-bold">
            The real Gnurken, not that other dude that took my name
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/portfolio">
            <div className="w-full h-48 bg-red-500 flex items-center justify-center text-white font-bold">
              Portfolio
            </div>
          </Link>
          <Link href="/services">
            <div className="w-full h-48 bg-blue-500 flex items-center justify-center text-white font-bold">
              Services
            </div>
          </Link>
          <Link href="/contact">
            <div className="w-full h-48 bg-green-500 flex items-center justify-center text-white font-bold">
              Contact
            </div>
          </Link>
          <Link href="/blog">
            <div className="w-full h-48 bg-yellow-500 flex items-center justify-center text-white font-bold">
              Blog
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
