"use client"

import { useState, useEffect } from "react"

interface ChatButtonProps {
  label?: string
}

export default function ChatButton({ label = "Chat con Uniclick" }: ChatButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isChatAvailable, setIsChatAvailable] = useState(false)

  useEffect(() => {
    // Check if chat is available
    const checkChatAvailability = () => {
      if (typeof window !== "undefined" && window.UniclickChat) {
        setIsChatAvailable(true)
      } else {
        // Retry after a delay
        setTimeout(checkChatAvailability, 1000)
      }
    }

    checkChatAvailability()
  }, [])

  const handleChatToggle = () => {
    if (!isChatAvailable) {
      console.log("Chat service not available")
      return
    }

    setIsOpen(!isOpen)

    // Dispatch custom event that the chat script can listen to
    try {
      const event = new CustomEvent("toggleUniclickChat", {
        detail: { isOpen: !isOpen },
      })
      document.dispatchEvent(event)
    } catch (error) {
      console.warn("Could not dispatch chat event:", error)
    }
  }

  // Don't render if chat is not available
  if (!isChatAvailable) {
    return null
  }

  return (
    <button
      onClick={handleChatToggle}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
      aria-label={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>
  )
}
