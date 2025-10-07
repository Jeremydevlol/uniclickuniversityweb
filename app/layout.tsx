import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import UniclickChatScript from "@/components/uniclick-chat-script" // Import the new component

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Daniel D Toro - Formación que te cambia la vida",
  description: "🔥 Deja de ser vago, conviértete en triunfador. Aprende a vender, ganar dinero y ser el mejor. Sin excusas, solo resultados.",
  keywords: "Daniel D Toro, formación ventas, vendedores, emprendedores, triunfadores, WhatsApp empresarial, automatización, IA, mentor",
  authors: [{ name: "Daniel D Toro" }],
  creator: "Daniel D Toro",
  publisher: "Daniel D Toro",
  robots: "index, follow",
  openGraph: {
    title: "Daniel D Toro - Formación que te cambia la vida",
    description: "🔥 Deja de ser vago, conviértete en triunfador. Aprende a vender, ganar dinero y ser el mejor. Sin excusas, solo resultados.",
    type: "website",
    locale: "es_ES",
    siteName: "Daniel D Toro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel D Toro - Formación que te cambia la vida",
    description: "🔥 Deja de ser vago, conviértete en triunfador. Aprende a vender, ganar dinero y ser el mejor.",
    creator: "@danieldtoro",
  },
  icons: {
    icon: "/favicon.ico",
  },
  generator: 'Daniel D Toro'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Preconnect a dominios externos para mejorar velocidad */}
        <link rel="preconnect" href="https://jnzsabhbfnivdiceoefg.supabase.co" />
        <link rel="preconnect" href="https://web.cmp.usercentrics.eu" />
        <link rel="dns-prefetch" href="https://jnzsabhbfnivdiceoefg.supabase.co" />
        
        {/* Usercentrics Scripts */}
        <script 
          src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"
          defer
        />
        <script 
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id="NyYTxxwkzij4Gg"
          async
        />
        <script 
          id="usercentrics-ppg"
          privacy-policy-id="60a024d4-abff-4896-9523-ed5aa485c83f"
          src="https://policygenerator.usercentrics.eu/api/privacy-policy"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>

        {/* Render the new Client Component for the chat script */}
        <UniclickChatScript />
      </body>
    </html>
  )
}
