"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type Language = "es" | "en" | "zh"

interface LanguageContextType {
  currentLanguage: Language
  setCurrentLanguage: (language: Language) => void
  translations: any
}

const translations = {
  es: {
    uniclick: "UNIVERSITY",
    description:
      "Potencia tus habilidades con formación práctica y enfocada en negocio. Automatiza, optimiza y crece con University.",
    section1: {
      title: "Nota para estudiantes, emprendedores y equipos de trabajo",
      content:
        "Revisa nuestras recomendaciones y advertencias sobre el uso de University y sus integraciones en entornos profesionales. Para utilizar la plataforma, necesitas crear una cuenta y cumplir los requisitos técnicos y legales aplicables. Parte del contenido avanzado puede estar dirigido a usuarios profesionales o mayores de edad. Consulta el centro de soporte para más detalles.",
    },
    section2: {
      title: "Aviso sobre contenidos y servicios de University",
      content:
        "Los cursos, recursos, integraciones y herramientas de University pueden cambiar, mejorar o retirarse en cualquier momento. Algunas funciones pueden no estar disponibles en todas las regiones o idiomas, requerir activación específica o estar sujetas a restricciones del proveedor o de la legislación local. Se pueden aplicar condiciones, tarifas adicionales o requisitos técnicos.",
    },
    section3: {
      title: "Software e integraciones utilizadas en el aprendizaje",
      content:
        "University facilita el uso de plataformas como WhatsApp, email, formularios, calendarios y chatbots con IA durante el proceso formativo. La disponibilidad de estas integraciones depende del país, sistema operativo y proveedor. Es posible que necesites software adicional, configuración manual o permisos administrativos para su activación. Licencias de terceros no están incluidas salvo que se indique lo contrario.",
    },
    section4: {
      title: "Requisitos técnicos y buenas prácticas de privacidad",
      content:
        "University está diseñada para uso profesional. Te recomendamos revisar políticas de privacidad, seguridad y uso ético de datos al implementar mensajería, redes sociales o canales de atención. El rendimiento puede variar según tu red, hardware y la infraestructura de tu empresa.",
    },
    section5: {
      title: "Información de contacto",
      content: "Atención al estudiante: soporte@uniclick.io",
    },
    section6: {
      title: "Financiación y planes de suscripción",
      content:
        "University puede ofrecer opciones de pago flexibles a través de proveedores autorizados. La financiación está sujeta a verificación y no está disponible en todas las regiones. Revisa nuestras condiciones para más información.",
    },
    copyright: "©2025 University. La plataforma inteligente de formación para profesionales y empresas.",
  },
  en: {
    uniclick: "UNIVERSITY",
    description:
      "Boost your skills with practical business-focused training. Automate, optimize and grow with University.",
    section1: {
      title: "Note for companies, entrepreneurs and work teams:",
      content:
        "Consult the recommendations and warnings about the use of Uniclick and its integrations in business environments. To use Uniclick, an account creation and compliance with certain technical and legal requirements is required. Some functions are designed exclusively for professional users or adults. Check support information for more details.",
    },
    section2: {
      title: "Notice about Uniclick functionalities and services:",
      content:
        "Uniclick's features, integrations and tools are subject to changes, improvements or withdrawal at any time. Some functions may not be available in all regions or languages, require specific activation or have restrictions according to local or provider legislation. Additional conditions, fees or technical requirements may apply.",
    },
    section3: {
      title: "Business communication integrations:",
      content:
        "Uniclick facilitates simple connection with platforms such as WhatsApp, email, web forms, calendars and AI chatbots. The availability of these integrations depends on the country, operating system and service provider. Additional software, manual configuration or administrative permissions may be required for activation.",
    },
    section4: {
      title: "Usage and security requirements:",
      content:
        "Uniclick is designed for business use. It is recommended to review privacy, security and ethical data use guidelines when integrating messaging tools, social networks or customer service channels. Function performance may vary depending on the network, hardware and infrastructure of each company.",
    },
    section5: {
      title: "Contact information:",
      content: "support@uniclick.io",
    },
    section6: {
      title: "Financing and subscription plans:",
      content:
        "Uniclick may offer flexible payment options through authorized providers. Financing is subject to verification and is not available in all regions. Check our conditions for more information.",
    },
    copyright: "©2025 Uniclick. The intelligent solution for connected companies.",
  },
  zh: {
    uniclick: "UNIVERSITY",
    description: "通过实用的商业培训提升您的技能。使用University自动化、优化和发展。",
    section1: {
      title: "企业、企业家和工作团队注意事项：",
      content:
        "请查阅关于在商业环境中使用Uniclick及其集成的建议和警告。要使用Uniclick，需要创建账户并符合某些技术和法律要求。某些功能专门为专业用户或成年人设计。请查看支持信息了解更多详情。",
    },
    section2: {
      title: "关于Uniclick功能和服务的通知：",
      content:
        "Uniclick的功能、集成和工具可能随时发生变化、改进或撤销。某些功能可能在所有地区或语言中不可用，需要特定激活或根据当地或提供商法规有限制。可能适用额外条件、费用或技术要求。",
    },
    section3: {
      title: "商业通信集成：",
      content:
        "Uniclick便于与WhatsApp、电子邮件、网络表单、日历和AI聊天机器人等平台的简单连接。这些集成的可用性取决于国家、操作系统和服务提供商。激活可能需要额外软件、手动配置或管理权限。",
    },
    section4: {
      title: "使用和安全要求：",
      content:
        "Uniclick专为商业用途设计。建议在集成消息工具、社交网络或客户服务渠道时审查隐私、安全和道德数据使用指南。功能性能可能因每个公司的网络、硬件和基础设施而异。",
    },
    section5: {
      title: "联系信息：",
      content: "support@uniclick.io",
    },
    section6: {
      title: "融资和订阅计划：",
      content:
        "Uniclick可能通过授权提供商提供灵活的付款选项。融资需要验证，并非在所有地区都可用。请查看我们的条件了解更多信息。",
    },
    copyright: "©2025 Uniclick. 连接企业的智能解决方案。",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("es")

  // Persist language in localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("uniclick-language") as Language
    if (savedLanguage && ["es", "en", "zh"].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (language: Language) => {
    setCurrentLanguage(language)
    localStorage.setItem("uniclick-language", language)
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setCurrentLanguage: handleSetLanguage,
        translations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
