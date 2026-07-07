import { CheckCircle } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Escolha a especialidade',
      description: 'Selecione o serviço que você precisa',
    },
    {
      number: '2',
      title: 'Agende pelo WhatsApp',
      description: 'Escolha data e horário que funciona para você',
    },
    {
      number: '3',
      title: 'Receba atendimento especializado',
      description: 'Nossos profissionais cuidam de você',
    },
    {
      number: '4',
      title: 'Continue seu acompanhamento',
      description: 'Mantemos sua saúde em dia',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simples e fácil. Apenas 4 passos para começar seu tratamento
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map(({ number, title, description }, idx) => (
            <div key={number} className="relative">
              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] right-[-50%] h-0.5 bg-gradient-to-r from-purple-600 to-transparent" />
              )}

              {/* Card */}
              <div className="relative z-10 bg-white border border-purple-200 rounded-lg p-6 text-center hover:shadow-md transition">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
