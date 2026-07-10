"use client";

import { useRef, useState } from "react";
import { Volume2 } from "lucide-react";

import { cn } from "@/lib/utils";

type TestimonialVideoProps = {
  src: string;
  poster: string;
  aspect?: string;
  label: string;
  className?: string;
};

export function TestimonialVideo({
  src,
  poster,
  aspect,
  label,
  className,
}: TestimonialVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  function handleActivate() {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.muted = false;
    video.loop = false;
    video.play();
    setActive(true);
  }

  return (
    <div
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm transition-shadow duration-300 ease-premium hover:shadow-lg",
        className
      )}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <video
        ref={videoRef}
        className="size-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        controls={active}
        preload="metadata"
        aria-label={label}
        onPause={() => {
          if (videoRef.current?.ended) setActive(false);
        }}
      />

      {!active && (
        <button
          type="button"
          onClick={handleActivate}
          aria-label={`Ativar som — ${label}`}
          className="absolute inset-0 flex items-end justify-end bg-black/0 p-3 transition-colors hover:bg-black/10"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-transform duration-300 ease-premium group-hover:scale-110">
            <Volume2 className="size-4" />
          </span>
        </button>
      )}
    </div>
  );
}
