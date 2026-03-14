"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export default function FadeImage({ className = "", ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      className={`${className} transition-all duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
      onLoad={() => setLoaded(true)}
    />
  );
}
