"use client"

import { useEffect, useState } from "react"

interface SimpleVideoCacheProps {
  videoId: string
  title: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function SimpleVideoCache({ 
  videoId, 
  title, 
  autoPlay = true, 
  muted = true, 
  loop = true, 
  controls = false,
  className = "",
  style = {}
}: SimpleVideoCacheProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setError('Timeout al cargar el video')
      }
    }, 10000) // 10 segundos timeout

    return () => clearTimeout(timer)
  }, [isLoaded])

  const handleLoad = () => {
    setIsLoaded(true)
    setError(null)
  }

  const handleError = () => {
    setError('Error al cargar el video de Vimeo')
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!isLoaded && !error && (
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
            <p className="text-red-400 mb-2">⚠️ {error}</p>
            <p className="text-sm text-gray-400">Video ID: {videoId}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Reintentar
            </button>
          </div>
        </div>
      )}
      
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&loop=${loop ? 1 : 0}&autoplay=${autoPlay ? 1 : 0}&muted=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&title=0&byline=0&portrait=0&background=1`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
        onLoad={handleLoad}
        onError={handleError}
        className={className}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          ...style
        }}
      />
    </div>
  )
}
