"use client"

import React, { useRef, useEffect, useState } from "react"

interface VideoShowcaseProps {
  videoUrl: string
  className?: string
}

export default function VideoShowcase({ videoUrl, className = "" }: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Configuración del video
      video.loop = true
      video.muted = isMuted
      video.playsInline = true
      video.volume = 0.7
      video.autoplay = false // No autoplay, requiere click
      video.preload = "auto"
      
      // Event listeners para el bucle
      video.addEventListener('ended', () => {
        video.currentTime = 0
        video.play()
      })
      
      return () => {
        video.removeEventListener('ended', () => {})
      }
    }
  }, [isMuted])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleVideoClick = () => {
    const video = videoRef.current
    if (video) {
      if (video.paused) {
        video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Contenedor del video con bordes animados */}
      <div 
        className="relative group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleVideoClick}
      >
        {/* Borde exterior animado - más grueso */}
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-green-500 via-orange-500 to-blue-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-border-rotate animate-border-glow"></div>
        
        {/* Borde medio con animación de brillo */}
        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-green-400 via-orange-400 to-blue-400 opacity-60 group-hover:opacity-85 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-orange-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-rotate"></div>
        </div>

        {/* Borde interior con animación de brillo */}
        <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-green-300 via-orange-300 to-blue-300 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-300 via-orange-300 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-rotate"></div>
        </div>

        {/* Contenedor del video */}
        <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl group-hover:shadow-green-500/50 transition-all duration-500 aspect-video">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster=""
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>

          {/* Overlay con botón de play central */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Botón de play/pause central */}
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30 shadow-xl">
              {isPlaying ? (
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </div>
          </div>

          {/* Efectos de brillo en las esquinas - más grandes y prominentes */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400/50 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-400/50 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow animation-delay-100"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/50 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow animation-delay-300"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-400/50 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow animation-delay-500"></div>
        </div>
      </div>

      {/* Efectos de partículas flotantes - más grandes y visibles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-100"></div>
        <div className="absolute top-3/4 right-1/4 w-2.5 h-2.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-200"></div>
        <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-400"></div>
      </div>
    </div>
  )
}