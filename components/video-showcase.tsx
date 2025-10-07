"use client"

import React, { useState, useRef, useEffect } from "react"

interface VideoShowcaseProps {
  videoUrl: string
  className?: string
}

export default function VideoShowcase({ videoUrl, className = "" }: VideoShowcaseProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Forzar la reproducción del video cuando el componente se monta
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Error al reproducir el video:", error)
        // Si falla, intentar con muted
        if (videoRef.current) {
          videoRef.current.muted = true
          videoRef.current.play().catch((err) => {
            console.log("Error al reproducir el video incluso con muted:", err)
          })
        }
      })
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Contenedor del video con bordes animados */}
      <div 
        className="relative group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Borde animado - 2px */}
        <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-border-rotate animate-border-glow"></div>

        {/* Contenedor del video */}
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500 aspect-video">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{pointerEvents:"none"}}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            x-webkit-airplay="deny"
          >
            <source src="https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/danieldtoro/Video%20principal/historia_de_daniel_new_video1123456%20(2160p).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5pZWxkdG9yby9WaWRlbyBwcmluY2lwYWwvaGlzdG9yaWFfZGVfZGFuaWVsX25ld192aWRlbzExMjM0NTYgKDIxNjBwKS5tcDQiLCJpYXQiOjE3NTk4NTc0NjQsImV4cCI6MTc5MTM5MzQ2NH0.kJwglI4tly0OU1kV2FZzqccjUXGItIr9s0NwOabEtcQ" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>

          {/* Botón de audio en la esquina superior derecha */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={toggleMute}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl hover:bg-black/70 transition-all duration-300 hover:scale-110"
            >
              {isMuted ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}