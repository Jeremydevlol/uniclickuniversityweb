"use client"

import { motion } from "framer-motion"
import { Heart, ThumbsUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Libertad",
    role: "Expansión sin límites",
    video: "https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/danieldtoro/Video%20principal/img_5792%20(2160p).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5pZWxkdG9yby9WaWRlbyBwcmluY2lwYWwvaW1nXzU3OTIgKDIxNjBwKS5tcDQiLCJpYXQiOjE3NTk4NDc5MTMsImV4cCI6MTc5MTM4MzkxM30.DTBLQG4slB4cjc-NGJaHktPTcANY98vJBqfYLbvFubg",
  },
  {
    id: 2,
    name: "Comunicación",
    role: "Conexión instantánea",
    video: "https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/danieldtoro/Video%20principal/a6ea2565bc5d4a8ea151f3ac45954447.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5pZWxkdG9yby9WaWRlbyBwcmluY2lwYWwvYTZlYTI1NjViYzVkNGE4ZWExNTFmM2FjNDU5NTQ0NDcubXA0IiwiaWF0IjoxNzU5ODQ4NTQwLCJleHAiOjE3OTEzODQ1NDB9.C9r_akpdTr0oyPd1sAQZETM8sFkzkUqyoRDRgK9amW8",
  },
  {
    id: 3,
    name: "Rapidez",
    role: "Respuestas ágiles",
    video: "https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/danieldtoro/Video%20principal/img_0667%20(1440p).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5pZWxkdG9yby9WaWRlbyBwcmluY2lwYWwvaW1nXzA2NjcgKDE0NDBwKS5tcDQiLCJpYXQiOjE3NTk4NDg3MDgsImV4cCI6MTc5MTM4NDcwOH0.UZrGodAeYnHkE833fcPK2fS5q0TdMYzD0uWGNNtCu6A",
  },
  {
    id: 4,
    name: "Innovación",
    role: "Futuro inteligente",
    video: "https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/danieldtoro/Video%20principal/ssstik.io_@danieldtoro_1757503454344%20(540p).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5pZWxkdG9yby9WaWRlbyBwcmluY2lwYWwvc3NzdGlrLmlvX0BkYW5pZWxkdG9yb18xNzU3NTAzNDU0MzQ0ICg1NDBwKS5tcDQiLCJpYXQiOjE3NTk4NDkxNTAsImV4cCI6MTc5MTM4NTE1MH0.7e3h_R-kG9YjpRqXcjNwbhegiPbBnT--ZPNmt05nDwA",
  },
  {
    id: 5,
    name: "Eficiencia",
    role: "Optimización total",
    video: "https://jnzsabhbfnivdiceoefg.supabase.co/storage/v1/object/sign/danieldtoro/Video%20principal/ssstik.io_@danieldtoro_1757503297660%20(540p).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNGNiMTczNS02NDVkLTQ2OWEtOTdjOS01Y2QzZDMzMWY2M2IiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkYW5pZWxkdG9yby9WaWRlbyBwcmluY2lwYWwvc3NzdGlrLmlvX0BkYW5pZWxkdG9yb18xNzU3NTAzMjk3NjYwICg1NDBwKS5tcDQiLCJpYXQiOjE3NTk4NDk0MjgsImV4cCI6MTc5MTM4NTQyOH0.b5cKEW_9_tVvd_XjTy6TijRRi8xoVr4ImGxi6_418Mk",
  },
  {
    id: 6,
    name: "Conexión",
    role: "Puentes digitales",
    video: "", // URL de Supabase Storage
  },
]

const Card = ({ member, sizeClass }: { member: (typeof TEAM_MEMBERS)[0]; sizeClass: string }) => (
  <motion.div whileHover={{ scale: 1.05, y: -10 }} className={`relative group cursor-pointer ${sizeClass}`}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-tilt"></div>
    <div className="relative w-full h-full bg-white rounded-3xl p-1 shadow-xl overflow-hidden border border-purple-200 group-hover:border-purple-300 transition-all">
      {/* Video desde Supabase Storage */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        loading="lazy"
        className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
        key={member.video}
      >
        {member.video && <source src={member.video} type="video/mp4" />}
      </video>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-white font-bold text-lg drop-shadow-lg">{member.name}</h3>
        <p className="text-white/70 text-sm drop-shadow-md">{member.role}</p>
      </div>
    </div>
  </motion.div>
)

export default function PersonalitySelector() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glows con colores vibrantes */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
<div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl opacity-15 animate-pulse animation-delay-2000"></div>
<div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-3xl opacity-15 animate-pulse animation-delay-6000"></div> */}

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-0 sm:mb-8 -mt-4"
        >
          {/* <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-tight">
Conoce a tu
<br />
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
agente digital
</span>
</h2>
<p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
Selecciona la personalidad que mejor represente a tu empresa.
</p> */}
        </motion.div>

        {/* Pyramid Layout with Floating Elements */}
        <div className="relative">
          {/* Lock button above top row con gradiente colorido */}

          {/* Top Row - 3 containers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, staggerChildren: 0.1 }}
            className="flex justify-center items-end gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-4 sm:mb-8"
          >
            <Card member={TEAM_MEMBERS[0]} sizeClass="w-40 h-52 sm:w-40 sm:h-52 md:w-52 md:h-64 lg:w-60 lg:h-72" />
            <Card member={TEAM_MEMBERS[1]} sizeClass="w-44 h-60 sm:w-44 sm:h-60 md:w-56 md:h-72 lg:w-64 lg:h-80" />
            <Card member={TEAM_MEMBERS[2]} sizeClass="w-40 h-52 sm:w-40 sm:h-52 md:w-52 md:h-64 lg:w-60 lg:h-72" />
          </motion.div>

          {/* Middle Row - 2 containers with floating buttons */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute left-[-20px] sm:left-0 md:left-20 top-1/2 transform -translate-y-1/2 -translate-x-1/2 sm:-translate-x-16 z-20"
            >
              <div className="bg-gradient-to-r from-red-100 to-pink-100 backdrop-blur-md rounded-full p-2 sm:p-4 shadow-xl border border-red-200 hover:shadow-red-300/50 transition-all">
                <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-red-600" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute right-[-20px] sm:right-0 md:right-20 top-1/2 transform -translate-y-1/2 translate-x-1/2 sm:translate-x-16 z-20"
            >
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 backdrop-blur-md rounded-full p-2 sm:p-4 shadow-xl border border-green-200 hover:shadow-green-300/50 transition-all">
                <ThumbsUp className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, staggerChildren: 0.1 }}
              className="flex justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-1 sm:mb-8"
            >
              <Card member={TEAM_MEMBERS[3]} sizeClass="w-44 h-60 sm:w-44 sm:h-60 md:w-56 md:h-72 lg:w-64 lg:h-80" />
              <Card member={TEAM_MEMBERS[4]} sizeClass="w-44 h-60 sm:w-44 sm:h-60 md:w-56 md:h-72 lg:w-64 lg:h-80" />
            </motion.div>
          </div>

          {/* Bottom Row - 1 container */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center mt-28 sm:mt-36 md:mt-44"
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
