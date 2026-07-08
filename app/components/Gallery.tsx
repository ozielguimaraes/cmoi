import Image from 'next/image'
import { SectionHeading } from './ui/SectionHeading'
import { Container } from './ui/Container'

export default function Gallery() {
  const images = [
    {
      id: 1,
      title: 'Fachada da Clínica',
      description: 'Nossa moderna localização em Porto Velho',
      src: '/images/clinic-entrance.png',
    },
    {
      id: 2,
      title: 'Entrada Principal',
      description: 'Fácil acesso e acessibilidade garantida',
      src: '/images/clinic-interior.png',
    },
  ]

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title={<>Conheça Nosso <span className="text-purple-600">Espaço</span></>}
          subtitle="Uma clínica moderna, acolhedora e confortável para seu bem-estar"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative h-80 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
