'use client'

import Image from 'next/image'
import { MessageCircle, Phone, Check } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'

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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clinic-interior.png"
          alt="Clínica moderna CMOI"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-20 md:py-0">
        <Container>
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                  Sua saúde e seu sorriso merecem especialistas
                </h1>
                <div className="h-1 w-20 bg-purple-600 rounded-full" />
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  Centro Médico Odontológico Integrado com Odontologia e Dermatologia de excelência. Profissionais especializados, tecnologia moderna e atendimento que você merece.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="lg"
                  aria-label="Agendar consulta pelo WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
                <Button
                  href={phoneUrl}
                  variant="outline"
                  size="lg"
                  aria-label="Ligar para a clínica"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-white/90 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Info Box */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl mt-6">
                <p className="text-white/90 text-sm sm:text-base">
                  <span className="inline-block mr-2">✓</span>
                  <span className="font-semibold">Atendimento Particular • Convênios • Porto Velho - RO</span>
                </p>
              </div>
            </div>

            {/* Right side - Clinic entrance photo */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src="/images/clinic-entrance.png"
                  alt="Fachada da clínica CMOI"
                  fill
                  className="object-cover object-center"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
