import {
  Users,
  Shield,
  Zap,
  MapPin,
  Heart,
  Clock,
} from 'lucide-react'
import { Container } from './ui/Container'

export default function TrustBar() {
  const items = [
    { icon: Users, label: 'Profissionais Especializados' },
    { icon: Shield, label: 'Ambiente Seguro' },
    { icon: Zap, label: 'Equipamentos Modernos' },
    { icon: MapPin, label: 'Excelente Localização' },
    { icon: Heart, label: 'Atendimento Humanizado' },
    { icon: Clock, label: 'Agendamento Fácil' },
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-16 border-b border-gray-200">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center space-y-3 group"
            >
              <div className="p-3 bg-white rounded-lg group-hover:shadow-md transition border border-gray-200">
                <Icon className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-xs md:text-sm font-medium text-gray-700 leading-tight">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
