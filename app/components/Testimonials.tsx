'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      rating: 5,
      text: 'Excelente atendimento! Os profissionais são muito atenciosos. Meu sorriso ficou perfeito com o implante. Recomendo muito!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'João Santos',
      rating: 5,
      text: 'Primeira vez que não sinto medo de ir ao dentista. Dr. está muito bem preparado. Ambiente limpo e moderno. Voltarei com certeza!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      name: 'Ana Costa',
      rating: 5,
      text: 'Procedimento dermatológico realizado com segurança e profissionalismo. Resultado excelente! Senti-me muito bem cuidada.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
      name: 'Carlos Oliveira',
      rating: 5,
      text: 'A melhor clínica de Porto Velho! Todos foram muito prestativos. Meu tratamento de canal foi indolor. Muito satisfeito!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
  ]

  const [currentIdx, setCurrentIdx] = useState(0)

  const next = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIdx((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Depoimentos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Pacientes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos pacientes satisfeitos dizem sobre a qualidade do nosso atendimento
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-8 md:p-12 mb-8 shadow-lg hover:shadow-xl transition">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
                  <Image
                    src={testimonials[currentIdx].image}
                    alt={testimonials[currentIdx].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-2 mb-4">
                  {[...Array(testimonials[currentIdx].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg md:text-xl text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonials[currentIdx].text}"
                </p>

                {/* Name */}
                <p className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIdx].name}
                </p>
                <p className="text-sm text-purple-600 font-semibold">✓ Paciente Verificado</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={prev}
              className="p-3 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white rounded-lg transition duration-300 transform hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`transition-all duration-300 ${
                    idx === currentIdx ? 'bg-purple-600 w-8 h-3' : 'bg-gray-300 w-3 h-3'
                  } rounded-full`}
                  aria-label={`Testemunho ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 bg-purple-100 hover:bg-purple-600 text-purple-600 hover:text-white rounded-lg transition duration-300 transform hover:scale-110"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
