"use client"

import Script from "next/script"
import { useEffect } from "react"

export default function UniclickChatScript() {
  useEffect(() => {
    let sessionId = sessionStorage.getItem("webchat_sessionId")

    if (!sessionId) {
      // Si no existe, generamos uno único y lo guardamos en sessionStorage
      sessionId = "session-" + Math.random().toString(36).substr(2, 9)
      sessionStorage.setItem("webchat_sessionId", sessionId)
    }
  }, [])

  return (
    <>
      {/* Uniclick Chatbot Script */}
      <Script
        src="https://uniclick-backend.onrender.com/webchat.js"
        data-project-id="1b1d3f23-059a-402c-90f9-bd68bcb82bb9-701"
        data-backend-url="https://uniclick-backend.onrender.com"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Uniclick chat script loaded successfully")
        }}
        onError={(e) => {
          console.warn("Uniclick chat script failed to load:", e)
        }}
      />
    </>
  )
}
