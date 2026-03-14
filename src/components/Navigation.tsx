"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/movies", label: "Movies" },
  { href: "/gaming-rig", label: "Gaming Rig" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full px-6 py-3 sm:px-12 bg-black/90 border-b border-gray-700/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Gnurken logo"
              width={80}
              height={80}
              priority
            />
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="relative w-8 h-8 flex items-center justify-center"
            aria-label="Open menu"
          >
            <span className="absolute h-0.5 w-6 bg-white rounded -translate-y-2" />
            <span className="absolute h-0.5 w-6 bg-white rounded" />
            <span className="absolute h-0.5 w-6 bg-white rounded translate-y-2" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />

      {/* Slide drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-[#0a0a0f] border-l border-gray-700/50 will-change-transform transition-transform duration-200 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end px-6 pt-5">
          <button
            onClick={close}
            className="relative w-8 h-8 flex items-center justify-center"
            aria-label="Close menu"
          >
            <span className="absolute h-0.5 w-6 bg-white rounded rotate-45" />
            <span className="absolute h-0.5 w-6 bg-white rounded -rotate-45" />
          </button>
        </div>
        <div className="flex flex-col pt-6 px-4 gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === href
                  ? "text-red-400 bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
