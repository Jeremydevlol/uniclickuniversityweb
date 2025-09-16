"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Users, Calendar, MessageSquare, BookOpen, Award, ArrowRight, ChevronRight } from "lucide-react"

export default function ComunidadPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simular tiempo de carga para las 
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

  // Datos de eventos próximos
  const proximosEventos = [
    {
      id: 1,
      titulo: "Webinar: Automatización de WhatsApp para empresas",
      fecha: "15 de junio, 2025",
      hora: "18:00 - 19:30 CEST",
      imagen: "/placeholder-x8b3s.png",
      tipo: "Webinar",
    },
    {
      id: 2,
      titulo: "Taller práctico: Configuración de agentes digitales",
      fecha: "22 de junio, 2025",
      hora: "16:00 - 18:00 CEST",
      imagen: "/placeholder-16nh2.png",
      tipo: "Taller",
    },
    {
      id: 3,
      titulo: "Uniclick Conference 2025",
      fecha: "10-12 de julio, 2025",
      hora: "Todo el día",
      imagen: "/tech-conference-event.png",
      tipo: "Conferencia",
    },
  ]

  // Datos de historias de éxito
  const historiasExito = [
    {
      id: 1,
      empresa: "TechSolutions Inc.",
      logo: "/abstract-tech-logo.png",
      descripcion:
        "Aumentamos nuestras ventas en un 45% tras implementar Uniclick para gestionar nuestras comunicaciones de WhatsApp. La atención 24/7 nos permitió captar clientes internacionales.",
      autor: "María González",
      cargo: "Directora de Marketing",
    },
    {
      id: 2,
      empresa: "Global Retail",
      logo: "/abstract-retail-logo.png",
      descripcion:
        "Redujimos nuestros tiempos de respuesta de 24 horas a menos de 5 minutos. Nuestros clientes valoran enormemente la inmediatez y precisión de las respuestas de Uniclick.",
      autor: "Carlos Martínez",
      cargo: "Director de Atención al Cliente",
    },
    {
      id: 3,
      empresa: "HealthCare Plus",
      logo: "/healthcare-company-logo.png",
      descripcion:
        "La gestión automatizada de citas médicas a través de WhatsApp ha revolucionado nuestro sistema. Reducimos las cancelaciones en un 60% gracias a los recordatorios automáticos.",
      autor: "Laura Sánchez",
      cargo: "Gerente de Operaciones",
    },
  ]

  // Datos de recursos
  const recursos = [
    {
      id: 1,
      titulo: "Guía de inicio rápido",
      descripcion: "Aprende a configurar tu primer agente digital en menos de 30 minutos",
      icono: <BookOpen className="w-6 h-6" />,
      color: "from-[#4cd5a6] to-[#2a8c6a]",
    },
    {
      id: 2,
      titulo: "Biblioteca de plantillas",
      descripcion: "Accede a más de 50 plantillas prediseñadas para diferentes sectores",
      icono: <MessageSquare className="w-6 h-6" />,
      color: "from-[#4a7bff] to-[#3a5fd0]",
    },
    {
      id: 3,
      titulo: "Foro de usuarios",
      descripcion: "Conecta con otros usuarios y comparte experiencias y consejos",
      icono: <Users className="w-6 h-6" />,
      color: "from-[#ff5e85] to-[#e84d75]",
    },
    {
      id: 4,
      titulo: "Academia Uniclick",
      descripcion: "Cursos gratuitos para sacar el máximo partido a tu agente digital",
      icono: <Award className="w-6 h-6" />,
      color: "from-[#9133e8] to-[#7928ca]",
    },
  ]

  return (
    <>
      <Head>
        <title>Comunidad Daniel D Toro - Conecta con triunfadores</title>
        <meta name="description" content="Únete a la comunidad de Daniel D Toro. Conecta con vendedores y emprendedores que están transformando su vida. Eventos, recursos y mentorías exclusivas." />
        <meta name="keywords" content="comunidad Daniel D Toro, vendedores, emprendedores, triunfadores, eventos, mentorías, formación ventas, networking" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Comunidad Daniel D Toro - Conecta con triunfadores" />
        <meta property="og:description" content="Únete a la comunidad de Daniel D Toro. Conecta con vendedores y emprendedores que están transformando su vida." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://danieldtoro.com/comunidad" />
        <meta property="og:site_name" content="Daniel D Toro" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comunidad Daniel D Toro - Conecta con triunfadores" />
        <meta name="twitter:description" content="Únete a la comunidad de Daniel D Toro. Conecta con vendedores y emprendedores que están transformando su vida." />
        <meta name="twitter:creator" content="@danieldtoro" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://danieldtoro.com/comunidad" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Comunidad Daniel D Toro",
              "description": "Únete a la comunidad de Daniel D Toro. Conecta con vendedores y emprendedores que están transformando su vida.",
              "url": "https://danieldtoro.com/comunidad",
              "mainEntity": {
                "@type": "Organization",
                "name": "Daniel D Toro",
                "description": "Formación que te cambia la vida - Deja de ser vago, conviértete en triunfador",
                "founder": {
                  "@type": "Person",
                  "name": "Daniel D Toro"
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
              className="text-gray-900 transition-all hover:scale-105 text-sm font-medium relative group"
            >
              Comunidad
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#9133e8] transition-all duration-300"></span>
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-all hover:scale-105 text-sm font-medium relative group"
            >
              API
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9133e8] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#"
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
                className="text-gray-900 hover:text-gray-900 transition-all text-sm font-medium py-2 border-b border-gray-100"
              >
                Comunidad
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-all text-sm font-medium py-2 border-b border-gray-100"
              >
                API
              </Link>
              <Link
                href="#"
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

        {/* Hero de la comunidad */}
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
                    ✨ Únete a la comunidad de Uniclick
                  </span>
                </motion.div>

                <motion.h1
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight leading-tight text-center"
                >
                  Conecta, aprende y
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9133e8] to-purple-400">
                    crece con nosotros
                  </span>
                </motion.h1>

                <motion.p
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 font-light max-w-3xl mx-auto text-center"
                >
                  Forma parte de una comunidad vibrante de empresarios, desarrolladores y entusiastas que están
                  transformando la comunicación empresarial con IA.
                </motion.p>

                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 flex-wrap"
                >
                  <Button className="bg-[#9133e8] hover:bg-[#9133e8]/90 text-white rounded-full px-6 py-4 text-base sm:px-8 sm:py-7 sm:text-lg font-medium transition-all hover:shadow-[0_0_25px_rgba(145,51,232,0.4)] w-full sm:w-auto">
                    Unirse a la comunidad
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full px-6 py-4 text-base sm:px-8 sm:py-7 sm:text-lg font-medium transition-all w-full sm:w-auto"
                  >
                    Explorar recursos
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
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">15K+</h3>
                    <p className="text-gray-600">Miembros activos</p>
                  </div>
                  <div className="bg-gray-100 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center border border-gray-200 hover:border-[#9133e8]/30 transition-all hover:shadow-[0_0_30px_rgba(145,51,232,0.1)]">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">120+</h3>
                    <p className="text-gray-600">Eventos anuales</p>
                  </div>
                  <div className="bg-gray-100 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center border border-gray-200 hover:border-[#9133e8]/30 transition-all hover:shadow-[0_0_30px_rgba(145,51,232,0.1)]">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">50+</h3>
                    <p className="text-gray-600">Países representados</p>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </section>

        {/* Sección de próximos eventos */}
        <section className="py-20 relative bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5e5bd5]/10 to-[#4c5fd5]/10 backdrop-blur-sm z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 backdrop-blur-md text-gray-700 text-sm font-medium mb-4">
                Calendario
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                Próximos eventos
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Participa en nuestros eventos exclusivos para miembros y aprende de expertos en IA y automatización
                empresarial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {proximosEventos.map((evento, index) => (
                <motion.div
                  key={evento.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={evento.imagen || "/placeholder.svg"}
                      alt={evento.titulo}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-[#9133e8] text-white text-xs font-medium px-3 py-1 rounded-full">
                      {evento.tipo}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center mb-4 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {evento.fecha}
                    </div>
                    <div className="flex items-center mb-4 text-gray-600 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {evento.hora}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">{evento.titulo}</h3>
                    <Link
                      href="#"
                      className="inline-flex items-center text-[#9133e8] hover:text-[#a64dff] transition-colors"
                    >
                      <span>Más información</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full px-6 py-3 font-medium transition-all shadow-sm"
              >
                Ver todos los eventos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Sección de historias de éxito */}
        <section className="py-20 relative bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#9133e8]/10 backdrop-blur-md border border-[#9133e8]/20 text-gray-700 text-sm font-medium mb-4">
                Testimonios
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                Historias de éxito
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre cómo empresas de todos los tamaños están transformando su comunicación con Uniclick.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {historiasExito.map((historia, index) => (
                <motion.div
                  key={historia.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-[#9133e8]/30 transition-all hover:shadow-[0_0_30px_rgba(145,51,232,0.1)]"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-gray-200 mr-4 flex items-center justify-center">
                      <Image src={historia.logo || "/placeholder.svg"} alt={historia.empresa} width={50} height={50} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">{historia.empresa}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{historia.descripcion}"</p>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="font-medium text-gray-800">{historia.autor}</span>
                    <span className="mx-2">•</span>
                    <span>{historia.cargo}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-[#9133e8] hover:bg-[#9133e8]/90 text-white rounded-full px-6 py-3 font-medium transition-all hover:shadow-[0_0_25px_rgba(145,51,232,0.4)]">
                Compartir tu historia
              </Button>
            </div>
          </div>
        </section>

        {/* Sección de recursos */}
        <section className="py-20 relative bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5e5bd5]/10 to-white backdrop-blur-sm z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 backdrop-blur-md text-gray-700 text-sm font-medium mb-4">
                Recursos
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
                Todo lo que necesitas para empezar
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Accede a recursos exclusivos para miembros y maximiza el potencial de tus agentes digitales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {recursos.map((recurso, index) => (
                <motion.div
                  key={recurso.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <Link href="#" className="block h-full">
                    <div
                      className={`bg-gradient-to-br ${recurso.color} rounded-3xl overflow-hidden relative h-full border border-gray-200 p-4 sm:p-6 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(145,51,232,0.1)] group-hover:border-gray-300`}
                    >
                      <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500"></div>

                      <div className="flex flex-col h-full justify-between relative z-10">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                          {recurso.icono}
                        </div>

                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{recurso.titulo}</h3>
                          <p className="text-white/80 text-sm mb-4">{recurso.descripcion}</p>
                          <div className="flex items-center text-white text-sm font-medium">
                            <span>Explorar</span>
                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de unirse a la comunidad */}
        <section className="py-20 relative bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#9133e8]/10 to-[#7928ca]/10 backdrop-blur-xl rounded-3xl p-10 border border-gray-200 relative overflow-hidden shadow-lg">
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#9133e8]/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#7928ca]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Únete a nuestra comunidad hoy
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Conecta con otros profesionales, accede a recursos exclusivos y mantente al día de las últimas
                  novedades en automatización empresarial.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="bg-white text-[#9133e8] hover:bg-gray-100 rounded-full px-6 py-3 text-base sm:text-lg font-medium transition-all w-full sm:w-auto shadow-md">
                    Registrarse gratis
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full px-6 py-3 text-base sm:text-lg font-medium transition-all w-full sm:w-auto shadow-sm"
                  >
                    Más información
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200 relative z-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
                    <Link href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
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
