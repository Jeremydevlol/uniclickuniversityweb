"use client"

import React, { useRef, useEffect, useState } from "react"
import SimpleVideoCache from "./simple-video-cache"

interface VideoShowcaseProps {
  videoUrl: string
  className?: string
}

export default function VideoShowcase({ videoUrl, className = "" }: VideoShowcaseProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<any>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Cargar el script de Vimeo Player API y configurar el player
    const script = document.createElement('script')
    script.src = 'https://player.vimeo.com/api/player.js'
    script.async = true
    script.onload = () => {
      if (iframeRef.current && (window as any).Vimeo) {
        playerRef.current = new (window as any).Vimeo.Player(iframeRef.current)
      }
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    // Controlar el audio sin reiniciar el video
    if (playerRef.current) {
      playerRef.current.setMuted(isMuted)
    }
  }, [isMuted])

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
          <div style={{padding:"56.25% 0 0 0",position:"relative"}}>
            <SimpleVideoCache
              videoId="1121135074"
              title="historia de daniel new video1123456"
              autoPlay={true}
              muted={isMuted}
              loop={true}
              controls={false}
              style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}
            />
          </div>

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