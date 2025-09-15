"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import PrivacySettingsButton from "@/components/privacy-settings-button"
import TruckAnimation from "@/components/truck-animation"
import SocialMediaButtons from "@/components/social-media-buttons"

export default function Footer() {
  const { currentLanguage, translations } = useLanguage()
  const t = translations[currentLanguage]

  return (
    <footer className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] xl:text-[180px] font-black tracking-tighter text-white leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-blue-400">
              {t.uniclick}
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logoUniclick.png" alt="Uniclick Logo" width={120} height={30} />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm mb-6">{t.description}</p>
            <div className="flex justify-start">
              <SocialMediaButtons />
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 text-left">
            {/* Section 1 */}
            <div>
              <h5 className="font-semibold text-white mb-2 text-lg">{t.section1.title}</h5>
              <p className="text-sm text-gray-300 leading-relaxed">{t.section1.content}</p>
            </div>

            {/* Section 2 */}
            <div>
              <h5 className="font-semibold text-white mb-2 text-lg">{t.section2.title}</h5>
              <p className="text-sm text-gray-300 leading-relaxed">{t.section2.content}</p>
            </div>

            {/* Section 3 */}
            <div>
              <h5 className="font-semibold text-white mb-2 text-lg">{t.section3.title}</h5>
              <p className="text-sm text-gray-300 leading-relaxed">{t.section3.content}</p>
            </div>

            {/* Section 4 */}
            <div>
              <h5 className="font-semibold text-white mb-2 text-lg">{t.section4.title}</h5>
              <p className="text-sm text-gray-300 leading-relaxed">{t.section4.content}</p>
            </div>

            {/* Section 5 */}
            <div>
              <h5 className="font-semibold text-white mb-2 text-lg">{t.section5.title}</h5>
              <p className="text-sm text-gray-300 leading-relaxed">{t.section5.content}</p>
            </div>

            {/* Section 6 */}
            <div>
              <h5 className="font-semibold text-white mb-2 text-lg">{t.section6.title}</h5>
              <p className="text-sm text-gray-300 leading-relaxed">{t.section6.content}</p>
            </div>
          </div>
        </div>

        {/* Camión arriba de la línea */}
        <div className="mt-12 md:mt-16 mb-4">
          <div className="flex justify-start">
            <TruckAnimation />
          </div>
        </div>

        {/* Línea y copyright centrado */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400 inline">
            {t.copyright}
            <PrivacySettingsButton />
          </p>
        </div>
      </div>
    </footer>
  )
}

