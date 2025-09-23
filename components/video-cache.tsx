"use client"

import { useEffect, useState } from "react"

interface VideoCacheProps {
  videoId: string
  title: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  className?: string
  style?: React.CSSProperties
}

// Cache global para videos
const videoCache = new Map<string, HTMLIFrameElement>()

export default function VideoCache({ 
  videoId, 
  title, 
  autoPlay = true, 
  muted = true, 
  loop = true, 
  controls = false,
  className = "",
  style = {}
}: VideoCacheProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [iframeElement, setIframeElement] = useState<HTMLIFrameElement | null>(null)

  useEffect(() => {
    // Verificar si el video ya está en caché
    const cachedVideo = videoCache.get(videoId)
    
    if (cachedVideo) {
      setIframeElement(cachedVideo)
      setIsLoaded(true)
      return
    }

    // Crear nuevo iframe
    const iframe = document.createElement('iframe')
    iframe.src = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&loop=${loop ? 1 : 0}&autoplay=${autoPlay ? 1 : 0}&muted=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&title=0&byline=0&portrait=0&background=1`
    iframe.frameBorder = "0"
    iframe.allow = "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
    iframe.referrerPolicy = "strict-origin-when-cross-origin"
    iframe.title = title
    iframe.style.position = "absolute"
    iframe.style.top = "0"
    iframe.style.left = "0"
    iframe.style.width = "100%"
    iframe.style.height = "100%"
    iframe.style.pointerEvents = "none"
    
    // Agregar clases y estilos personalizados
    if (className) {
      iframe.className = className
    }
    
    Object.assign(iframe.style, style)

    // Precargar el video
    iframe.addEventListener('load', () => {
      // Guardar en caché
      videoCache.set(videoId, iframe)
      setIframeElement(iframe)
      setIsLoaded(true)
    })

    // Pause el video inicialmente para precargar
    iframe.src = iframe.src.replace('autoplay=1', 'autoplay=0')
    
    return () => {
      // Limpiar listeners
      iframe.removeEventListener('load', () => {})
    }
  }, [videoId, autoPlay, muted, loop, controls, title, className, style])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {isLoaded && iframeElement && (
        <div
          ref={(el) => {
            if (el && iframeElement && !el.contains(iframeElement)) {
              el.appendChild(iframeElement)
              // Reanudar autoplay si está habilitado
              if (autoPlay) {
                const currentSrc = iframeElement.src
                iframeElement.src = currentSrc.replace('autoplay=0', 'autoplay=1')
              }
            }
          }}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  )
}
