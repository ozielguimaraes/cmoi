import { CheckCircle, Heart, Award, Zap, Users, Home } from 'lucide-react'

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
    <section id="differentials" className="py-16 md:py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por Que Nos Escolher
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos mais que uma clínica. Somos um espaço dedicado à sua saúde e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  {label}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 bg-white rounded-lg shadow-md p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Profissionais Qualificados
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nossa equipe é composta por profissionais especializados e constantemente atualizados
                nas melhores técnicas e tecnologias de odontologia e dermatologia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tecnologia de Ponta
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Investimos em equipamentos modernos e de última geração para oferecer os melhores
                resultados com segurança e conforto para nossos pacientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
