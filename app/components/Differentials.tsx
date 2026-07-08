import { CheckCircle, Heart, Award, Zap, Users, Home } from 'lucide-react'
import { Card } from './ui/Card'
import { SectionHeading } from './ui/SectionHeading'
import { Container } from './ui/Container'

export default function Differentials() {
  const differentials = [
    { icon: Heart, label: 'Atendimento Humanizado' },
    { icon: Award, label: 'Equipe Experiente' },
    { icon: Home, label: 'Estrutura Moderna' },
    { icon: Zap, label: 'Equipamentos Atualizados' },
    { icon: Users, label: 'Atendimento Integrado' },
    { icon: CheckCircle, label: 'Excelente Localização' },
    { icon: Heart, label: 'Ambiente Confortável' },
    { icon: Zap, label: 'Agendamento Simples' },
  ]

  return (
    <section id="differentials" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title={<>Por Que Nos <span className="text-purple-600">Escolher</span></>}
          subtitle="Somos mais que uma clínica. Somos um espaço dedicado à sua saúde e bem-estar com excelência"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {differentials.map(({ icon: Icon, label }) => (
            <Card key={label} className="p-6 flex items-start gap-3">
              <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
                <Icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-snug">
                {label}
              </h3>
            </Card>
          ))}
        </div>

        {/* Featured Benefits */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl shadow-lg p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Profissionais Qualificados
              </h3>
              <p className="text-white/90 leading-relaxed">
                Nossa equipe é composta por profissionais especializados e constantemente atualizados
                nas melhores técnicas e tecnologias de odontologia e dermatologia.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">
                Tecnologia de Ponta
              </h3>
              <p className="text-white/90 leading-relaxed">
                Investimos em equipamentos modernos e de última geração para oferecer os melhores
                resultados com segurança e conforto para nossos pacientes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
