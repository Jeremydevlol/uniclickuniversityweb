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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000) // Pequeño delay para asegurar que el iframe se renderice

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&loop=${loop ? 1 : 0}&autoplay=${autoPlay ? 1 : 0}&muted=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&title=0&byline=0&portrait=0&background=1`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title={title}
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
