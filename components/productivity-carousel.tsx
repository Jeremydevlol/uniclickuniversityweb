"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Datos de las tarjetas con diseño modernizado
const carouselItems = [
  {
    id: 1,
    title: "Gestión de Tareas",
    description:
      "Organiza y prioriza el trabajo de tu equipo sin esfuerzo. Automatiza asignaciones y seguimiento de progreso.",
    icon: (
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
        className="text-white"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" x2="16" y1="2" y2="6"></line>
        <line x1="8" x2="8" y1="2" y2="6"></line>
        <line x1="3" x2="21" y1="10" y2="10"></line>
        <path d="m9 16 2 2 4-4"></path>
      </svg>
    ),
    gradient: "bg-gradient-to-br from-violet-600/90 via-indigo-700/80 to-purple-800/90",
    glow: "before:bg-violet-600/20",
    content: (
      <div className="mt-6 space-y-3">
        <div className="h-9 bg-white/10 backdrop-blur-md rounded-xl flex items-center px-4">
          <div className="w-4 h-4 rounded-full bg-violet-400/80 mr-3"></div>
          <div className="h-2 w-32 bg-white/20 rounded-full"></div>
        </div>
        <div className="h-9 bg-white/10 backdrop-blur-md rounded-xl flex items-center px-4">
          <div className="w-4 h-4 rounded-full bg-violet-400/60 mr-3"></div>
          <div className="h-2 w-24 bg-white/20 rounded-full"></div>
        </div>
        <div className="h-9 bg-white/10 backdrop-blur-md rounded-xl flex items-center px-4">
          <div className="w-4 h-4 rounded-full bg-violet-400/40 mr-3"></div>
          <div className="h-2 w-28 bg-white/20 rounded-full"></div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Automatización",
    description:
      "Flujos de trabajo inteligentes que ahorran tiempo y reducen errores. Conecta todas tus herramientas en un solo lugar.",
    icon: (
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
        className="text-white"
      >
        <path d="M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
        <path d="M14 2v6h6"></path>
        <path d="M9 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
        <path d="M15 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
        <path d="M9 18a3 3 0 0 0 6 0"></path>
      </svg>
    ),
    gradient: "bg-gradient-to-br from-blue-600/90 via-blue-700/80 to-cyan-800/90",
    glow: "before:bg-blue-600/20",
    content: (
      <div className="mt-6 space-y-2">
        <div className="h-24 bg-white/10 backdrop-blur-md rounded-xl p-4">
          <div className="text-blue-300/80 text-xs font-mono">
            <pre className="opacity-90">
              {`function automate() {
const tasks = getWorkflow();
return tasks.map(task => 
  processTask(task)
);
}`}
            </pre>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Análisis de Datos",
    description: "Insights accionables para tomar mejores decisiones. Visualiza tendencias y patrones en tiempo real.",
    icon: (
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
        className="text-white"
      >
        <path d="M3 3v18h18"></path>
        <path d="m19 9-5 5-4-4-3 3"></path>
      </svg>
    ),
    gradient: "bg-gradient-to-br from-emerald-600/90 via-teal-700/80 to-green-800/90",
    glow: "before:bg-emerald-600/20",
    content: (
      <div className="mt-6 h-32 bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-end justify-around">
        <div className="w-8 h-40% bg-emerald-400/40 rounded-t-md"></div>
        <div className="w-8 h-70% bg-emerald-400/60 rounded-t-md"></div>
        <div className="w-8 h-30% bg-emerald-400/40 rounded-t-md"></div>
        <div className="w-8 h-90% bg-emerald-400/80 rounded-t-md"></div>
        <div className="w-8 h-60% bg-emerald-400/60 rounded-t-md"></div>
        <div className="w-8 h-40% bg-emerald-400/40 rounded-t-md"></div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Integraciones",
    description:
      "Conecta con todas tus herramientas favoritas. Más de 100 integraciones disponibles para optimizar tu flujo de trabajo.",
    icon: (
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
        className="text-white"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    ),
    gradient: "bg-gradient-to-br from-amber-600/90 via-orange-700/80 to-yellow-800/90",
    glow: "before:bg-amber-600/20",
    content: (
      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="aspect-square rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
          <div className="w-10 h-10 rounded-lg bg-amber-400/30 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
          </div>
        </div>
        <div className="aspect-square rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
          <div className="w-10 h-10 rounded-lg bg-amber-400/30 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="4.93" x2="9.17" y1="4.93" y2="9.17"></line>
              <line x1="14.83" x2="19.07" y1="14.83" y2="19.07"></line>
              <line x1="14.83" x2="19.07" y1="9.17" y2="4.93"></line>
              <line x1="14.83" x2="18.36" y1="9.17" y2="5.64"></line>
              <line x1="4.93" x2="9.17" y1="19.07" y2="14.83"></line>
            </svg>
          </div>
        </div>
        <div className="aspect-square rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
          <div className="w-10 h-10 rounded-lg bg-amber-400/30 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Reportes",
    description:
      "Genera informes detallados y personalizados. Comparte resultados con tu equipo y clientes de forma sencilla.",
    icon: (
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
        className="text-white"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 2v6h6"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
        <path d="M10 9H8"></path>
      </svg>
    ),
    gradient: "bg-gradient-to-br from-pink-600/90 via-rose-700/80 to-red-800/90",
    glow: "before:bg-pink-600/20",
    content: (
      <div className="mt-6 space-y-3">
        <div className="h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center px-4">
          <div className="w-5 h-5 rounded-md bg-pink-400/60 mr-3 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
          </div>
          <div className="h-2.5 w-32 bg-white/20 rounded-full"></div>
          <div className="ml-auto px-2 py-1 bg-pink-500/30 rounded-md text-xs text-white/90">PDF</div>
        </div>
        <div className="h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center px-4">
          <div className="w-5 h-5 rounded-md bg-pink-400/60 mr-3 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
          </div>
          <div className="h-2.5 w-24 bg-white/20 rounded-full"></div>
          <div className="ml-auto px-2 py-1 bg-pink-500/30 rounded-md text-xs text-white/90">XLS</div>
        </div>
      </div>
    ),
  },
]

export default function ProductivityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Calcular cuántas tarjetas mostrar según el ancho de la pantalla
  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    // Configurar inicialmente
    handleResize()

    // Añadir listener para cambios de tamaño
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Función para avanzar al siguiente conjunto de tarjetas
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1
      return newIndex >= carouselItems.length ? 0 : newIndex
    })
  }

  // Función para retroceder al conjunto anterior de tarjetas
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1
      return newIndex < 0 ? carouselItems.length - 1 : newIndex
    })
  }

  // Función para ir a un índice específico
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Manejo de eventos táctiles para deslizar
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Deslizar a la izquierda
      nextSlide()
    }

    if (touchStart - touchEnd < -100) {
      // Deslizar a la derecha
      prevSlide()
    }
  }

  // Calcular el número de grupos de tarjetas
  const totalGroups = Math.ceil(carouselItems.length / visibleCards)
  const currentGroup = Math.floor(currentIndex / 1)

  // Obtener las tarjetas visibles actuales
  const visibleItems = carouselItems.slice(currentIndex, currentIndex + visibleCards)

  // Si no hay suficientes tarjetas para llenar la vista, añadir desde el principio
  if (visibleItems.length < visibleCards) {
    const remaining = visibleCards - visibleItems.length
    const additionalItems = carouselItems.slice(0, remaining)
    visibleItems.push(...additionalItems)
  }

  return (
    <div className="relative px-4 py-16 mb-10">
      {/* Contenedor principal del carrusel */}
      <div
        ref={carouselRef}
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Tarjetas del carrusel */}
        <div className="relative overflow-visible">
          <motion.div
            className="flex gap-6 py-4"
            animate={{ x: -currentIndex * (100 / visibleCards + 6) + "%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`flex-1 min-w-0 ${item.gradient} rounded-2xl p-6 shadow-xl backdrop-blur-md border border-white/20 relative overflow-hidden z-20 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:blur-3xl before:opacity-40 before:z-0 ${item.glow}`}
                style={{
                  width: `calc(${100 / visibleCards}% - ${((visibleCards - 1) * 24) / visibleCards}px)`,
                  minWidth: 280,
                }}
              >
                {/* Efecto de brillo en la esquina */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>

                {/* Contenido de la tarjeta */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-white/90 text-sm mb-6 font-light leading-relaxed">{item.description}</p>
                  {item.content}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 z-50 group shadow-lg"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all border border-white/20 z-50 group shadow-lg"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Indicadores de posición */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index * visibleCards)}
            className={`h-1.5 md:h-2 rounded-full transition-all ${
              currentGroup === index ? "bg-white w-6 md:w-8" : "bg-white/30 w-1.5 md:w-2 hover:bg-white/50"
            }`}
            aria-label={`Ir al grupo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
