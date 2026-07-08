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
          src="/images/clinic-interior.png"
          alt="Clínica moderna CMOI"
          fill
          className="object-cover brightness-50"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-purple-900/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sua saúde e seu sorriso merecem{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-200">
                  atendimento especializado
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Centro Médico Odontológico Integrado: Odontologia e Dermatologia de excelência em um só lugar. Profissionais especializados, tecnologia moderna e atendimento humanizado que você merece.
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
            <div className="bg-white/95 backdrop-blur p-4 rounded-lg shadow-lg">
              <p className="text-sm text-gray-900">
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
