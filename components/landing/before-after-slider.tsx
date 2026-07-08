"use client";

import { useEffect, useRef, useState } from "react";
import { GripVertical } from "lucide-react";

import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  initialPosition?: number;
  className?: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel,
  initialPosition = 50,
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(initialPosition);
  const [containerWidth, setContainerWidth] = useState(0);
  const draggingRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function updatePosition(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percent)));
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    updatePosition(e.clientX);
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border shadow-2xl",
        className
      )}
    >
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="relative aspect-square select-none overflow-hidden cursor-ew-resize sm:aspect-video"
      >
        {/* TODO: substituir pelos arquivos reais (hambúrguer amador/IA) quando disponíveis */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterImage}
          alt={afterLabel}
          draggable={false}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
          {afterLabel}
        </div>

        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white/50"
          style={{ width: `${position}%` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={beforeImage}
            alt={beforeLabel}
            draggable={false}
            className="absolute inset-0 h-full max-w-none object-cover"
            style={{ width: containerWidth }}
          />
          <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
            {beforeLabel}
          </div>
        </div>

        <div
          className="absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-white"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white shadow">
            <GripVertical className="size-4 text-zinc-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
