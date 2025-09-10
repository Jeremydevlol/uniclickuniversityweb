"use client"

import { useEffect } from "react"

interface WebChatProps {
  projectId: string
  backendUrl: string
}

export default function WebChat({ projectId, backendUrl }: WebChatProps) {
  useEffect(() => {
    // Crear el script dinámicamente
    const script = document.createElement("script")
    script.src = `${backendUrl}/webchat.js`
    script.async = true
    script.setAttribute("data-project-id", projectId)
    script.setAttribute("data-backend-url", backendUrl)

    // Añadir el script al body
    document.body.appendChild(script)

    // Función de limpieza para eliminar el script cuando el componente se desmonte
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [projectId, backendUrl]) // Dependencias del efecto

  return null // Este componente no renderiza nada visible
}
