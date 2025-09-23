"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  BarChart3,
  Check,
  Smartphone,
  Globe,
  Share2,
  Database,
  Lock,
  Zap,
  LayoutDashboard,
} from "lucide-react"

export default function PlataformaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("whatsapp")

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

  const features = [
    {
      id: "whatsapp",
      title: "WhatsApp Business",
      description:
        "Automatiza completamente tu comunicación en WhatsApp, permitiendo que tus clientes interactúen con tu negocio como si estuvieran hablando con un asesor humano. Responde consultas, agenda citas, procesa pedidos y más.",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/placeholder-mh3iz.png",
      color: "from-[#25D366] to-[#128C7E]",
    },
    {
      id: "redes-sociales",
      title: "Gestión de Redes Sociales",
      description:
        "Maneja todas tus redes sociales desde una única plataforma. Programa contenido, responde comentarios y mensajes, analiza el rendimiento y genera informes detallados de todas tus cuentas.",
      icon: <Globe className="w-6 h-6" />,
      image: "/placeholder-pb7tq.png",
      color: "from-[#4267B2] to-[#1877F2]",
    },
    {
      id: "integraciones",
      title: "Integraciones",
      description:
        "Conecta Uniclick con todas tus herramientas empresariales existentes. Integramos con CRM, ERP, sistemas de gestión de citas, plataformas de e-commerce y mucho más.",
      icon: <Share2 className="w-6 h-6" />,
      image: "/placeholder-71i1g.png",
      color: "from-[#9133e8] to-[#7928ca]",
    },
    {
      id: "dashboard",
      title: "Dashboard Analítico",
      description:
        "Visualiza todos los datos importantes de tu negocio en tiempo real. Métricas de conversación, tiempos de respuesta, tasa de conversión, satisfacción del cliente y mucho más en un solo lugar.",
      icon: <LayoutDashboard className="w-6 h-6" />,
      image: "/placeholder-6mh5s.png",
      color: "from-[#4c9fd5] to-[#2a6a8c]",
    },
  ]

  // Planes de precios
  const pricingPlans = [
    {
      name: "Básico",
      price: "49",
      period: "mes",
      description: "Ideal para pequeños negocios que inician en la automatización",
      features: [
        "1 Agente digital",
        "Hasta 1,000 mensajes/mes",
        "Integración WhatsApp Business",
        "Dashboard analítico básico",
        "Soporte por email",
      ],
      cta: "Comenzar gratis",
      popular: false,
      color: "from-[#4c9fd5] to-[#2a6a8c]",
    },
    {
      name: "Profesional",
      price: "149",
      period: "mes",
      description: "Para empresas en crecimiento con necesidades de comunicación avanzadas",
      features: [
        "3 Agentes digitales",
        "Hasta 10,000 mensajes/mes",
        "Integraciones con WhatsApp y RRSS",
        "Dashboard analítico completo",
        "Soporte prioritario",
        "API de integración",
      ],
      cta: "Prueba gratuita 14 días",
      popular: true,
      color: "from-[#9133e8] to-[#7928ca]",
    },
    {
      name: "Empresarial",
      price: "499",
      period: "mes",
      description: "Solución escalable para grandes empresas y organizaciones",
      features: [
        "Agentes digitales ilimitados",
        "Mensajes ilimitados",
        "Integraciones personalizadas",
        "BI avanzado y reportes personalizados",
        "Gestor de cuenta dedicado",
        "Formación y onboarding premium",
      ],
      cta: "Contactar ventas",
      popular: false,
      color: "from-[#4cd5a6] to-[#2a8c6a]",
    },
  ]

  return (
    <>
      <Head>
        <title>Plataforma Daniel D Toro - Herramientas para triunfadores</title>
        <meta name="description" content="Descubre la plataforma completa de Daniel D Toro. WhatsApp empresarial, gestión de redes sociales, integraciones y dashboard analítico para vendedores y emprendedores." />
        <meta name="keywords" content="plataforma Daniel D Toro, WhatsApp empresarial, automatización, IA, vendedores, emprendedores, dashboard analítico, integraciones" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Plataforma Daniel D Toro - Herramientas para triunfadores" />
        <meta property="og:description" content="Descubre la plataforma completa de Daniel D Toro. WhatsApp empresarial, gestión de redes sociales, integraciones y dashboard analítico." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://danieldtoro.com/plataforma" />
        <meta property="og:site_name" content="Daniel D Toro" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plataforma Daniel D Toro - Herramientas para triunfadores" />
        <meta name="twitter:description" content="Descubre la plataforma completa de Daniel D Toro. WhatsApp empresarial, gestión de redes sociales, integraciones y dashboard analítico." />
        <meta name="twitter:creator" content="@danieldtoro" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://danieldtoro.com/plataforma" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Plataforma Daniel D Toro",
              "description": "Descubre la plataforma completa de Daniel D Toro. Herramientas para vendedores y emprendedores.",
              "url": "https://danieldtoro.com/plataforma",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "Plataforma Daniel D Toro",
                "description": "Plataforma todo en uno para automatización empresarial con IA",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "offers": {
                  "@type": "Offer",
                  "price": "49",
                  "priceCurrency": "EUR"
                }
              }
            })
          }}
        />
      </Head>
      
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
              className="text-gray-700 hover:text-gray-900 transition-all hover:scale-105 text-sm font-medium relative group"
            >
              API
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9133e8] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/plataforma"
              className="text-gray-900 transition-all hover:scale-105 text-sm font-medium relative group"
            >
              Plataforma
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9133e8] transition-all duration-300"></span>
            </Link>
          </div>

          {/* Botón de login a la derecha */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Link
                href="https://app.danieldtoro.com/"
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
                className="text-gray-700 hover:text-gray-900 transition-all text-sm font-medium py-2 border-b border-gray-100"
              >
                API
              </Link>
              <Link
                href="/plataforma"
                className="text-gray-900 hover:text-gray-900 transition-all text-sm font-medium py-2 border-b border-gray-100"
              >
                Plataforma
              </Link>
              <Link
                href="https://app.danieldtoro.com/"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9133e8]/80 to-[#7928ca]/80 backdrop-blur-xl border border-purple-200 text-white hover:from-[#9133e8] hover:to-[#7928ca] transition-all flex items-center justify-center space-x-2 mt-4"
              >
                <span>Log in</span>
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        )}

        {/* Hero de la plataforma */}
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
                    ✨ Plataforma todo en uno
                  </span>
                </motion.div>

                <motion.h1
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight leading-tight text-center"
                >
                  Una plataforma para
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9133e8] to-purple-400">
                    todas tus necesidades
                  </span>
                </motion.h1>

                <motion.p
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl mx-auto text-center"
                >
                  Uniclick unifica todas tus comunicaciones empresariales en una sola plataforma potenciada por IA.
                </motion.p>

                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 flex-wrap"
                >
                  <Button className="bg-[#9133e8] hover:bg-[#9133e8]/90 text-white rounded-full px-6 py-4 text-base sm:px-8 sm:py-7 sm:text-lg transition-all hover:shadow-[0_0_25px_rgba(145,51,232,0.4)] w-full sm:w-auto">
                    Solicitar demo
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full px-6 py-4 text-base sm:px-8 sm:py-7 sm:text-lg transition-all w-full sm:w-auto"
                  >
                    Ver planes
                  </Button>
                </motion.div>

                {/* Estadísticas */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20"
                >
                  <div className="bg-gray-100 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center border border-gray-200 hover:border-[#9133e8]/30 transition-all hover:shadow-[0_0_30px_rgba(145,51,232,0.1)]">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">95%</h3>
                    <p className="text-gray-600">Reducción en tiempo de respuesta</p>
                  </div>
                  <div className="bg-gray-100 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center border border-gray-200 hover:border-[#9133e8]/30 transition-all hover:shadow-[0_0_30px_rgba(145,51,232,0.1)]">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">24/7</h3>
                    <p className="text-gray-600">Atención ininterrumpida</p>
                  </div>
                  <div className="bg-gray-100 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center border border-gray-200 hover:border-[#9133e8]/30 transition-all hover:shadow-[0_0_30px_rgba(145,51,232,0.1)]">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">+40%</h3>
                    <p className="text-gray-600">Aumento en conversiones</p>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </section>

        {/* Sección de características */}
        <section className="py-20 relative bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5e5bd5]/10 to-[#4c5fd5]/10 backdrop-blur-sm z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 backdrop-blur-md text-gray-700 text-sm font-medium mb-4">
                Características
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                Solución completa
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Uniclick ofrece todas las herramientas que necesitas para automatizar y mejorar tu comunicación
                empresarial.
              </p>
            </div>

            {/* Tabs de navegación */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`px-3 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium transition-all ${
                      activeTab === feature.id
                        ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {feature.icon}
                      <span>{feature.title}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Contenido de cada tab */}
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`transition-all duration-500 ${activeTab === feature.id ? "block" : "hidden"}`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 sm:p-8 flex flex-col justify-center">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 mb-6">{feature.description}</p>
                        <Button className={`bg-gradient-to-r ${feature.color} text-white rounded-full self-start`}>
                          Saber más
                        </Button>
                      </div>
                      <div className="relative h-64 md:h-auto overflow-hidden bg-gray-100">
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección de beneficios */}
        <section className="py-20 relative bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#9133e8]/10 backdrop-blur-md border border-[#9133e8]/20 text-gray-700 text-sm font-medium mb-4">
                Beneficios
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                ¿Por qué elegir Uniclick?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre cómo nuestra plataforma puede transformar la comunicación de tu empresa.
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
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-800 font-bold mb-4">Respuestas instantáneas</h3>
                <p className="text-gray-700">
                  Olvídate de hacer esperar a tus clientes. Uniclick responde instantáneamente a consultas en cualquier
                  canal, las 24 horas del día.
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
                <h3 className="text-lg sm:text-xl text-gray-800 font-bold mb-4">Escalabilidad sin límites</h3>
                <p className="text-gray-700">
                  Gestiona desde decenas hasta millones de conversaciones simultáneas sin necesidad de ampliar tu equipo
                  humano.
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
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-gray-800 font-bold mb-4">Seguridad garantizada</h3>
                <p className="text-gray-700">
                  Protección de datos de nivel empresarial con cifrado de extremo a extremo y cumplimiento con GDPR y
                  otras normativas.
                </p>
              </motion.div>
            </div>

            <div className="mt-16">
              <div className="bg-gradient-to-r from-[#9133e8]/10 to-[#7928ca]/10 backdrop-blur-xl rounded-3xl p-10 border border-gray-200 max-w-4xl mx-auto shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#9133e8] to-[#7928ca] flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      Insights accionables
                    </h3>
                    <p className="text-gray-700">
                      Obtén información detallada sobre tus clientes, conversaciones y rendimiento empresarial. Analiza
                      tendencias, identifica oportunidades y toma decisiones informadas para crecer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de planes de precios */}
        <section className="py-20 relative bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5e5bd5]/10 to-white backdrop-blur-sm z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 backdrop-blur-md text-gray-700 text-sm font-medium mb-4">
                Precios
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                Planes para cada necesidad
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Elige el plan que mejor se adapte a las necesidades de tu empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${
                    plan.popular
                      ? "relative bg-gradient-to-br from-[#9133e8]/10 to-[#7928ca]/10 backdrop-blur-xl md:scale-105 md:-mt-4 shadow-xl border-[#9133e8]/20"
                      : "bg-gray-100 backdrop-blur-md"
                  } rounded-3xl overflow-hidden border border-gray-200 p-6 sm:p-8 transition-all hover:shadow-[0_0_30px_rgba(145,51,232,0.1)] hover:border-[#9133e8]/30`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-[#9133e8] to-[#7928ca] text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-2 -translate-y-1 shadow-lg">
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-gray-800 text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-700 mb-4">{plan.description}</p>
                    <div className="flex items-baseline">
                      <span className="text-gray-800 text-3xl sm:text-4xl font-bold">{plan.price}€</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <Check className="w-5 h-5 text-[#9133e8] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className={`w-full rounded-full py-4 sm:py-6 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#9133e8] to-[#7928ca] hover:from-[#a64eff] hover:to-[#8f32ed] text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#9133e8]/10 to-[#7928ca]/10 backdrop-blur-xl rounded-3xl p-10 border border-gray-200 relative overflow-hidden shadow-lg">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#9133e8]/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#7928ca]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Comienza tu transformación digital hoy
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Únete a las miles de empresas que ya están aprovechando el poder de la IA para mejorar su comunicación
                  y aumentar sus ventas.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="bg-white text-[#9133e8] hover:bg-gray-100 rounded-full px-6 py-3 text-base sm:text-lg font-medium transition-all w-full sm:w-auto shadow-md">
                    Comenzar ahora
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full px-6 py-3 text-base sm:text-lg font-medium transition-all w-full sm:w-auto shadow-sm"
                  >
                    Contactar con ventas
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
    </>
  )
}
