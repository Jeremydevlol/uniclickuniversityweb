"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PersonalitySelector() {
  return (
    <div className="relative w-full py-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center"
        >
          <Link href="https://chat.whatsapp.com/DLxq74SVodtCO06W452DXQ" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-700 hover:via-blue-700 hover:to-cyan-700 text-white font-bold rounded-full px-8 py-6 text-base sm:px-10 sm:py-7 sm:text-lg shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 group hover:scale-105 flex items-center justify-center w-full max-w-md"
            >
              ÚNETE A LA COMUNIDAD DE TRIUNFADORES
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
