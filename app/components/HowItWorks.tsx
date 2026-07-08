import { SectionHeading } from './ui/SectionHeading'
import { Container } from './ui/Container'

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
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeading
          title="Como Funciona"
          subtitle="Simples e fácil. Apenas 4 passos para começar seu tratamento"
        />

        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map(({ number, title, description }, idx) => (
            <div key={number} className="relative">
              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] right-[-50%] h-0.5 bg-purple-600/30" />
              )}

              {/* Card */}
              <div className="relative z-10 bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {number}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
