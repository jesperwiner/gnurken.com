"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "block px-4 py-2 text-red-500 hover:bg-gray-700 transition-colors"
      : "block px-4 py-2 text-white hover:bg-gray-700 transition-colors";
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-8 py-3 sm:px-20 bg-black/90 backdrop-blur-sm border-b border-gray-700/50">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="Gnurken logo"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Desktop Dropdown Menu */}
        <div className="hidden md:block relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
            style={{ fontFamily: "Verdana, sans-serif" }}
          >
            <span>Menu</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-36 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-700"
              style={{ fontFamily: "Verdana, sans-serif" }}
            >
              <div className="py-2">
                <Link
                  href="/"
                  className={getLinkClass("/")}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={getLinkClass("/about")}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/movies"
                  className={getLinkClass("/movies")}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Movies
                </Link>
                <Link
                  href="/gaming-rig"
                  className={getLinkClass("/gaming-rig")}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Gaming Rig
                </Link>
                <Link
                  href="/projects"
                  className={getLinkClass("/projects")}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className={getLinkClass("/contact")}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isDropdownOpen && (
        <div
          className="md:hidden mt-4 bg-black/90 backdrop-blur-sm rounded-lg border border-gray-700 w-36 ml-auto"
          style={{ fontFamily: "Verdana, sans-serif" }}
        >
          <div className="py-2">
            <Link
              href="/"
              className={getLinkClass("/")}
              onClick={() => setIsDropdownOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={getLinkClass("/about")}
              onClick={() => setIsDropdownOpen(false)}
            >
              About
            </Link>
            <a
              href="#services"
              className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsDropdownOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}