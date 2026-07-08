'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: 'Como agendar uma consulta?',
      answer:
        'Você pode agendar pelo WhatsApp (69) 99315-7554, ligar para (69) 3222-4886 ou preencher o formulário em nosso site. Respondemos rapidamente!',
    },
    {
      question: 'Onde fica a clínica?',
      answer:
        'Estamos localizados em Porto Velho, Rondônia. Nosso endereço é Porto Velho, RO - com fácil acesso e estacionamento próprio. Clique aqui para ver a localização no Google Maps: https://maps.google.com/?q=Centro+Médico+Odontológico+Integrado+Porto+Velho+RO',
    },
    {
      question: 'Quais convênios são aceitos?',
      answer:
        'Aceitamos CASSI, FUSEX e Zequinha Araújo. Outros convênios e formas de atendimento podem ser consultados diretamente conosco.',
    },
    {
      question: 'Quais tratamentos odontológicos vocês realizam?',
      answer:
        'Realizamos implantes dentários, próteses, endodontia (tratamento de canal), ortodontia, dentística, limpeza e clínica geral. Todos com tecnologia moderna.',
    },
    {
      question: 'O dermatologista realiza pequenas cirurgias?',
      answer:
        'Sim! Realizamos dermatologia clínica, dermatologia cirúrgica e pequenos procedimentos cirúrgicos dermatológicos com segurança e profissionalismo.',
    },
    {
      question: 'Como funciona um implante dentário?',
      answer:
        'O implante é uma raiz artificial que substitui o dente perdido. Utilizamos técnicas modernas e equipamentos de ponta para um procedimento seguro e indolor.',
    },
    {
      question: 'Quanto tempo dura um tratamento ortodôntico?',
      answer:
        'O tempo varia conforme a complexidade do caso, geralmente entre 18 a 24 meses. Durante a primeira consulta, faremos uma avaliação completa.',
    },
    {
      question: 'Como funciona um tratamento de canal?',
      answer:
        'O canal remove a polpa inflamada do dente, eliminando a dor e preservando o dente. Com nossa tecnologia moderna, o procedimento é rápido e indolor.',
    },
    {
      question: 'É necessário agendar com antecedência?',
      answer:
        'Recomendamos agendar com antecedência, mas atendemos emergências. Entre em contato conosco para situações urgentes.',
    },
    {
      question: 'Quais documentos devo levar na consulta?',
      answer:
        'Leve documento de identidade, CPF e carteirinha de convênio (se aplicável). Se possível, trazer histórico de tratamentos anteriores também é útil.',
    },
    {
      question: 'Vocês atendem crianças?',
      answer:
        'Sim! Temos experiência em atendimento infantil com equipe preparada para deixar a criança confortável e sem medo.',
    },
    {
      question: 'Como entrar em contato?',
      answer:
        'Telefone: (69) 3222-4886 | WhatsApp: (69) 99315-7554 | Estaremos felizes em atendê-lo!',
    },
    {
      question: 'Qual é o horário de atendimento?',
      answer:
        'Estamos disponíveis em horários convenientes para pacientes que trabalham. Consulte-nos para confirmar horários especiais.',
    },
    {
      question: 'Qual o valor das consultas?',
      answer:
        'Os valores variam conforme o tipo de serviço e especialidade. Entre em contato para um orçamento personalizado.',
    },
  ]

  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Encontre respostas para suas dúvidas
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ question, answer }, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-purple-300 transition"
            >
              <button
                onClick={() =>
                  setOpenIdx(openIdx === idx ? null : idx)
                }
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-purple-50 transition"
              >
                <span className="text-left font-semibold text-gray-900">
                  {question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-purple-600 flex-shrink-0 transition ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-6 py-4 bg-purple-50 border-t border-purple-200">
                  <p className="text-gray-700 leading-relaxed">
                    {answer.includes('http') ? (
                      <>
                        {answer.split('https://')[0]}
                        <a
                          href={answer.split('https://')[1]?.split(' ')[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 font-semibold hover:text-purple-800 underline"
                        >
                          Google Maps
                        </a>
                      </>
                    ) : (
                      answer
                    )}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
