'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle, Share2 } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappUrl = 'https://wa.me/5569993157554?text=Olá! Gostaria de agendar uma consulta.'
  const phoneUrl = 'tel:+55693222-4886'
  const instagramUrl = 'https://www.instagram.com/clinicacmoi/'

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Especialidades', href: '#specialties' },
    { label: 'Diferenciais', href: '#differentials' },
    { label: 'Convênios', href: '#convenios' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-base">C</span>
            </div>
            <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              CMOI
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition"
              title="Instagram"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href={phoneUrl}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              title="Ligar"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={whatsappUrl}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2 text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-purple-50 rounded-lg transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2 pt-4 border-t border-gray-200 space-y-2">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition text-center font-medium"
                >
                  📷 Instagram
                </a>
                <a
                  href={phoneUrl}
                  className="block w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-center font-medium"
                >
                  ☎️ Ligar Agora
                </a>
                <a
                  href={whatsappUrl}
                  className="block w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-center font-medium"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
