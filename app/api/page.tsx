"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Copy, Check, Terminal, Server, Database, Key, Cpu } from "lucide-react"

export default function ApiPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [codeCopied, setCodeCopied] = useState(false)

  useEffect(() => {
    // Simular tiempo de carga para las animaciones
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    // Configurar video de fondo (removed as per user request for white background)
    // if (videoRef.current) {
    //   videoRef.current.play().catch((error) => {
    //     console.log("Error al reproducir el video:", error)
    //   })
    // }

    return () => clearTimeout(timer)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const handleCopyCode = () => {
    const code = `// Instala nuestro SDK
npm install uniclick-sdk

// Autenticación con la API
import { Uniclick } from 'uniclick-sdk';

const uniclick = new Uniclick({
apiKey: 'tu_api_key',
});

// Enviar un mensaje a través de WhatsApp
const response = await uniclick.whatsapp.sendMessage({
to: '+34600000000',
message: 'Hola, este es un mensaje automático desde Uniclick.',
agentId: 'ventas_agent',
});

console.log(response);`

    navigator.clipboard.writeText(code)
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2000)
  }

  // Endpoints de ejemplo
  const endpoints = [
    {
      name: "Envío de mensajes",
      endpoint: "POST /api/v1/messages",
      description: "Envía mensajes a través de WhatsApp y otras plataformas",
      method: "POST",
    },
    {
      name: "Creación de agentes",
      endpoint: "POST /api/v1/agents",
      description: "Crea y configura nuevos agentes digitales",
      method: "POST",
    },
    {
      name: "Historial de conversaciones",
      endpoint: "GET /api/v1/conversations",
      description: "Obtiene el historial de conversaciones de tus agentes",
      method: "GET",
    },
    {
      name: "Analíticas",
      endpoint: "GET /api/v1/analytics",
      description: "Obtiene métricas y análisis de rendimiento",
      method: "GET",
    },
    {
      name: "Webhooks",
      endpoint: "POST /api/v1/webhooks",
      description: "Configura webhooks para recibir eventos en tiempo real",
      method: "POST",
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden font-sans flex flex-col bg-white">
      {/* Video de fondo con efecto parallax - REMOVED */}
      {/* <div className="fixed inset-0 w-full h-full z-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.5)" }}
      >
        <source src="https://1716637182.rsc.cdn77.org/web/video/replika_bg_opt.mp4" type="video/mp4" />
      </video> */}

      {/* Overlay para mejorar la legibilidad con gradiente moderno - REMOVED */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-[#9133e8]/30 to-[#9133e8]/20" /> */}

      {/* Partículas animadas para efecto moderno - REMOVED */}
      {/* <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-md"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div> */}

      {/* Contenido */}
      <div className="relative z-10">
        {/* Navegación con glassmorphism */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-50 flex items-center justify-between p-4 md:px-10 backdrop-blur-xl bg-white/80 border-b border-gray-200 w-full fixed top-0 left-0 right-0"
        >
          {/* Logo a la izquierda */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold text-gray-800 tracking-wider modern-glow-text">
                <span className="text-[#9133e8]">Uni</span>click
              </h1>
            </Link>
          </div>

          {/* Menú central - visible en pantallas medianas y grandes */}
          <div className="hidden md:flex items-center justify-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-all hover:scale-105 text-sm font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9133e8] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/comunidad"
              className="text-gray-700 hover:text-gray-900 transition-all hover:scale-105 text-sm font-medium relative group"
            >
              Comunidad
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9133e8] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/api"
              className="text-gray-900 transition-all hover:scale-105 text-sm font-medium relative group"
            >
              API
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9133e8] transition-all duration-300"></span>
            </Link>
            <Link
              href="/plataforma"
              className="text-gray-700 hover:text-gray-900 transition-all hover:scale-105 text-sm font-medium relative group"
            >
              Plataforma
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9133e8] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Botón de login a la derecha */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Link
                href="https://app.uniclick.io"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9133e8]/80 to-[#7928ca]/80 backdrop-blur-xl border border-purple-200 text-white hover:from-[#9133e8] hover:to-[#7928ca] transition-all flex items-center space-x-2 group shadow-[0_0_15px_rgba(145,51,232,0.3)]"
              >
                <span>Log in</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-gradient-to-r from-[#9133e8]/80 to-[#7928ca]/80 backdrop-blur-xl border border-purple-200"
              >
                {mobileMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Espacio para compensar el header fijo */}
        <div className="h-[72px]"></div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl border-b border-gray-200 fixed top-[72px] left-0 right-0 z-40"
          >
            <div className="flex flex-col space-y-4 p-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-all text-sm font-medium py-2 border-b border-gray-100"
              >
                Home
              </Link>
              <Link
                href="/comunidad"
                className="text-gray-700 hover:text-gray-900 transition-all text-sm font-medium py-2 border-b border-gray-100"
              >
                Comunidad
              </Link>
              <Link
                href="/api"
                className="text-gray-900 hover:text-gray-900 transition-all text-sm font-medium py-2 border-b border-gray-100"
              >
                API
              </Link>
              <Link
                href="/plataforma"
                className="text-gray-700 hover:text-gray-900 transition-all text-sm font-medium py-2 border-b border-gray-100"
              >
                Plataforma
              </Link>
              <Link
                href="https://app.uniclick.io"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9133e8]/80 to-[#7928ca]/80 backdrop-blur-xl border border-purple-200 text-white hover:from-[#9133e8] hover:to-[#7928ca] transition-all flex items-center justify-center space-x-2 mt-4"
              >
                <span>Log in</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        )}

        {/* Hero de la API */}
        <section className="pt-20 pb-32 px-4">
          <div className="max-w-6xl mx-auto">
            {isLoaded && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-6 text-center"
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[#9133e8]/10 backdrop-blur-md border border-[#9133e8]/20 text-gray-700 text-sm font-medium mb-8">
                    ✨ API para desarrolladores
                  </span>
                </motion.div>

                <motion.h1
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight leading-tight text-center"
                >
                  Potencia tu
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9133e8] to-purple-400">
                    aplicación con IA
                  </span>
                </motion.h1>

                <motion.p
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl mx-auto text-center"
                >
                  Integra nuestros agentes digitales en tus aplicaciones con una API simple, potente y escalable.
                </motion.p>

                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 flex-wrap"
                >
                  <Button className="bg-[#9133e8] hover:bg-[#9133e8]/90 text-white rounded-full px-6 py-4 text-base sm:px-8 sm:py-7 sm:text-lg font-medium transition-all hover:shadow-[0_0_25px_rgba(145,51,232,0.4)] w-full sm:w-auto">
                    Obtener API Key
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full px-6 py-4 text-base sm:px-8 sm:py-7 sm:text-lg font-medium transition-all w-full sm:w-auto"
                  >
                    Ver documentación
                  </Button>
                </motion.div>
              </>
            )}
          </div>
        </section>

        {/* Sección de ejemplo de código */}
        <section className="py-20 relative bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5e5bd5]/10 to-[#4c5fd5]/10 backdrop-blur-sm z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 backdrop-blur-md text-gray-700 text-sm font-medium mb-4">
                <Code className="inline-block w-4 h-4 mr-1" /> Código
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                Comienza en minutos
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Integra Uniclick en tu aplicación con unas pocas líneas de código.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-700 text-sm">uniclick-example.js</div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm transition-colors"
                  >
                    {codeCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{codeCopied ? "Copiado" : "Copiar"}</span>
                  </button>
                </div>
                <div className="p-4 sm:p-6 overflow-x-auto">
                  <pre className="text-gray-900 text-sm font-mono">
                    {`// Instala nuestro SDK
npm install uniclick-sdk

// Autenticación con la API
import { Uniclick } from 'uniclick-sdk';

const uniclick = new Uniclick({
apiKey: 'tu_api_key',
});

// Enviar un mensaje a través de WhatsApp
const response = await uniclick.whatsapp.sendMessage({
to: '+34600000000',
message: 'Hola, este es un mensaje automático desde Uniclick.',
agentId: 'ventas_agent',
});

console.log(response);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de endpoints */}
        <section className="py-20 relative bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#9133e8]/10 backdrop-blur-md border border-[#9133e8]/20 text-gray-700 text-sm font-medium mb-4">
                <Terminal className="inline-block w-4 h-4 mr-1" /> Endpoints
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                API RESTful
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Accede a todas las funcionalidades de Uniclick a través de nuestra API REST.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-4">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 rounded-lg border border-gray-200 p-3 sm:p-4 hover:border-[#9133e8]/30 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base sm:text-lg text-gray-800 font-medium">{endpoint.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{endpoint.description}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          endpoint.method === "GET"
                            ? "bg-green-500/20 text-green-700 border border-green-500/30"
                            : "bg-blue-500/20 text-blue-700 border border-blue-500/30"
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <code className="px-2 py-1 text-xs sm:px-3 sm:text-sm rounded-lg bg-gray-200 text-gray-900 font-mono">
                        {endpoint.endpoint}
                      </code>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-gray-100 backdrop-blur-md hover:bg-gray-200 text-gray-800 rounded-full px-6 py-3 font-medium transition-all border border-gray-200 shadow-sm">
                Ver todos los endpoints
              </Button>
            </div>
          </div>
        </section>

        {/* Sección de beneficios */}
        <section className="py-20 relative bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5e5bd5]/10 to-white backdrop-blur-sm z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 backdrop-blur-md text-gray-700 text-sm font-medium mb-4">
                Ventajas
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                ¿Por qué elegir nuestra API?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Diseñada para desarrolladores que necesitan potencia y flexibilidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-100 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-[#9133e8]/30 transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#9133e8]/80 to-[#7928ca]/80 flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-800 font-bold mb-4">Alta disponibilidad</h3>
                <p className="text-gray-700">
                  API con 99.9% de uptime, diseñada para manejar millones de peticiones diarias sin comprometer el
                  rendimiento.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-[#9133e8]/30 transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#4ca8d5]/80 to-[#2a78a0]/80 flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-800 font-bold mb-4">Escalabilidad</h3>
                <p className="text-gray-700">
                  Escala automáticamente según tus necesidades, desde startups hasta grandes empresas con millones de
                  usuarios.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-[#9133e8]/30 transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#4cd5a6]/80 to-[#2a8c6a]/80 flex items-center justify-center mb-6">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-800 font-bold mb-4">Seguridad</h3>
                <p className="text-gray-700">
                  Todas las comunicaciones cifradas con TLS, autenticación con tokens JWT y cumplimiento de GDPR y CCPA.
                </p>
              </motion.div>
            </div>

            <div className="mt-16">
              <div className="bg-gradient-to-r from-[#9133e8]/10 to-[#7928ca]/10 backdrop-blur-xl rounded-3xl p-10 border border-gray-200 max-w-4xl mx-auto shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#9133e8] to-[#7928ca] flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      Modelos de IA avanzados
                    </h3>
                    <p className="text-gray-700">
                      Nuestra API utiliza los modelos de IA más avanzados del mercado, entrenados específicamente para
                      la comunicación empresarial y optimizados para diferentes sectores y casos de uso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de precios y registro */}
        <section className="py-20 relative bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#9133e8]/10 to-[#7928ca]/10 backdrop-blur-xl rounded-3xl p-10 border border-gray-200 relative overflow-hidden shadow-lg">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#9133e8]/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#7928ca]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">¿Listo para empezar?</h2>
                <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Registra tu cuenta de desarrollador y obtén una API key gratuita con 1,000 peticiones mensuales para
                  probar nuestro servicio.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="bg-white text-[#9133e8] hover:bg-gray-100 rounded-full px-6 py-3 text-base sm:text-lg font-medium transition-all w-full sm:w-auto shadow-md">
                    Registrarse gratis
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full px-6 py-3 text-base sm:text-lg font-medium transition-all w-full sm:w-auto shadow-sm"
                  >
                    Ver planes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200 relative z-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Link href="/">
                  <h1 className="text-2xl font-bold text-gray-800 tracking-wider modern-glow-text mb-4">
                    <span className="text-[#9133e8]">Uni</span>click
                  </h1>
                </Link>
                <p className="text-gray-600 mb-6">Automatización empresarial impulsada por IA</p>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
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
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
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
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
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
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
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
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-gray-800 font-medium mb-4">Producto</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Características
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Precios
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Integraciones
                    </Link>
                  </li>
                  <li>
                    <Link href="/api" className="text-gray-600 hover:text-gray-800 transition-colors">
                      API
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-800 font-medium mb-4">Recursos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Documentación
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Guías
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Webinars
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-gray-800 font-medium mb-4">Empresa</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Sobre nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Clientes
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Contacto
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
                      Empleo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Uniclick. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-500 hover:text-gray-800 text-sm transition-colors">
                  Términos
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-800 text-sm transition-colors">
                  Privacidad
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-800 text-sm transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
