import { MessageCircle, Phone } from 'lucide-react'

export default function CTAFinal() {
  const whatsappUrl = 'https://wa.me/5569993157554?text=Olá! Gostaria de agendar uma consulta.'
  const phoneUrl = 'tel:+55693222-4886'

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-purple-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Agende sua consulta hoje mesmo
        </h2>
        <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
          Nossa equipe está pronta para atender você com qualidade, atenção e profissionalismo. Não espere mais, transforme seu sorriso e sua saúde!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={phoneUrl}
            className="px-8 py-4 bg-white hover:bg-gray-100 text-purple-600 font-bold rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
          >
            <Phone className="w-6 h-6" />
            Ligar Agora
          </a>
        </div>

        <p className="text-purple-100 text-sm mt-8">
          ✓ Resposta rápida | ✓ Atendimento 24h | ✓ Localização fácil
        </p>
      </div>
    </section>
  )
}
