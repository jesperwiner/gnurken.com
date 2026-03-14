"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { useState, useCallback } from "react";

const IMAGE_COUNT = 3;

export default function Home() {
  const [loadedCount, setLoadedCount] = useState(0);
  const allLoaded = loadedCount >= IMAGE_COUNT;

  const handleLoad = useCallback(() => {
    setLoadedCount((c) => c + 1);
  }, []);

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <Navigation />

      <main
        className={`flex flex-col gap-8 items-center p-8 pb-20 sm:p-20 transition-opacity duration-700 ${allLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col items-center">
          <Image
            className=""
            src="/logo.png"
            alt="Gnurken logo"
            width={450}
            height={450}
            priority
            onLoad={handleLoad}
          />
          <p className="text-xs italic mt-2 mb-4 font-helvetica font-bold">
            The real Gnurken, not that other dude that took my name
          </p>
        </div>
        <div className="flex gap-6">
          <Link href="/about" className="flex flex-col items-center gap-2">
            <Image
              src="/1682940540988.jpeg"
              alt="About"
              width={80}
              height={80}
              className="rounded-full object-cover hover:scale-110 transition-transform"
              onLoad={handleLoad}
            />
            <span className="text-sm text-white">About</span>
          </Link>
          <Link href="/movies" className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full overflow-hidden hover:scale-110 transition-transform">
              <Image
                src="/games/wow.png"
                alt="WoW Movies"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                onLoad={handleLoad}
              />
            </div>
            <span className="text-sm text-white">WoW Movies</span>
          </Link>
          <Link href="/contact" className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white font-bold hover:scale-110 transition-transform" />
            <span className="text-sm text-white">Contact</span>
          </Link>
          <Link href="/gaming-rig" className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold hover:scale-110 transition-transform" />
            <span className="text-sm text-white">Gaming Rig</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
