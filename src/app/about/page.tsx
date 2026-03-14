"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

const KnightRiderScanner = () => {
  const [leds, setLeds] = useState(Array(30).fill(0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeds((prevLeds) => {
        const newLeds = prevLeds.map((opacity) => Math.max(0, opacity - 0.2));
        newLeds[currentIndex] = 1;
        return newLeds;
      });

      if (currentIndex + direction >= 30 || currentIndex + direction < 0) {
        setDirection(-direction);
      }
      setCurrentIndex((prevIndex) => prevIndex + direction);
    }, 50);

    return () => clearInterval(interval);
  }, [currentIndex, direction]);

  return (
    <div className="flex justify-center items-center space-x-1 h-8">
      {leds.map((opacity, i) => (
        <motion.div
          key={i}
          className="w-4 h-4 bg-red-500"
          animate={{ opacity }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
};

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen bg-fixed bg-gradient-to-br from-gray-900 to-gray-800">
      <Navigation />

      <main className="flex flex-col gap-8 items-center text-center max-w-4xl px-8 py-20">
        {/* About Header */}
        <motion.div
          className="mb-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-1">
            About Gnurken
          </h1>
          <KnightRiderScanner />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="space-y-8 text-white text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Personal Introduction */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/1682940540988.jpeg"
                  alt="Jesper Winér profile picture"
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-white/20 mx-auto md:mx-0"
                  priority
                />
              </motion.div>
              <div className="flex-1">
                <p className="text-lg leading-relaxed">
                  I'm <strong>Jesper Winér</strong>, but most people know me as
                  &ldquo;Gnurken&rdquo; in the digital realm. At 50, I've
                  mastered the art of crafting elegant web experiences at
                  Nordnet Bank in Stockholm's vibrant Kungsholmen district. My
                  weapon of choice? TypeScript paired with React and modern
                  CSS3, though I'm equally lethal with Java, C#, and the
                  timeless Perl.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  When I'm not architecting the next breakthrough in fintech,
                  you'll find me conquering virtual worlds. I'm a gaming veteran
                  with over 11 years of World of Warcraft mastery under my belt
                  since 2005. Currently on hiatus from Azeroth, but legends
                  never truly retire. This very site serves as my digital
                  playground—a proving ground where I push the boundaries of
                  what's possible with cutting-edge tech.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  I'm also diving deep into the world of video production,
                  transitioning from my trusty Sony Vegas setup to Adobe
                  Premiere's professional arsenal. Here, you'll discover my epic
                  WoW cinematic collection, innovative C# projects, and curated
                  galleries showcasing both vintage gaming treasures and
                  bleeding-edge builds that would make any tech enthusiast
                  jealous.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Top 3 Movies Section */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Top 3 Favorite Movies
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">1. Forrest Gump</h3>
                  <a
                    href="https://www.imdb.com/title/tt0109830/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-600 hover:bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold transition-colors cursor-pointer"
                  >
                    ⭐ 8.8 IMDB
                  </a>
                </div>
                <p className="leading-relaxed">
                  Watched Forrest Gump many times and will do many more. It's my
                  all time favorite movie and I don't see it getting bumped down
                  any time soon. Tom Hanks is perfect as Gump and the supporting
                  cast is awesome, especially Gary Sinise as Lt. Dan. I guess
                  the effects will be dated eventually but I think they still
                  hold up.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">
                    2. The Empire Strikes Back
                  </h3>
                  <a
                    href="https://www.imdb.com/title/tt0080684/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-600 hover:bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold transition-colors cursor-pointer"
                  >
                    ⭐ 8.7 IMDB
                  </a>
                </div>
                <p className="leading-relaxed">
                  No surprise that a computer geek likes fantasy and sci-fi. The
                  Empire Strikes Back is the best of them and proves that George
                  Lucas is a better storyteller than director. Some of the
                  special edition additions are ok but the Wampa on Hoth didn't
                  need to be changed, the Cloud City extensions are great
                  however.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">3. V for Vendetta</h3>
                  <a
                    href="https://www.imdb.com/title/tt0434409/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-600 hover:bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold transition-colors cursor-pointer"
                  >
                    ⭐ 8.1 IMDB
                  </a>
                </div>
                <p className="leading-relaxed">
                  This future dystopian society doesn't seem as far fetched as
                  it did in 2005. Hugo Weaving is playing the shadowy vigilante
                  perfectly despite being masked the entire movie. This also is
                  Natalie Portman's best performance ever as the orphan Evey. I
                  watch this movie every year on 5th Nov.
                </p>
              </div>

              <div className="mt-4 p-4 bg-black/20 rounded-lg">
                <h4 className="font-bold mb-2">Honorable mentions:</h4>
                <p className="text-sm">
                  <a
                    href="https://www.imdb.com/title/tt0111161/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    The Shawshank Redemption
                  </a>
                  {", "}
                  <a
                    href="https://www.imdb.com/title/tt0103064/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    Terminator 2
                  </a>
                  {", "}
                  <a
                    href="https://www.imdb.com/title/tt0133093/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    The Matrix
                  </a>
                  {", "}
                  <a
                    href="https://www.imdb.com/title/tt0081590/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    Sällskapsresan
                  </a>
                  {", "}
                  <a
                    href="https://www.imdb.com/title/tt0090605/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    Aliens
                  </a>
                  {", "}
                  <a
                    href="https://www.imdb.com/title/tt0095016/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    Die Hard
                  </a>
                  {" & "}
                  <a
                    href="https://www.imdb.com/title/tt0468569/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    The Dark Knight
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={itemVariants}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p>TypeScript, React, ES6, CSS3</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <p>Java, C#, Perl</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-3">Video Editing</h3>
              <p>Sony Vegas, Learning Adobe Premiere</p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Connect with me
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/jesper-win%C3%A9r-4b6a7981/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </motion.a>
              <motion.a
                href="https://www.facebook.com/jesper.winer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </motion.a>
              <motion.a
                href="https://twitter.com/JesperWiner?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X (Twitter)
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
