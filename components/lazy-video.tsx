"use client"

import { useEffect, useRef, useState } from "react"

interface LazyVideoProps {
  src: string
  className?: string
  poster?: string
  priority?: boolean
  maxLoops?: number // Número máximo de repeticiones antes de pausar
  onVideoClick?: () => void
}

export default function LazyVideo({ 
  src, 
  className = "", 
  poster,
  priority = false,
  maxLoops = 2, // Por defecto, 2 repeticiones
  onVideoClick
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const loopCountRef = useRef(0) // Contador de repeticiones

  useEffect(() => {
    if (priority) {
      // Si es prioritario, cargar inmediatamente y reproducir infinitamente
      if (videoRef.current) {
        videoRef.current.load()
        videoRef.current.play().catch((error) => {
          console.log("Error al reproducir video prioritario:", error)
        })
      }
      return
    }

    // Intersection Observer para lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            
            if (videoRef.current && !isLoaded) {
              // Cargar el video cuando sea visible
              videoRef.current.load()
              setIsLoaded(true)
              
              // Intentar reproducir cuando esté listo
              const playVideo = () => {
                if (videoRef.current) {
                  videoRef.current.play().catch((error) => {
                    console.log("Error al reproducir el video:", error)
                  })
                }
              }
              
              videoRef.current.addEventListener('loadeddata', playVideo, { once: true })
            } else if (videoRef.current && isLoaded && videoRef.current.paused) {
              // Si ya estaba cargado pero pausado, reiniciar contador y reproducir
              loopCountRef.current = 0
              videoRef.current.play().catch((error) => {
                console.log("Error al reproducir el video:", error)
              })
            }
          } else if (!priority && videoRef.current && isLoaded) {
            // Pausar el video cuando no sea visible para ahorrar recursos
            videoRef.current.pause()
          }
        })
      },
      { 
        threshold: 0.1, 
        rootMargin: '100px' // Empezar a cargar antes de que sea visible
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [priority, isLoaded])

  // Manejar el evento 'ended' para contar repeticiones
  useEffect(() => {
    if (priority) {
      // Videos prioritarios no tienen límite de loops
      return
    }

    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      loopCountRef.current += 1
      
      if (loopCountRef.current >= maxLoops) {
        // Después de N repeticiones, pausar el video
        video.pause()
        console.log(`Video pausado después de ${maxLoops} repeticiones`)
      } else {
        // Continuar reproduciendo
        video.currentTime = 0
        video.play().catch((error) => {
          console.log("Error al reproducir el video en loop:", error)
        })
      }
    }

    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('ended', handleEnded)
    }
  }, [priority, maxLoops])

  return (
    <video
      ref={videoRef}
      loop={priority} // Solo loop infinito si es prioritario
      muted
      playsInline
      preload={priority ? "auto" : "none"}
      poster={poster}
      className={className}
      style={{ pointerEvents: "none" }}
      disablePictureInPicture
      controlsList="nodownload nofullscreen noremoteplayback"
      onClick={onVideoClick}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
      Tu navegador no soporta el elemento de video.
    </video>
  )
}

