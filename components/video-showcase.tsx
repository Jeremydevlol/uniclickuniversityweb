"use client"

import React, { useRef, useEffect, useState } from "react"

interface VideoShowcaseProps {
  videoUrl: string
  className?: string
}

export default function VideoShowcase({ videoUrl, className = "" }: VideoShowcaseProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<any>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Cargar el script de Vimeo Player API de forma optimizada
    const initPlayer = () => {
      if (iframeRef.current && (window as any).Vimeo) {
        playerRef.current = new (window as any).Vimeo.Player(iframeRef.current)
        
        // Intentar activar el audio automáticamente
        playerRef.current.ready().then(() => {
          playerRef.current.setMuted(false).catch((error: any) => {
            console.log('Audio bloqueado por el navegador:', error)
            // El navegador bloqueó el audio, se activará con la primera interacción
          })
          playerRef.current.setVolume(1) // Volumen al máximo
        })
      }
    }

    if ((window as any).Vimeo) {
      // Si ya está cargado, úsalo directamente
      initPlayer()
    } else {
      // Solo cargar si no existe
      const script = document.createElement('script')
      script.src = 'https://player.vimeo.com/api/player.js'
      script.async = true
      script.defer = true
      script.onload = () => {
        initPlayer()
      }
      document.head.appendChild(script)

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
      }
    }

    // Activar audio en la primera interacción del usuario
    const enableAudioOnInteraction = () => {
      if (playerRef.current) {
        playerRef.current.setMuted(false)
        playerRef.current.setVolume(1)
      }
      // Remover los listeners después de la primera interacción
      document.removeEventListener('click', enableAudioOnInteraction)
      document.removeEventListener('touchstart', enableAudioOnInteraction)
      document.removeEventListener('keydown', enableAudioOnInteraction)
    }

    // Escuchar la primera interacción del usuario
    document.addEventListener('click', enableAudioOnInteraction, { once: true })
    document.addEventListener('touchstart', enableAudioOnInteraction, { once: true })
    document.addEventListener('keydown', enableAudioOnInteraction, { once: true })

    return () => {
      document.removeEventListener('click', enableAudioOnInteraction)
      document.removeEventListener('touchstart', enableAudioOnInteraction)
      document.removeEventListener('keydown', enableAudioOnInteraction)
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
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
          <div style={{padding:"56.25% 0 0 0",position:"relative"}}>
            <iframe
              ref={iframeRef}
              src="https://player.vimeo.com/video/1121135074?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1&muted=0&controls=0&title=0&byline=0&portrait=0&background=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="historia de daniel new video1123456"
              style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}