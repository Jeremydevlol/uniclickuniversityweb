"use client"

import type React from "react"
import Head from "next/head"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

// Lazy load componentes pesados
const PersonalitySelector = dynamic(() => import("@/components/personality-selector"), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-pulse text-white">Cargando...</div></div>,
  ssr: false
})
const VideoShowcase = dynamic(() => import("@/components/video-showcase"), {
  loading: () => <div className="aspect-video bg-black rounded-xl animate-pulse"></div>,
  ssr: false
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-64 bg-gray-900"></div>,
  ssr: true
})

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const bubbleVideoRef = useRef<HTMLVideoElement>(null)
  const heartVideoRef = useRef<HTMLVideoElement>(null)
  const arVideoRef = useRef<HTMLVideoElement>(null)
  const ladderVideoRef = useRef<HTMLVideoElement>(null)
  const voiceVideoRef = useRef<HTMLVideoElement>(null)
  const brainVideoRef = useRef<HTMLVideoElement>(null)
  const interestsVideoRef = useRef<HTMLVideoElement>(null)
  const diaryVideoRef = useRef<HTMLVideoElement>(null)
  const bannerVideoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const currentLang = "ES" // Idioma fijo en español

  useEffect(() => {
    // Función para configurar videos en bucle
    const setupLoopingVideo = (videoElement: HTMLVideoElement | null) => {
      if (videoElement) {
        videoElement.loop = true
        videoElement.play().catch((error) => {
          console.log("Error al reproducir el video:", error)
          document.addEventListener(
            "click",
            () => {
              videoElement.play()
            },
            { once: true },
          )
        })

        videoElement.addEventListener("ended", () => {
          videoElement.currentTime = 0
          videoElement.play()
        })
      }
    }

    // Configurar todos los videos
    setupLoopingVideo(bubbleVideoRef.current)
    setupLoopingVideo(heartVideoRef.current)
    setupLoopingVideo(arVideoRef.current)
    setupLoopingVideo(ladderVideoRef.current)
    setupLoopingVideo(voiceVideoRef.current)
    setupLoopingVideo(brainVideoRef.current)
    setupLoopingVideo(interestsVideoRef.current)
    setupLoopingVideo(diaryVideoRef.current)
    setupLoopingVideo(bannerVideoRef.current)

    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const handleVideoClick = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => {
            videoRef.current!.loop = true
          })
          .catch((error) => {
            console.log("Error al reproducir el video:", error)
          })
      } else {
        videoRef.current.pause()
      }
    }
  }

  // Objeto completo de traducciones
  const translations: { [key: string]: any } = {
    ES: {
      // Navegación
      getDemo: "Obtener demo",
      login: "Iniciar sesión",
      createAccount: "Crear cuenta",

      // Hero Section
      heroSpan: "🔥 Deja de ser vago, conviértete en triunfador",
      heroTitle1: "DANIEL D TORO",
      heroTitle2: "FORMACIÓN QUE TE CAMBIA LA VIDA",
      heroSubtitle: "Aprende a vender, ganar dinero y ser el mejor. Sin excusas, solo resultados.",

      // Features Section
      featuresSpan: "🔥 Únete a los triunfadores",
      featuresTitle1: "VENDEDORES Y EMPRENDEDORES",
      featuresTitle2: "QUE CAMBIAN SU VIDA",
      featuresSubtitle:
        "Estrategias que funcionan para vender más y ser triunfador. Daniel D Toro te enseña a convertir cada conversación en dinero.",

      // Cards
      whatsappTitle: "DINERO",
      whatsappDesc: "Gana sin límites",

      businessTitle: "VENTAS",
      businessDesc: "Cierra todo lo que tocas",

      callsTitle: "VELOCIDAD",
      callsDesc: "Resultados inmediatos",

      support247Title: "DOMINIO",
      support247Desc: "Controla tu mercado",

      scalabilityTitle: "PODER",
      scalabilityDesc: "Escala brutalmente",

      aiTitle: "DANIEL D TORO",
      aiDesc: "Tu mentor que te convierte en un triunfador de ventas. Sin excusas, solo resultados excepcionales.",

      // Banner
      bannerSpan: "🔥 Tu transformación empieza AHORA",
      bannerTitle1: "DEJA DE SER",
      bannerTitle2: "UN VAGO",
      bannerDesc:
        "Estrategias poderosas, técnicas que funcionan, resultados inmediatos. Conviértete en triunfador de ventas.",

      // Rutas y cursos estrella
      routesSpan: "Rutas y cursos estrella",
      
      whatsappBusinessTitle: "WhatsApp Empresarial",
      whatsappBusinessDesc: "Aprende a captar, convertir y fidelizar clientes por WhatsApp. Diseña flujos, guiones de venta y respuestas con IA para atender 24/7 sin perder el toque humano.",
      
      businessManagementTitle: "Gestión Empresarial", 
      businessManagementDesc: "Automatiza procesos internos, organiza tareas y coordina equipos con metodologías probadas y herramientas que sí escalan.",
      
      callSystemTitle: "Sistema de Llamadas con IA",
      callSystemDesc: "Domina llamadas entrantes y salientes con guías inteligentes: graba, transcribe, resume y toma acciones acordes al contexto para cerrar más ventas.",
      
      // Beneficios que sientes desde el día uno
      benefitsSpan: "Beneficios que sientes desde el día uno",
      
      benefitsSupportTitle: "Soporte 24/7",
      benefitsSupportDesc: "Nunca te quedas atascado: resuelve dudas con comunidad, tutores y base de conocimientos viva.",
      
      benefitsScalabilityTitle: "Escalabilidad",
      benefitsScalabilityDesc: "Crece sin límites: arma sistemas que acompañan tu expansión sin aumentar costos innecesarios.",
      
      benefitsAiTitle: "Inteligencia Artificial",
      benefitsAiDesc: "Aplica IA a tu operación diaria: desde respuestas automáticas hasta análisis de conversaciones y toma de decisiones.",

      // Pricing Section
      pricingHeader: "DANIEL D TORO TE MUESTRA EL CAMINO",
      pricingTitle: "AHORA DECIDE: ¿VAGO O TRIUNFADOR?",
      
      // DO NOTHING Card
      doNothingTitle: "SEGUIR SIENDO UN VAGO",
      doNothingSubtitle: "Ver Netflix y quejarse",
      doNothingHeader: "Desperdicia tu vida siendo mediocre",
      doNothingPoint1: "Trabajar para otros por migajas (8h al día)",
      doNothingPoint2: "Quedarte en tu zona de confort de mierda",
      doNothingPoint3: "Ser esclavo de un horario de 9 a 5",
      doNothingPoint4: "Pagar $35,000 por una universidad que no te sirve",
      doNothingPoint5: "Seguir siendo un perdedor insatisfecho",
      doNothingPoint6: "Rodeado de gente mediocre como tú",
      doNothingButton: "Seguir siendo un Vago",
      
      // TAKE ACTION Card
      takeActionTitle: "CONVERTIRTE EN TRIUNFADOR",
      takeActionSubtitle: "Empieza a Cambiar Tu Vida YA",
      takeActionOldPrice: "€500",
      takeActionNewPrice: "€50",
      takeActionPoint1: "Aprender a vender como un triunfador",
      takeActionPoint2: "Estrategias poderosas para cerrar ventas",
      takeActionPoint3: "Técnicas para ganar dinero real",
      takeActionPoint4: "Cursos que te convierten en líder",
      takeActionPoint5: "Software de IA para vender",
      takeActionPoint6: "Mentorías directas con Daniel D Toro",
      takeActionPoint7: "Eventos VIP para triunfadores",
      takeActionCancel: "Cancela cuando quieras, sin excusas",
      takeActionPrice: "€50/mes para siempre",
      takeActionSecure: "Asegura tu transformación AHORA",
      takeActionButton: "CONVIÉRTETE EN TRIUNFADOR",
      
      // VIP ELITE Card
      vipEliteTitle: "CÍRCULO ÉLITE VIP",
      vipEliteSubtitle: "Acceso Directo a Daniel",
      vipElitePrice: "€1,000",
      vipElitePriceDetail: "Pago único - Acceso de por vida",
      vipElitePoint1: "Eventos privados en la finca de Daniel D Toro",
      vipElitePoint2: "Experiencias exclusivas con coches de lujo",
      vipElitePoint3: "Zooms privados mensuales con Daniel",
      vipElitePoint4: "Asesorías personales 1 a 1",
      vipElitePoint5: "Acceso VIP a todos los cursos y contenido",
      vipElitePoint6: "Red exclusiva de emprendedores élite",
      vipElitePoint7: "Invitaciones a cenas y eventos secretos",
      vipElitePoint8: "Mentoría directa para escalar tu negocio",
      vipEliteExclusive: "Solo 100 plazas disponibles",
      vipEliteButton: "ÚNETE A LA ÉLITE",

      // Multiplataforma Section
      multiplatformTitle: "Multiplataforma para todas las redes sociales",
    },
    EN: {
      // Navigation
      getDemo: "Get demo",
      login: "Log in",
      createAccount: "Create account",

      // Hero Section
      heroSpan: "✨ Choose your learning path",
      heroTitle1: "Meet your",
      heroTitle2: "digital mentor",
      heroSubtitle: "Select the path that best drives your growth",

      // Features Section
      featuresSpan: "Join the community",
      featuresTitle1: "Smart learners and",
      featuresTitle2: "professionals",
      featuresSubtitle:
        "Manage your business from start to finish. I guide you step by step to transform your results. At University, you convert knowledge into action with practical classes, templates and real support.",

      // Cards
      whatsappTitle: "Freedom",
      whatsappDesc: "Unlimited expansion",

      businessTitle: "Communication",
      businessDesc: "Instant connection",

      callsTitle: "Speed",
      callsDesc: "Agile responses",

      support247Title: "Innovation",
      support247Desc: "Smart future",

      scalabilityTitle: "Efficiency",
      scalabilityDesc: "Total optimization",

      aiTitle: "Mentor \"Yes Sir\"",
      aiDesc: "Your direct and straightforward instructor: clarity, discipline and measurable results.",

      // Banner
      bannerSpan: "✨ Your next level starts today",
      bannerTitle1: "Learn without",
      bannerTitle2: "friction",
      bannerDesc:
        "With University, your training is fluid: short lessons, real examples, guided projects and results that show in your metrics.",

      // Multiplataforma Section
      multiplatformTitle: "Multiplatform for all social networks",
    },
    ZH: {
      // Navigation
      getDemo: "获取演示",
      login: "登录",
      createAccount: "创建账户",

      // Hero Section
      heroSpan: "✨ 选择你的数字个性",
      heroTitle1: "认识你的",
      heroTitle2: "数字代理",
      heroSubtitle: "选择最能代表你公司的个性",

      // Features Section
      featuresSpan: "智能数字代理",
      featuresTitle1: "管理你的",
      featuresTitle2: "完整业务",
      featuresSubtitle: "忘记一切，让Uniclick改变你的系统。我们的数字代理处理你的业务，而你专注于重要的事情。",

      // Cards
      whatsappTitle: "WhatsApp\n企业版",
      whatsappDesc: "数字代理为你回复WhatsApp消息，通过先进的人工智能全天候管理咨询、销售和客户服务。",

      businessTitle: "企业管理",
      businessDesc: "自动化内部流程，管理任务并协调团队，无需人工干预。",

      callsTitle: "通话系统",
      callsDesc: "通过AI管理来电和去电，可以转录、总结并根据上下文采取行动。",

      support247Title: "24/7支持",
      support247Desc: "通过即时响应，永远不会错过商业机会",

      scalabilityTitle: "可扩展性",
      scalabilityDesc: "无限增长而不增加员工",

      aiTitle: "人工智能",
      aiDesc: "用下一代AI为你的业务提供动力",

      // Banner
      bannerSpan: "✨ 未来就是现在",
      bannerTitle1: "无障碍",
      bannerTitle2: "沟通",
      bannerDesc: "使用Uniclick，商业沟通从未如此顺畅。让我们的数字代理改变你的业务，而你专注于增长。",

      // Multiplataforma Section
      multiplatformTitle: "所有社交网络的多平台",
    },
  }

  const t = translations[currentLang]

  // Configuración de las burbujas flotantes con iconos de redes sociales
  const floatingBubbles = [
    { icon: "📱", name: "WhatsApp", delay: 0, x: -200, y: -100 },
    { icon: "💬", name: "WhatsApp", delay: 0.2, x: 200, y: -80 },
    { icon: "📘", name: "Facebook", delay: 0.4, x: -180, y: 120 },
    { icon: "📷", name: "Instagram", delay: 0.6, x: 180, y: 100 },
    { icon: "🐦", name: "Twitter", delay: 0.8, x: -120, y: -150 },
    { icon: "💼", name: "LinkedIn", delay: 1.0, x: 120, y: -140 },
    { icon: "🎵", name: "TikTok", delay: 1.2, x: -250, y: 50 },
    { icon: "📺", name: "YouTube", delay: 1.4, x: 250, y: 40 },
    { icon: "💬", name: "Discord", delay: 1.6, x: -100, y: 180 },
    { icon: "📧", name: "Email", delay: 1.8, x: 100, y: 170 },
  ]

  return (
    <>
      <Head>
        <title>Daniel D Toro - Formación que te cambia la vida</title>
        <meta name="description" content="🔥 Deja de ser vago, conviértete en triunfador. Aprende a vender, ganar dinero y ser el mejor. Sin excusas, solo resultados." />
        <meta name="keywords" content="Daniel D Toro, formación ventas, vendedores, emprendedores, triunfadores, WhatsApp empresarial, automatización, IA, mentor, cursos ventas" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Daniel D Toro - Formación que te cambia la vida" />
        <meta property="og:description" content="🔥 Deja de ser vago, conviértete en triunfador. Aprende a vender, ganar dinero y ser el mejor. Sin excusas, solo resultados." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://danieldtoro.com/" />
        <meta property="og:site_name" content="Daniel D Toro" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Daniel D Toro - Formación que te cambia la vida" />
        <meta name="twitter:description" content="🔥 Deja de ser vago, conviértete en triunfador. Aprende a vender, ganar dinero y ser el mejor." />
        <meta name="twitter:creator" content="@danieldtoro" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://danieldtoro.com/" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Daniel D Toro",
              "description": "Formación que te cambia la vida - Deja de ser vago, conviértete en triunfador",
              "url": "https://danieldtoro.com/",
              "jobTitle": "Mentor de Ventas y Emprendimiento",
              "knowsAbout": ["Ventas", "Emprendimiento", "WhatsApp Business", "Automatización", "Inteligencia Artificial"],
              "alumniOf": "Formación en Ventas y Liderazgo",
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Mentor de Ventas",
                "description": "Ayuda a vendedores y emprendedores a convertirse en triunfadores"
              },
              "offers": {
                "@type": "Offer",
                "name": "Formación en Ventas",
                "description": "Cursos y mentorías para vendedores y emprendedores",
                "price": "50",
                "priceCurrency": "EUR"
              }
            })
          }}
        />
      </Head>
      
      <div ref={containerRef} className="relative min-h-screen overflow-hidden font-sans flex flex-col bg-black">
      {/* Efectos de fondo con colores vibrantes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-6000"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10">
        {/* Barra de Publicidad - Formación Triunfadores */}
        <div className="w-full fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 py-1.5 shadow-xl animate-gradient-x">
          <div className="container mx-auto px-3">
            <a 
              href="https://app.danieldtoro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-center justify-center gap-2 text-center">
                {/* Icono de fuego animado */}
                <div className="hidden sm:flex items-center justify-center w-6 h-6 bg-white/20 rounded-full animate-pulse">
                  <span className="text-sm">🔥</span>
                </div>
                
                {/* Texto principal */}
                <p className="text-white font-black text-xs sm:text-sm md:text-base tracking-wide leading-tight">
                  <span className="hidden sm:inline">💰 </span>
                  <span className="bg-white/20 px-1.5 py-0.5 rounded text-xs sm:text-sm">APRENDE A GANAR</span>
                  {" "}MÁS DE €10,000 AL MES{" "}
                  <span className="hidden md:inline text-xs sm:text-sm">- FORMACIÓN TRIUNFADORES</span>
                </p>

                {/* Icono de estrella animado */}
                <div className="flex sm:hidden items-center justify-center w-5 h-5 bg-white/20 rounded-full">
                  <span className="text-xs">⭐</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Espacio para compensar la barra fija */}
        <div className="h-[40px] sm:h-[44px]"></div>

        {/* Contenido principal mejorado */}
        <main className="flex flex-col items-center justify-center text-center px-0 pt-6 pb-6 min-h-screen">
          <div className="w-full">
            {isLoaded && (
              <>
                <div className="mb-4 mt-8 sm:mt-16">
                  <span className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-100 via-cyan-100 to-indigo-100 border border-blue-200 text-blue-700 text-sm font-semibold mb-4 shadow-lg shadow-blue-200/50 hover:shadow-blue-300/50 transition-all">
                    {t.heroSpan}
                  </span>

                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-8 tracking-tight leading-[0.95] sm:leading-[0.9]">
                    {t.heroTitle1}
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">
                      {t.heroTitle2}
                    </span>
                  </h1>

                  <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto leading-relaxed mb-8 md:mb-16 line-clamp-3 sm:line-clamp-none px-4">
                    {t.heroSubtitle}
                  </p>
                </div>

                {/* Video showcase con bordes animados */}
                <div className="mt-8 mb-8 px-6 sm:px-8 md:px-12 lg:px-16">
                  <VideoShowcase 
                    videoUrl="https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/login/uniclick%20(2160p).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dpbi91bmljbGljayAoMjE2MHApLm1wNCIsImlhdCI6MTc1Mjk1NjczMCwiZXhwIjo0OTA2NTU2NzMwfQ.zdjgq0uB-NKxuc7aXVHyiuQ_Y6aqocLbTlAkH3fduFQ"
                    className="max-w-7xl mx-auto"
                  />
                </div>

                {/* Componente de selector de personalidades */}
                <PersonalitySelector />
              </>
            )}
          </div>
        </main>

        {/* Sección de precios */}
        <section className="pt-2 pb-12 relative overflow-hidden">
          {/* Fondo 100% transparente */}
          <div className="absolute inset-0 bg-transparent"></div>
          
          <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-4 font-medium">{t.pricingHeader}</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tight">
                {t.pricingTitle}
              </h2>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* DO NOTHING Card */}
              <div className="group relative h-full">
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-white/10 transition-all duration-500 hover:scale-[1.02] h-full flex flex-col">
                  {/* Badge dentro del contenedor */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30">
                      <span className="text-white text-xs font-medium">Estándar</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2 tracking-tight">{t.doNothingTitle}</h3>
                    <p className="text-gray-300 text-sm">{t.doNothingSubtitle}</p>
                  </div>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="text-white text-lg font-bold mb-4 text-center">{t.doNothingHeader}</h4>
                    <ul className="space-y-2">
                      {[
                        t.doNothingPoint1,
                        t.doNothingPoint2,
                        t.doNothingPoint3,
                        t.doNothingPoint4,
                        t.doNothingPoint5,
                        t.doNothingPoint6
                      ].map((point, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <div className="w-4 h-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-gray-300 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href="https://empleo.mcdonalds.es/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm border border-white/30 text-center block"
                  >
                    {t.doNothingButton}
                  </a>
                </div>
              </div>

              {/* TAKE ACTION Card */}
              <div className="group relative h-full">
                <div className="relative bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-2xl p-6 border-2 border-purple-500/30 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] h-full flex flex-col">
                  {/* Badge Premium dentro del contenedor */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 backdrop-blur-sm px-5 py-1 rounded-full border border-purple-400/50 shadow-lg">
                      <span className="text-white text-xs font-bold">PREMIUM</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600/80 via-blue-600/80 to-cyan-600/80 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2 tracking-tight">{t.takeActionTitle}</h3>
                    <p className="text-gray-300 text-sm">{t.takeActionSubtitle}</p>
                  </div>
                  
                  {/* Precio destacado */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-gray-500 line-through text-lg font-medium">{t.takeActionOldPrice}</span>
                      <span className="text-3xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">{t.takeActionNewPrice}</span>
                    </div>
                    <p className="text-cyan-400 font-semibold text-sm">{t.takeActionPrice}</p>
                  </div>
                  
                  <div className="mb-6 flex-grow">
                    <ul className="space-y-2">
                      {[
                        t.takeActionPoint1,
                        t.takeActionPoint2,
                        t.takeActionPoint3,
                        t.takeActionPoint4,
                        t.takeActionPoint5,
                        t.takeActionPoint6,
                        t.takeActionPoint7
                      ].map((point, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <div className="w-4 h-4 bg-gradient-to-r from-blue-500/80 to-cyan-500/80 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-gray-300 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Información adicional */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-300 bg-white/10 backdrop-blur-sm rounded-lg p-2 text-xs border border-white/20">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      {t.takeActionCancel}
                    </div>
                    <div className="flex items-center text-cyan-400 bg-cyan-500/20 backdrop-blur-sm rounded-lg p-2 border border-cyan-500/30 text-xs">
                      <svg className="w-4 h-4 text-cyan-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                      </svg>
                      {t.takeActionPrice}
                    </div>
                    <p className="text-gray-400 text-xs text-center">{t.takeActionSecure}</p>
                  </div>
                  
                  <a 
                    href="https://app.danieldtoro.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 backdrop-blur-sm hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white font-black py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25 text-sm tracking-wide border border-purple-400/30 text-center block"
                  >
                    {t.takeActionButton}
                  </a>
                </div>
              </div>

              {/* VIP ELITE Card */}
              <div className="group relative h-full">
                <div className="relative bg-gradient-to-br from-yellow-600/20 via-amber-600/20 to-orange-600/20 backdrop-blur-xl rounded-2xl p-6 border-2 border-yellow-500/40 shadow-2xl hover:shadow-yellow-500/30 transition-all duration-500 hover:scale-[1.02] h-full flex flex-col">
                  {/* Badge ÉLITE dentro del contenedor */}
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 backdrop-blur-sm px-5 py-1 rounded-full border border-yellow-400/50 shadow-lg">
                      <span className="text-white text-xs font-black tracking-wider">⭐ ÉLITE VIP ⭐</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-600/80 via-amber-600/80 to-orange-600/80 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/25">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2 tracking-tight">{t.vipEliteTitle}</h3>
                    <p className="text-yellow-300 text-sm font-semibold">{t.vipEliteSubtitle}</p>
                  </div>
                  
                  {/* Precio destacado */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">{t.vipElitePrice}</span>
                    </div>
                    <p className="text-yellow-400 font-bold text-sm">{t.vipElitePriceDetail}</p>
                  </div>
                  
                  <div className="mb-6 flex-grow">
                    <ul className="space-y-2">
                      {[
                        t.vipElitePoint1,
                        t.vipElitePoint2,
                        t.vipElitePoint3,
                        t.vipElitePoint4,
                        t.vipElitePoint5,
                        t.vipElitePoint6,
                        t.vipElitePoint7,
                        t.vipElitePoint8
                      ].map((point, index) => (
                        <li key={index} className="flex items-start text-gray-300 text-sm">
                          <div className="w-4 h-4 bg-gradient-to-r from-yellow-500/80 to-orange-500/80 backdrop-blur-sm rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-gray-200 leading-relaxed font-medium">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Información exclusiva */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center text-yellow-300 bg-yellow-500/20 backdrop-blur-sm rounded-lg p-3 border border-yellow-500/40 text-xs">
                      <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="font-bold">{t.vipEliteExclusive}</span>
                    </div>
                  </div>
                  
                  <a 
                    href="https://app.danieldtoro.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 backdrop-blur-sm hover:from-yellow-700 hover:via-amber-700 hover:to-orange-700 text-white font-black py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 text-sm tracking-wider border border-yellow-400/30 text-center block"
                  >
                    {t.vipEliteButton}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de características mejorada con efectos de color */}
        <section className="py-12 relative">
          <div className="container mx-auto px-0 md:px-6 relative z-10">
            <div className="text-center mb-40 sm:mb-20">
              <span className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-100 via-cyan-100 to-indigo-100 text-blue-700 border border-blue-200 text-sm font-semibold mb-6 shadow-lg shadow-blue-200/50">
                {t.featuresSpan}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tight leading-tight">
                {t.featuresTitle1}
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500">
                  {t.featuresTitle2}
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl md:max-w-4xl mx-auto leading-relaxed">
                {t.featuresSubtitle}
              </p>
            </div>

            {/* Grid mejorado con efectos de color */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 max-w-7xl mx-auto px-5 md:px-0 relative">
              {/* GIF posicionado detrás del contenedor */}
              <div className="absolute top-[-100px] md:top-[-120px] left-2 md:left-0 z-0 w-36 h-36 md:w-40 md:h-40">
                <Image
                  src="/Yes Sir.gif"
                  alt="Daniel D Toro - Personaje motivacional Yes Sir para formación en ventas"
                  className="w-full h-full object-contain"
                  width={160}
                  height={160}
                  loading="lazy"
                  unoptimized
                  quality={75}
                />
              </div>

              {/* WhatsApp Empresarial - Tarjeta principal */}
              <div
                className="md:col-span-6 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-xl md:rounded-3xl overflow-hidden relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] cursor-pointer group shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105"
                onClick={() => handleVideoClick(bubbleVideoRef)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10"></div>
                <div className="absolute inset-0 w-full h-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{pointerEvents:"none"}}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                  >
                    <source src="https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/danieldtoro/Video%20principal/img_5792%20(2160p).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5pZWxkdG9yby9WaWRlbyBwcmluY2lwYWwvaW1nXzU3OTIgKDIxNjBwKS5tcDQiLCJpYXQiOjE3NTk4NDc5MTMsImV4cCI6MTc5MTM4MzkxM30.DTBLQG4slB4cjc-NGJaHktPTcANY98vJBqfYLbvFubg" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
                <div className="p-12 h-full flex flex-col justify-end relative z-20">
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-lg whitespace-pre-line">
                    {t.whatsappTitle}
                  </h3>
                  <p className="text-white/90 text-lg md:text-xl max-w-lg leading-relaxed drop-shadow-md">
                    {t.whatsappDesc}
                  </p>
                </div>
              </div>

              {/* Columna derecha */}
              <div className="md:col-span-6 grid grid-cols-1 gap-8">
                {/* Gestión empresarial */}
                <div
                  className="bg-gradient-to-br from-blue-400 via-cyan-500 to-blue-600 rounded-xl md:rounded-3xl overflow-hidden relative min-h-[300px] sm:min-h-[350px] md:min-h-[280px] cursor-pointer group shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105"
                  onClick={() => handleVideoClick(heartVideoRef)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10"></div>
                  <div className="absolute inset-0 w-full h-full">
                    <video
                      ref={heartVideoRef}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{pointerEvents:"none"}}
                      disablePictureInPicture
                      controlsList="nodownload nofullscreen noremoteplayback"
                    >
                      <source src="https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/danieldtoro/Video%20principal/img_0667%20(1440p).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5pZWxkdG9yby9WaWRlbyBwcmluY2lwYWwvaW1nXzA2NjcgKDE0NDBwKS5tcDQiLCJpYXQiOjE3NTk4NzI0NTgsImV4cCI6MTc5MTQwODQ1OH0.BCMNbJe_Wh-LO1rLqUCmzd25aeXVd5hKblRtDUSucRw" type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>
                  <div className="p-10 h-full flex flex-col justify-end relative z-20">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight drop-shadow-lg">
                      {t.businessTitle}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed drop-shadow-md">
                      {t.businessDesc}
                    </p>
                  </div>
                </div>

                {/* Sistema de llamadas */}
                <div
                  className="bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 rounded-xl md:rounded-3xl overflow-hidden relative min-h-[300px] sm:min-h-[350px] md:min-h-[280px] cursor-pointer group shadow-2xl hover:shadow-indigo-500/50 transition-all duration-500 hover:scale-105"
                  onClick={() => handleVideoClick(arVideoRef)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10"></div>
                  <div className="absolute inset-0 w-full h-full">
                    <video
                      ref={arVideoRef}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{pointerEvents:"none"}}
                      disablePictureInPicture
                      controlsList="nodownload nofullscreen noremoteplayback"
                    >
                      <source src="https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/danieldtoro/Video%20principal/a6ea2565bc5d4a8ea151f3ac45954447.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5pZWxkdG9yby9WaWRlbyBwcmluY2lwYWwvYTZlYTI1NjViYzVkNGE4ZWExNTFmM2FjNDU5NTQ0NDcubXA0IiwiaWF0IjoxNzU5ODcyNzYxLCJleHAiOjE3OTE0MDg3NjF9.Tj4E6daoYwJ2GEhbKUf36TyfLglcQqg3FOoHnzLj28g" type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>
                  <div className="p-10 h-full flex flex-col justify-end relative z-20">
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight drop-shadow-lg">
                      {t.callsTitle}
                    </h3>
                    <p className="text-white/90 text-base md:text-lg leading-relaxed drop-shadow-md">{t.callsDesc}</p>
                  </div>
                </div>
              </div>

              {/* Fila inferior con tarjetas mejoradas */}
              <div
                className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 rounded-xl md:rounded-3xl overflow-hidden relative min-h-[300px] sm:min-h-[350px] md:min-h-[300px] cursor-pointer group shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105"
                onClick={() => handleVideoClick(voiceVideoRef)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10"></div>
                <Image
                  src="/photo_2025-09-10 14.17.28.jpeg"
                  alt="Soporte 24/7 - Daniel D Toro formación en ventas y emprendimiento"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                />
                <div className="p-10 h-full flex flex-col justify-center items-center text-center relative z-20">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-xl border border-white/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white drop-shadow-lg"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 drop-shadow-lg">{t.support247Title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">{t.support247Desc}</p>
                </div>
              </div>

              <div
                className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600 rounded-xl md:rounded-3xl overflow-hidden relative min-h-[300px] sm:min-h-[350px] md:min-h-[300px] cursor-pointer group shadow-2xl hover:shadow-sky-500/50 transition-all duration-500 hover:scale-105"
                onClick={() => handleVideoClick(ladderVideoRef)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10"></div>
                <Image
                  src="/photo_2025-09-10 14.17.35.jpeg"
                  alt="Escalabilidad empresarial - Daniel D Toro formación en ventas"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                />
                <div className="p-10 h-full flex flex-col justify-center items-center text-center relative z-20">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-xl border border-white/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white drop-shadow-lg"
                    >
                      <path d="M20 20v-8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v8"></path>
                      <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path>
                      <path d="M12 4v16"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 drop-shadow-lg">{t.scalabilityTitle}</h3>
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">{t.scalabilityDesc}</p>
                </div>
              </div>

              <div
                className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-indigo-400 via-indigo-500 to-indigo-600 rounded-xl md:rounded-3xl overflow-hidden relative min-h-[300px] sm:min-h-[350px] md:min-h-[300px] cursor-pointer group shadow-2xl hover:shadow-indigo-500/50 transition-all duration-500 hover:scale-105"
                onClick={() => handleVideoClick(brainVideoRef)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-10"></div>
                <Image
                  src="/photo_2025-09-10 14.17.43.jpeg"
                  alt="Inteligencia Artificial - Daniel D Toro formación en automatización empresarial"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={85}
                />
                <div className="p-10 h-full flex flex-col justify-center items-center text-center relative z-20">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 shadow-xl border border-white/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white drop-shadow-lg"
                    >
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96 0.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.32-4.2 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3 drop-shadow-lg">{t.aiTitle}</h3>
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-md">{t.aiDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner moderno con video de fondo */}
        <section className="py-8 relative">
          <div className="container mx-auto px-5 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
              <div className="md:col-span-12 bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-600 rounded-3xl overflow-hidden relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] cursor-pointer group shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 z-0">
                  <video
                    ref={bannerVideoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{pointerEvents:"none"}}
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                  >
                    <source src="https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/danieldtoro/Video%20principal/video%20(1080p).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5pZWxkdG9yby9WaWRlbyBwcmluY2lwYWwvdmlkZW8gKDEwODBwKS5tcDQiLCJpYXQiOjE3NTk4NzMwOTksImV4cCI6MTc5MTQwOTA5OX0.hKrARFsm1G8mQjv62T-bIJLmHXq7hIJprrmXeiVzXpo" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                  {/* Overlay para mejorar la legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-indigo-800/50 to-blue-900/70 z-10"></div>
                </div>

                <div className="p-10 h-full flex flex-col justify-center items-center text-center relative z-20">
                  <span className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-100/20 via-cyan-100/20 to-indigo-100/20 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold mb-6 shadow-lg">
                    {t.bannerSpan}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight drop-shadow-lg text-center">
                    {t.bannerTitle1}
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                      {t.bannerTitle2}
                    </span>
                  </h3>

                  <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md text-center max-w-md md:max-w-2xl">
                    {t.bannerDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      </div>
    </>
  )
}
