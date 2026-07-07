'use client'

import Image from 'next/image'
import { MessageCircle, Phone, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const whatsappUrl = 'https://wa.me/5569993157554?text=Olá! Gostaria de agendar uma consulta.'
  const phoneUrl = 'tel:+55693222-4886'

  const benefits = [
    'Atendimento Humanizado',
    'Profissionais Especializados',
    'Estrutura Moderna',
    'Localização Fácil',
    'Agendamento Rápido',
  ]

  return (
    <section id="hero" className="relative pt-20 md:pt-0 min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1631217314830-4875184da83c?w=1200&h=800&fit=crop"
          alt="Clínica moderna com profissionais"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sua saúde e seu sorriso merecem{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                  atendimento especializado
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Odontologia e Dermatologia em um só lugar, com atendimento humanizado, profissionais qualificados e facilidade para agendar sua consulta.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
              <a
                href={phoneUrl}
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Ligar Agora
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-white/90 backdrop-blur p-4 rounded-lg border border-purple-200">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-purple-600">✔ Atendimento Particular</span> •{' '}
                <span className="font-semibold text-purple-600">✔ Convênios</span> •{' '}
                <span className="font-semibold text-purple-600">✔ Porto Velho - RO</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
