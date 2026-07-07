'use client'

import Image from 'next/image'
import {
  Lightbulb,
  Crown,
  Zap,
  Shield,
  Smile,
  Check,
  Users,
  Heart,
  Sparkle,
} from 'lucide-react'
import { useState } from 'react'

interface Specialty {
  id: string
  icon: React.ComponentType<{ className: string }>
  title: string
  description: string
  benefits: string[]
  image: string
}

const specialties: Specialty[] = [
  {
    id: 'implants',
    icon: Lightbulb,
    title: 'Implantes Dentários',
    description: 'Recupere seu sorriso com implantes de ponta',
    benefits: ['Fixação permanente', 'Aspecto natural', 'Função completa'],
    image: 'https://images.unsplash.com/photo-1631217314830-4875184da83c?w=400&h=300&fit=crop',
  },
  {
    id: 'prosthetics',
    icon: Crown,
    title: 'Próteses',
    description: 'Soluções personalizadas para seu sorriso',
    benefits: ['Conforto', 'Estética', 'Durabilidade'],
    image: 'https://images.unsplash.com/photo-1579154204601-01d3cc290e3d?w=400&h=300&fit=crop',
  },
  {
    id: 'endodontics',
    icon: Zap,
    title: 'Endodontia',
    description: 'Tratamento de canal sem dor',
    benefits: ['Preserva dente', 'Tecnologia moderna', 'Rápido'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
  },
  {
    id: 'orthodontics',
    icon: Shield,
    title: 'Ortodontia',
    description: 'Alinhamento perfeito do seu sorriso',
    benefits: ['Alinhamento', 'Saúde bucal', 'Estética'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
  },
  {
    id: 'aesthetic',
    icon: Smile,
    title: 'Dentística',
    description: 'Restaurações e clareamento dental',
    benefits: ['Brancura', 'Resistência', 'Naturalidade'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
  },
  {
    id: 'general',
    icon: Check,
    title: 'Clínica Geral',
    description: 'Cuidados completos para sua boca',
    benefits: ['Limpeza', 'Prevenção', 'Manutenção'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
  },
  {
    id: 'dermatology-clinic',
    icon: Users,
    title: 'Dermatologia Clínica',
    description: 'Cuidados com sua pele',
    benefits: ['Diagnóstico', 'Tratamentos', 'Prevenção'],
    image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=300&fit=crop',
  },
  {
    id: 'dermatology-surgery',
    icon: Heart,
    title: 'Dermatologia Cirúrgica',
    description: 'Procedimentos dermatológicos avançados',
    benefits: ['Precisão', 'Segurança', 'Resultados'],
    image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=300&fit=crop',
  },
  {
    id: 'procedures',
    icon: Sparkle,
    title: 'Pequenos Procedimentos',
    description: 'Procedimentos cirúrgicos dermatológicos',
    benefits: ['Mínima invasão', 'Recuperação rápida', 'Eficaz'],
    image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=300&fit=crop',
  },
]

export default function Specialties() {
  const whatsappUrl = 'https://wa.me/5569993157554?text=Olá! Gostaria de agendar uma avaliação.'

  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="specialties" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos um completo leque de serviços odontológicos e dermatológicos para sua saúde e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => {
            const Icon = specialty.icon
            return (
              <div
                key={specialty.id}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredId(specialty.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-gray-200">
                  <Image
                    src={specialty.image}
                    alt={specialty.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {specialty.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {specialty.description}
                      </p>
                    </div>
                    <Icon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2">
                    {specialty.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="text-sm text-gray-700 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-lg hover:shadow-lg transition text-center text-sm"
                  >
                    Agendar Avaliação
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
