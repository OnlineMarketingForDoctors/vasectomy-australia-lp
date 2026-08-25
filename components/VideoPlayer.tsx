"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  /** Describes the clip for screen readers and as the play button's label. */
  label: string;
  caption?: string;
};

/**
 * Click-to-play video. The poster is a static image until the viewer asks for
 * the clip, so the mp4 is never downloaded on page load.
 */
export default function VideoPlayer({ src, poster, label, caption }: Props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <figure>
      <div className="relative aspect-video overflow-hidden rounded-3xl bg-teal-deep">
        {playing ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            preload="auto"
            aria-label={label}
            className="h-full w-full object-contain"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${label}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <Image
              src={poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 30rem, 100vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
            />
            <span
              className="absolute inset-0 bg-teal-deep/15 transition-colors duration-300 group-hover:bg-teal-deep/25"
              aria-hidden="true"
            />
            <span
              className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-clay text-white shadow-lg shadow-teal-deep/40 transition-transform duration-300 group-hover:scale-110 md:h-[72px] md:w-[72px]"
              aria-hidden="true"
            >
              <svg width="22" height="24" viewBox="0 0 22 24" fill="currentColor">
                <path d="M21 10.27a2 2 0 0 1 0 3.46L3 23.6A2 2 0 0 1 0 21.87V2.13A2 2 0 0 1 3 .4l18 9.87Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-[14px] leading-relaxed text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
