"use client";

import Navigation from "@/components/Navigation";
import ReactPlayer from "react-player";

export default function Movies() {
  const videos = [
    "https://www.youtube.com/watch?v=T3yPyc5iSgE",
    "https://www.youtube.com/watch?v=m4g0sVl2h2w",
    "https://www.youtube.com/watch?v=v24_B3eW8sA",
  ];

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen">
      <Navigation />
      <main className="flex flex-col gap-8 p-8 pb-20 sm:p-20">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-4">WoW Movies - Other</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {videos.map((url) => (
              <div key={url} className="aspect-video">
                <ReactPlayer url={url} controls width="100%" height="100%" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
