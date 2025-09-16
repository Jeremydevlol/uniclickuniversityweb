"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Footer from "@/components/footer"

export default function PoliticasPrivacidad() {
  const [currentLang, setCurrentLang] = useState("ES")

  useEffect(() => {
    // Forzar la carga del contenido de políticas de privacidad
    const loadPrivacyPolicy = () => {
      // Verificar si ya existe el script
      const existingScript = document.querySelector('#usercentrics-ppg-page');
      if (!existingScript) {
        // Crear y agregar el script específico para esta página
        const script = document.createElement('script');
        script.src = 'https://policygenerator.usercentrics.eu/api/privacy-policy';
        script.setAttribute('privacy-policy-id', '60a024d4-abff-4896-9523-ed5aa485c83f');
        script.id = 'usercentrics-ppg-page';
        script.async = true;
        document.head.appendChild(script);
      }
    };

    // Cargar inmediatamente
    loadPrivacyPolicy();

    // También intentar después de un pequeño delay para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      loadPrivacyPolicy();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const translations: { [key: string]: any } = {
    ES: {
      login: "Iniciar sesión",
      createAccount: "Crear cuenta",
      title: "Políticas de Privacidad",
      subtitle: "Uniclear University - Protegemos tu privacidad mientras te ayudamos a crecer profesionalmente.",
      privacyBadge: "🔒 Privacidad y Protección de Datos",
      spanish: "Español",
      english: "English",
      chinese: "中文"
    },
    EN: {
      login: "Log in",
      createAccount: "Create account",
      title: "Privacy Policy",
      subtitle: "Uniclear University - We protect your privacy while helping you grow professionally.",
      privacyBadge: "🔒 Privacy and Data Protection",
      spanish: "Español",
      english: "English",
      chinese: "中文"
    },
    ZH: {
      login: "登录",
      createAccount: "创建账户",
      title: "隐私政策",
      subtitle: "Uniclear University - 在帮助您专业成长的同时保护您的隐私。",
      privacyBadge: "🔒 隐私和数据保护",
      spanish: "Español",
      english: "English",
      chinese: "中文"
    }
  }

  const t = translations[currentLang]

  return (
    <>
      <Head>
        <title>Políticas de Privacidad - Daniel D Toro</title>
        <meta name="description" content="Políticas de privacidad de Daniel D Toro. Protegemos tu privacidad mientras te ayudamos a crecer profesionalmente. Conoce cómo manejamos tus datos." />
        <meta name="keywords" content="políticas privacidad Daniel D Toro, protección datos, RGPD, privacidad, términos uso" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Políticas de Privacidad - Daniel D Toro" />
        <meta property="og:description" content="Políticas de privacidad de Daniel D Toro. Protegemos tu privacidad mientras te ayudamos a crecer profesionalmente." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://danieldtoro.com/politicas-privacidad" />
        <meta property="og:site_name" content="Daniel D Toro" />
        <meta property="og:locale" content="es_ES" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Políticas de Privacidad - Daniel D Toro" />
        <meta name="twitter:description" content="Políticas de privacidad de Daniel D Toro. Protegemos tu privacidad mientras te ayudamos a crecer profesionalmente." />
        <meta name="twitter:creator" content="@danieldtoro" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://danieldtoro.com/politicas-privacidad" />
        
        <style dangerouslySetInnerHTML={{
          __html: `
          /* Estilos específicos para la página de políticas de privacidad - Dark Mode */
          body .uc-privacy-policy {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
            line-height: 1.7 !important;
            color: #374151 !important;
            font-size: 16px !important;
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            text-align: left !important;
          }
          
          /* Contenedor principal de políticas de privacidad - Dark Mode */
          .privacy-policy-page .uc-privacy-policy {
            background: white !important;
            padding: 3rem !important;
            border-radius: 1rem !important;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
            border: 1px solid #e5e7eb !important;
            margin: 2rem 0 !important;
            max-width: none !important;
            width: 100% !important;
          }
          
          /* Títulos - Dark Mode */
          .uc-privacy-policy h1 {
            font-size: 2.5rem !important;
            font-weight: 800 !important;
            color: #1f2937 !important;
            margin-bottom: 2rem !important;
            padding-bottom: 1rem !important;
            border-bottom: 3px solid #10b981 !important;
            background: linear-gradient(135deg, #10b981, #3b82f6, #f59e0b) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            text-align: center !important;
          }
          
          .uc-privacy-policy h2 {
            font-size: 1.75rem !important;
            font-weight: 700 !important;
            color: #374151 !important;
            margin-top: 3rem !important;
            margin-bottom: 1.5rem !important;
            padding-left: 1rem !important;
            border-left: 5px solid #10b981 !important;
            background: linear-gradient(135deg, #10b981, #3b82f6) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
          }
          
          .uc-privacy-policy h3 {
            font-size: 1.4rem !important;
            font-weight: 600 !important;
            color: #4b5563 !important;
            margin-top: 2rem !important;
            margin-bottom: 1rem !important;
            padding-left: 0.5rem !important;
            border-left: 3px solid #f59e0b !important;
          }
          
          .uc-privacy-policy h4 {
            font-size: 1.2rem !important;
            font-weight: 600 !important;
            color: #6b7280 !important;
            margin-top: 1.5rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          /* Párrafos y contenido - Dark Mode */
          .uc-privacy-policy p {
            margin-bottom: 1.25rem !important;
            text-align: left !important;
            line-height: 1.8 !important;
            color: #374151 !important;
          }
          
          /* Listas - Dark Mode */
          .uc-privacy-policy ul, 
          .uc-privacy-policy ol {
            margin-bottom: 1.5rem !important;
            padding-left: 2rem !important;
          }
          
          .uc-privacy-policy li {
            margin-bottom: 0.75rem !important;
            line-height: 1.7 !important;
            color: #374151 !important;
          }
          
          /* Enlaces - Dark Mode */
          .uc-privacy-policy a {
            color: #10b981 !important;
            text-decoration: underline !important;
            font-weight: 500 !important;
            transition: color 0.2s ease !important;
          }
          
          .uc-privacy-policy a:hover {
            color: #059669 !important;
          }
          
          /* Tablas - Dark Mode */
          .uc-privacy-policy table {
            width: 100% !important;
            border-collapse: collapse !important;
            margin: 2rem 0 !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
            border-radius: 0.5rem !important;
            overflow: hidden !important;
          }
          
          .uc-privacy-policy th,
          .uc-privacy-policy td {
            border: 1px solid #e5e7eb !important;
            padding: 1rem !important;
            text-align: left !important;
            color: #374151 !important;
          }
          
          .uc-privacy-policy th {
            background: linear-gradient(135deg, #f3f4f6, #e5e7eb) !important;
            font-weight: 600 !important;
            color: #374151 !important;
          }
          
          .uc-privacy-policy tbody tr:nth-child(even) {
            background-color: #f9fafb !important;
          }
          
          /* Elementos de énfasis - Dark Mode */
          .uc-privacy-policy strong {
            font-weight: 600 !important;
            color: #1f2937 !important;
          }
          
          .uc-privacy-policy em {
            font-style: italic !important;
            color: #6b7280 !important;
          }
          
          /* Citas - Dark Mode */
          .uc-privacy-policy blockquote {
            border-left: 4px solid #10b981 !important;
            background: linear-gradient(135deg, #f3f4f6, #e5e7eb) !important;
            padding: 1rem 1.5rem !important;
            margin: 1.5rem 0 !important;
            border-radius: 0 0.5rem 0.5rem 0 !important;
            color: #374151 !important;
          }
          
          /* Código - Dark Mode */
          .uc-privacy-policy code {
            background-color: #f3f4f6 !important;
            color: #374151 !important;
            padding: 0.25rem 0.5rem !important;
            border-radius: 0.25rem !important;
            font-family: 'Monaco', 'Menlo', monospace !important;
            font-size: 0.9em !important;
            border: 1px solid #e5e7eb !important;
          }
          `
        }} />
      </Head>

      <div className="relative z-10 privacy-policy-page min-h-screen">
        {/* Navigation - Dark Mode */}
        <nav className="z-50 bg-transparent backdrop-blur-xl border-b border-gray-800 w-full fixed top-0 left-0 right-0 transition-all duration-300">
          <div className="container mx-auto px-6 flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image src="/logoUniclick.png" alt="Uniclick Logo" width={120} height={30} className="mr-2" />
              </Link>
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-3">
                {/* Language selector */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-2.5 rounded-full hover:bg-gradient-to-r hover:from-green-900/50 hover:to-blue-900/50 transition-all flex items-center space-x-1.5 border border-gray-700 text-gray-300 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/50">
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
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      <span className="text-sm font-medium">{currentLang}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-24">
                    <DropdownMenuItem onClick={() => setCurrentLang("ES")}>{t.spanish}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setCurrentLang("EN")}>{t.english}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setCurrentLang("ZH")}>{t.chinese}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <a
                  href="https://app.uniclick.io"
                  className="px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-transparent hover:bg-gradient-to-r hover:from-green-900/50 hover:to-emerald-900/50 transition-all flex items-center space-x-2 group border border-green-500 text-xs md:text-sm font-medium text-white hover:border-green-400 hover:shadow-lg hover:shadow-green-500/50"
                >
                  <span>{t.login}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href="https://app.uniclick.io"
                  className="px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all flex items-center space-x-2 group shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 border border-blue-500/20 text-xs md:text-sm font-medium hover:scale-105"
                >
                  <span>{t.createAccount}</span>
                </a>
              </div>

              {/* Mobile buttons */}
              <div className="flex md:hidden items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-2 rounded-full hover:bg-gradient-to-r hover:from-green-900/50 hover:to-blue-900/50 transition-all flex items-center space-x-1 border border-gray-700 text-white hover:border-green-500 hover:shadow-lg hover:shadow-green-500/50">
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
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      <span className="text-xs font-medium">{currentLang}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-24">
                    <DropdownMenuItem onClick={() => setCurrentLang("ES")}>{t.spanish}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setCurrentLang("EN")}>{t.english}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setCurrentLang("ZH")}>{t.chinese}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <a
                  href="https://app.uniclick.io"
                  className="px-3 py-2 rounded-full bg-transparent hover:bg-gradient-to-r hover:from-green-900/50 hover:to-emerald-900/50 transition-all flex items-center space-x-1 group border border-green-500 text-xs font-medium text-white hover:border-green-400 hover:shadow-lg hover:shadow-green-500/50"
                >
                  <span>{t.login}</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Space for fixed header */}
        <div className="h-[60px]"></div>

        {/* Main content - Dark Mode */}
        <main className="flex flex-col items-center justify-center text-center px-0 pt-6 pb-6 min-h-screen">
          <div className="w-full">
            <div className="mb-4 mt-8 sm:mt-16 pb-16">
              <span className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-green-100 via-orange-100 to-blue-100 border border-green-200 text-green-700 text-sm font-semibold mb-4 shadow-lg shadow-green-200/50 hover:shadow-green-300/50 transition-all">
                {t.privacyBadge}
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-800 mb-4 md:mb-8 tracking-tight leading-[0.95] sm:leading-[0.9]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-orange-600">
                  {t.title}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light max-w-xs sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed mb-8 md:mb-16">
                {t.subtitle}
              </p>
            </div>
          </div>
        </main>

        {/* Contenido de políticas de privacidad - Dark Mode */}
        <div className="container mx-auto px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* El div de Usercentrics con ID único para esta página */}
            <div className="uc-privacy-policy" id="privacy-policy-content"></div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
} 