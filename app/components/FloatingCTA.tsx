'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappUrl = 'https://wa.me/5569993157554?text=Olá! Gostaria de agendar uma consulta.'
  const phoneUrl = 'tel:+55693222-4886'

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Desktop: Show both buttons */}
      <div className="hidden md:flex fixed bottom-8 right-8 gap-3 z-40 flex-col">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-110"
          title="WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <a
          href={phoneUrl}
          className="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-110"
          title="Ligar"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

      {/* Mobile: Show WhatsApp button only */}
      <div className="md:hidden fixed bottom-8 right-8 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-110"
          title="WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>
    </>
  )
}
