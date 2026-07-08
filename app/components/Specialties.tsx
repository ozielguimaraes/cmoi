'use client'

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
import { Card } from './ui/Card'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
import { Container } from './ui/Container'

interface Specialty {
  id: string
  icon: React.ComponentType<{ className: string }>
  title: string
  description: string
  benefits: string[]
}

const specialties: Specialty[] = [
  {
    id: 'implants',
    icon: Lightbulb,
    title: 'Implantes Dentários',
    description: 'Recupere seu sorriso com implantes de ponta',
    benefits: ['Fixação permanente', 'Aspecto natural', 'Função completa'],
  },
  {
    id: 'prosthetics',
    icon: Crown,
    title: 'Próteses',
    description: 'Soluções personalizadas para seu sorriso',
    benefits: ['Conforto', 'Estética', 'Durabilidade'],
  },
  {
    id: 'endodontics',
    icon: Zap,
    title: 'Endodontia',
    description: 'Tratamento de canal sem dor',
    benefits: ['Preserva dente', 'Tecnologia moderna', 'Rápido'],
  },
  {
    id: 'orthodontics',
    icon: Shield,
    title: 'Ortodontia',
    description: 'Alinhamento perfeito do seu sorriso',
    benefits: ['Alinhamento', 'Saúde bucal', 'Estética'],
  },
  {
    id: 'aesthetic',
    icon: Smile,
    title: 'Dentística',
    description: 'Restaurações e clareamento dental',
    benefits: ['Brancura', 'Resistência', 'Naturalidade'],
  },
  {
    id: 'general',
    icon: Check,
    title: 'Clínica Geral',
    description: 'Cuidados completos para sua boca',
    benefits: ['Limpeza', 'Prevenção', 'Manutenção'],
  },
  {
    id: 'dermatology-clinic',
    icon: Users,
    title: 'Dermatologia Clínica',
    description: 'Cuidados com sua pele',
    benefits: ['Diagnóstico', 'Tratamentos', 'Prevenção'],
  },
  {
    id: 'dermatology-surgery',
    icon: Heart,
    title: 'Dermatologia Cirúrgica',
    description: 'Procedimentos dermatológicos avançados',
    benefits: ['Precisão', 'Segurança', 'Resultados'],
  },
  {
    id: 'procedures',
    icon: Sparkle,
    title: 'Pequenos Procedimentos',
    description: 'Procedimentos cirúrgicos dermatológicos',
    benefits: ['Mínima invasão', 'Recuperação rápida', 'Eficaz'],
  },
]

export default function Specialties() {
  const whatsappUrl = 'https://wa.me/5569993157554?text=Olá! Gostaria de agendar uma avaliação.'

  return (
    <section id="specialties" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Nossas Especialidades"
          subtitle="Oferecemos um completo leque de serviços odontológicos e dermatológicos para sua saúde e bem-estar"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty) => {
            const Icon = specialty.icon
            return (
              <Card key={specialty.id} className="flex flex-col">
                {/* Icon Header */}
                <div className="p-6 bg-purple-50 border-b border-gray-200">
                  <Icon className="w-10 h-10 text-purple-600" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {specialty.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {specialty.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6 flex-1">
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
                  <Button
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="whatsapp"
                    size="md"
                    className="w-full text-center"
                  >
                    Agendar Avaliação
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
