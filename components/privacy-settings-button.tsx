"use client"

import Link from "next/link"

export default function PrivacySettingsButton() {
  return (
    <Link 
      href="/politicas-privacidad"
      className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 underline ml-2"
    >
      Políticas de privacidad
    </Link>
  );
} 