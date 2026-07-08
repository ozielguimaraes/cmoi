'use client'

import Image from 'next/image'
import { MessageCircle, Phone, Check } from 'lucide-react'

export default function Hero() {
  const whatsappUrl = 'https://wa.me/5569993157554?text=Olá! Gostaria de agendar uma consulta.'
  const phoneUrl = 'tel:+55693222-4886'

  const benefits = [
    'Atendimento Humanizado',
    'Profissionais Especializados',
    'Estrutura Moderna',
    'Localização Fácil',
  ]

  return (
    <section id="hero" className="relative pt-20 md:pt-0 min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Smart Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clinic-interior.png"
          alt="Clínica moderna CMOI"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Overlay inteligente: roxo escuro + gradiente para garantir legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-purple-900/75 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/40 to-slate-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-0">
        <div className="md:grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Main Message */}
          <div className="space-y-8">
            {/* Heading - Clara e hierárquica */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Sua saúde e seu sorriso merecem especialistas
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" />
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed font-light">
                Centro Médico Odontológico Integrado com Odontologia e Dermatologia de excelência. Profissionais especializados, tecnologia moderna e atendimento que você merece.
              </p>
            </div>

            {/* CTA Buttons - Alta visibilidade */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg hover:shadow-2xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 text-base"
                aria-label="Agendar consulta pelo WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href={phoneUrl}
                className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-lg border-2 border-white/40 hover:border-white/60 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 text-base backdrop-blur-sm"
                aria-label="Ligar para a clínica"
              >
                <Phone className="w-5 h-5" />
                Ligar Agora
              </a>
            </div>

            {/* Benefits - Visível e acessível */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white/90 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Info Box - Confiança */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl mt-6">
              <p className="text-white/90 text-sm sm:text-base">
                <span className="inline-block mr-2">✓</span>
                <span className="font-semibold">Atendimento Particular • Convênios • Porto Velho - RO</span>
              </p>
            </div>
          </div>

          {/* Right side - Visual balance */}
          <div className="hidden md:flex items-center justify-center">
            <div className="text-center opacity-10">
              <svg className="w-64 h-64" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
