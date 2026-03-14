"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";

function getEmail() {
  const parts = ["jesper", ".", "winer", "@", "gmail", ".", "com"];
  return parts.join("");
}

export default function Contact() {
  const [revealed, setRevealed] = useState(false);
  const [email, setEmail] = useState("");

  function reveal() {
    const addr = getEmail();
    setEmail(addr);
    setRevealed(true);
  }

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen">
      <Navigation />
      <main className="flex flex-col gap-8 items-center text-center max-w-4xl mx-auto px-8 py-10 w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center font-[family-name:var(--font-geist-mono)] tracking-tight mb-2.5">
          Contact
        </h1>
        <div className="bg-white/15 rounded-lg p-8 border border-gray-700 text-white text-center">
          <p className="text-lg mb-4">
            For any inquiries, please contact me at:
          </p>
          {revealed ? (
            <a
              href={`mailto:${email}`}
              className="text-2xl font-bold text-red-500 hover:underline"
            >
              {email}
            </a>
          ) : (
            <button
              onClick={reveal}
              className="text-2xl font-bold text-red-500 hover:underline cursor-pointer"
            >
              Click to reveal email
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
