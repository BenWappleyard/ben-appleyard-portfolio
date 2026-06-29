"use client";

import { useEffect, useRef, useState } from "react";

// Shared API loader — only loads the script once across all instances
let ytApiState: "idle" | "loading" | "ready" = "idle";
const ytCallbacks: (() => void)[] = [];

function loadYouTubeAPI(onReady: () => void) {
  if (ytApiState === "ready") { onReady(); return; }
  ytCallbacks.push(onReady);
  if (ytApiState === "loading") return;
  ytApiState = "loading";
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
  (window as any).onYouTubeIframeAPIReady = () => {
    ytApiState = "ready";
    ytCallbacks.splice(0).forEach((cb) => cb());
  };
}

// Ensures only one track plays at a time
let stopCurrentTrack: (() => void) | null = null;

interface Props {
  videoId: string;
  children: React.ReactNode;
  as?: "h1" | "h2";
  className?: string;
  style?: React.CSSProperties;
}

type Status = "idle" | "playing" | "paused";

export default function SongHeading({ videoId, children, as: Tag = "h2", className, style }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const playerRef = useRef<any>(null);
  const playerReadyRef = useRef(false);
  const pendingPlayRef = useRef(false);
  const containerId = `yt-${videoId}`;

  // Pre-load the API and create the player silently on mount
  useEffect(() => {
    loadYouTubeAPI(() => {
      if (playerRef.current) return;
      playerRef.current = new (window as any).YT.Player(containerId, {
        videoId,
        playerVars: { autoplay: 0, controls: 0 },
        events: {
          onReady: () => {
            playerReadyRef.current = true;
            if (pendingPlayRef.current) {
              pendingPlayRef.current = false;
              playerRef.current?.playVideo();
            }
          },
          onStateChange: (e: any) => {
            const { PlayerState } = (window as any).YT;
            if (e.data === PlayerState.PLAYING) {
              setStatus("playing");
              stopCurrentTrack = () => {
                playerRef.current?.pauseVideo();
                setStatus("paused");
              };
            } else if (e.data === PlayerState.ENDED) {
              setStatus("idle");
              stopCurrentTrack = null;
            }
          },
        },
      });
    });

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
      playerReadyRef.current = false;
      pendingPlayRef.current = false;
    };
  }, [videoId, containerId]);

  const toggle = () => {
    if (status === "playing") {
      playerRef.current?.pauseVideo();
      setStatus("paused");
      stopCurrentTrack = null;
      return;
    }
    stopCurrentTrack?.();
    setStatus("playing");
    stopCurrentTrack = () => {
      playerRef.current?.pauseVideo();
      setStatus("paused");
    };
    if (playerReadyRef.current) {
      playerRef.current?.playVideo();
    } else {
      pendingPlayRef.current = true;
    }
  };

  const icon = status === "playing" ? "⏸" : "▶";

  return (
    <Tag
      className={className ?? "mt-16 mb-6 text-[26px] md:text-[30px] font-extrabold text-ink tracking-[-0.5px] flex items-center gap-3"}
      style={{ fontFamily: "ThermalRegular", fontWeight: 400, ...style }}
    >
      <button
        onClick={toggle}
        aria-label={status === "playing" ? "Pause" : "Play"}
        className="w-8 h-8 rounded-full border border-edge flex items-center justify-center shrink-0 text-muted text-[11px] hover:border-ink hover:text-ink transition-colors"
      >
        {icon}
      </button>
      {children}
      <img
        src="/character-animation.svg"
        alt=""
        aria-hidden
        style={{
          width: 44,
          height: "auto",
          flexShrink: 0,
          opacity: status === "playing" ? 1 : 0,
          transform: status === "playing" ? "scale(1) translateY(0px)" : "scale(0.8) translateY(4px)",
          transition: "opacity 0.35s cubic-bezier(0.22,1,0.36,1), transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          pointerEvents: "none",
        }}
      />
      {/* YouTube player — off-screen but present in DOM as required */}
      <div
        id={containerId}
        style={{ position: "fixed", left: -9999, top: -9999, width: 1, height: 1 }}
      />
    </Tag>
  );
}
