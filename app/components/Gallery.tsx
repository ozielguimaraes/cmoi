'use client'

import Image from 'next/image'

export default function Gallery() {
  const images = [
    {
      id: 1,
      title: 'Recepção Acolhedora',
      description: 'Um ambiente limpo e confortável para recebê-lo',
      src: 'https://images.unsplash.com/photo-1638259934929-1eeff3c79429?w=500&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Consultório Odontológico',
      description: 'Tecnologia de ponta para seu conforto',
      src: 'https://images.unsplash.com/photo-1631217314830-4875184da83c?w=500&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Consultório Dermatológico',
      description: 'Espaço especializado e moderno',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Equipamentos Modernos',
      description: 'Máquinas de última geração',
      src: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=500&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Equipe Qualificada',
      description: 'Profissionais experientes e dedicados',
      src: 'https://images.unsplash.com/photo-1631217314830-4875184da83c?w=500&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Ambiente Relaxante',
      description: 'Conforto e bem-estar em cada detalhe',
      src: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=500&h=400&fit=crop',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Espaço</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma clínica moderna, acolhedora e confortável para seu bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative h-72 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                quality={85}
              />
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Badge de destaque */}
              <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                ⭐ Premium
              </div>

              {/* Conteúdo */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
