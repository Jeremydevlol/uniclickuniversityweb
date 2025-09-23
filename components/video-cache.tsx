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
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [iframeElement, setIframeElement] = useState<HTMLIFrameElement | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    
    // Verificar si el video ya está en caché
    const cachedVideo = videoCache.get(videoId)
    
    if (cachedVideo) {
      setIframeElement(cachedVideo)
      setIsLoaded(true)
      setIsLoading(false)
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

    // Manejar la carga del video
    const handleLoad = () => {
      videoCache.set(videoId, iframe)
      setIframeElement(iframe)
      setIsLoaded(true)
      setIsLoading(false)
    }

    const handleError = () => {
      setError('Error al cargar el video')
      setIsLoading(false)
    }

    iframe.addEventListener('load', handleLoad)
    iframe.addEventListener('error', handleError)
    
    return () => {
      iframe.removeEventListener('load', handleLoad)
      iframe.removeEventListener('error', handleError)
    }
  }, [videoId, autoPlay, muted, loop, controls, title, className, style])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-xl">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Cargando video...</p>
          </div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-xl">
          <div className="text-white text-center">
            <p className="text-red-400 mb-2">⚠️ Error al cargar el video</p>
            <p className="text-sm text-gray-400">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Reintentar
            </button>
          </div>
        </div>
      )}
      
      {isLoaded && iframeElement && (
        <div
          ref={(el) => {
            if (el && iframeElement && !el.contains(iframeElement)) {
              el.appendChild(iframeElement)
            }
          }}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  )
}
