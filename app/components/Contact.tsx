import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { Card } from './ui/Card'
import { SectionHeading } from './ui/SectionHeading'
import { Container } from './ui/Container'

export default function Contact() {
  const phoneUrl = 'tel:+55693222-4886'
  const whatsappUrl = 'https://wa.me/5569993157554'
  const mapsUrl = 'https://maps.google.com/?q=Av.+José+Vieira+Caúla,+3842,+Nova+Porto+Velho,+Porto+Velho,+RO,+76820-148'

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Entre em Contato"
          subtitle="Estamos aqui para atendê-lo"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <Card className="p-8 text-center group">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition">
              <Phone className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Telefone</h3>
            <a href={phoneUrl} className="text-purple-600 font-semibold hover:text-purple-800">
              (69) 3222-4886
            </a>
            <p className="text-sm text-gray-600 mt-2">Segunda a sexta</p>
          </Card>

          {/* WhatsApp */}
          <Card className="p-8 text-center group">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">WhatsApp</h3>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:text-green-800">
              (69) 99315-7554
            </a>
            <p className="text-sm text-gray-600 mt-2">Respostas rápidas</p>
          </Card>

          {/* Location */}
          <Card className="p-8 text-center group">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Localização</h3>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-semibold text-sm hover:text-purple-800 block mb-2">
              Av. José Vieira Caúla, 3842
            </a>
            <p className="text-sm text-gray-600">Nova Porto Velho - RO</p>
            <p className="text-xs text-gray-500">CEP: 76820-148</p>
          </Card>
        </div>

        {/* Map Section */}
        <Card className="overflow-hidden mb-8">
          <div className="h-80 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7847932506307!2d-63.90378!3d-8.7619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s0x0!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Card>

        {/* Hours */}
        <Card className="p-8">
          <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-600" />
            Horário de Atendimento
          </h3>
          <p className="text-gray-700">
            Segunda a sexta: 8:00 - 18:00<br />
            Sábado: 8:00 - 13:00<br />
            Domingos: Fechado
          </p>
          <p className="text-sm text-gray-600 mt-4">
            *Horários especiais podem ser agendados conforme necessidade
          </p>
        </Card>
      </Container>
    </section>
  )
}
