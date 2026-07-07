'use client'

import Image from 'next/image'

export default function Gallery() {
  const images = [
    {
      id: 1,
      title: 'Recepção',
      src: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      title: 'Consultório Odontológico',
      src: 'https://images.unsplash.com/photo-1631217314830-4875184da83c?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      title: 'Consultório Dermatológico',
      src: 'https://images.unsplash.com/photo-1579154204601-01d3cc290e3d?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      title: 'Equipamentos',
      src: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=400&h=400&fit=crop',
    },
    {
      id: 5,
      title: 'Nossa Equipe',
      src: 'https://images.unsplash.com/photo-1631217314830-4875184da83c?w=400&h=400&fit=crop',
    },
    {
      id: 6,
      title: 'Ambiente',
      src: 'https://images.unsplash.com/photo-1579154204601-01d3cc290e3d?w=400&h=400&fit=crop',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça Nosso Espaço
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma clínica moderna, acolhedora e confortável para seu bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative h-64 md:h-72 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="text-white font-semibold p-4 w-full">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
