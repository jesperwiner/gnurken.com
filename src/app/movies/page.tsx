"use client";

import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
}) as unknown as React.ComponentType<{
  url: string;
  controls?: boolean;
  playing?: boolean;
  width?: string;
  height?: string;
}>;
import { expansions } from "./data";

const allVideos = expansions.flatMap((e) => e.raids.flatMap((r) => r.videos));

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function scrollListTo(container: HTMLDivElement | null, url: string) {
  const el = container?.querySelector(
    `[data-url="${CSS.escape(url)}"]`,
  ) as HTMLElement | null;
  if (container && el) {
    container.scrollTop =
      el.offsetTop - container.offsetTop - container.clientHeight / 2;
  }
}

export default function Movies() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState("");
  const [userClicked, setUserClicked] = useState(false);
  const [ready, setReady] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const linked = hash
      ? allVideos.find((v) => slugify(v.title) === hash)
      : undefined;
    const video =
      linked ?? allVideos[Math.floor(Math.random() * allVideos.length)];

    setActiveVideo(video.url);
    setActiveVideoTitle(video.title);

    requestAnimationFrame(() => {
      scrollListTo(listRef.current, video.url);
      setReady(true);
    });
  }, []);

  function playVideo(url: string, title: string) {
    setActiveVideo(url);
    setActiveVideoTitle(title);
    setUserClicked(true);
    window.location.hash = slugify(title);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen">
      <Navigation />
      <main
        className={`w-full px-6 pt-10 pb-5 sm:px-12 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col gap-6 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-center font-[family-name:var(--font-geist-mono)] tracking-tight mb-2.5">
            World of Warcraft Movies
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Video list */}
            <div
              ref={listRef}
              className="order-2 lg:order-1 lg:w-[370px] flex-shrink-0 lg:max-h-[calc(100vh-14.5rem)] lg:overflow-y-auto [overscroll-behavior:none] bg-white/5 rounded-lg border border-gray-700"
            >
              {expansions.map((expansion) => (
                <div key={expansion.name}>
                  <div
                    className="sticky top-0 z-10 px-4 py-3 text-white font-bold text-sm uppercase tracking-wider bg-cover bg-center"
                    style={
                      expansion.cover
                        ? {
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${expansion.cover})`,
                          }
                        : { backgroundColor: "rgb(30, 30, 30)" }
                    }
                  >
                    {expansion.name}
                  </div>
                  {expansion.raids.map((raid) => (
                    <div key={raid.name}>
                      {raid.name && (
                        <div className="relative overflow-hidden border-t border-gray-700/50">
                          {raid.cover && (
                            <img
                              src={raid.cover}
                              alt={raid.name}
                              className="absolute inset-0 w-full h-full object-cover opacity-30"
                            />
                          )}
                          <div className="relative px-4 py-2 bg-black/40 text-white font-bold text-sm">
                            {raid.name}
                          </div>
                        </div>
                      )}
                      {raid.videos.map((video) => (
                        <button
                          key={video.url}
                          data-url={video.url}
                          onClick={() => playVideo(video.url, video.title)}
                          className={`w-full px-4 py-2 text-left flex items-center gap-2 transition-colors cursor-pointer border-t border-gray-700/30 ${
                            activeVideo === video.url
                              ? "bg-amber-600/20 text-amber-400"
                              : "text-white/70 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className="flex-shrink-0 text-xs">
                            {activeVideo === video.url ? "\u25B6" : "\u25B7"}
                          </span>
                          <span className="text-xs">{video.title}</span>
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Video player */}
            <div className="order-1 lg:order-2 flex-1 min-w-0">
              <div className="lg:sticky lg:top-8 bg-white/5 rounded-lg border border-gray-700 overflow-hidden">
                <div className="px-4 py-3 bg-white/10 text-white font-bold text-sm uppercase tracking-wider">
                  {activeVideo ? activeVideoTitle : "Now Playing"}
                </div>
                {activeVideo ? (
                  <div className="aspect-video bg-black">
                    <ReactPlayer
                      url={activeVideo}
                      controls
                      playing={userClicked}
                      width="100%"
                      height="100%"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center aspect-video text-white/30 text-lg">
                    Select a video to play
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
