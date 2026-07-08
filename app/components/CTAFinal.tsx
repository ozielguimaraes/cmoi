import { MessageCircle, Phone } from 'lucide-react'
import { Button } from './ui/Button'
import { Container } from './ui/Container'

export default function CTAFinal() {
  const whatsappUrl = 'https://wa.me/5569993157554?text=Olá! Gostaria de agendar uma consulta.'
  const phoneUrl = 'tel:+55693222-4886'

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-purple-600 to-purple-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -ml-48 -mb-48" />

      <Container>
        <div className="relative text-center z-10">
          <div className="mb-4">
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold backdrop-blur">
              ⏰ Agora é a hora!
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme seu sorriso e sua saúde hoje
          </h2>

          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe de profissionais experientes está pronta para oferecer atendimento humanizado e resultados excepcionais. Não deixe para depois — sua saúde é prioridade!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="w-6 h-6" />
              Agendar pelo WhatsApp
            </Button>
            <Button
              href={phoneUrl}
              variant="ghost"
              size="lg"
              className="bg-white hover:bg-gray-50 text-purple-700 font-bold"
            >
              <Phone className="w-6 h-6" />
              Ligar Agora
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8 border-t border-white/20">
            <div className="text-white">
              <p className="text-2xl font-bold">+500</p>
              <p className="text-sm text-purple-200">Pacientes satisfeitos</p>
            </div>
            <div className="text-white">
              <p className="text-2xl font-bold">⭐ 4.9/5</p>
              <p className="text-sm text-purple-200">Avaliação média</p>
            </div>
            <div className="text-white">
              <p className="text-2xl font-bold">24h/7</p>
              <p className="text-sm text-purple-200">Suporte disponível</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
