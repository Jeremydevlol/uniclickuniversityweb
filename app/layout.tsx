import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import UniclickChatScript from "@/components/uniclick-chat-script" // Import the new component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DanielDToro-Triunfadores",
  description: "La formación que te convierte en un triunfador de ventas. Aprende a vender, ganar dinero y ser el mejor con Daniel D Toro.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'Uniclick.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
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
