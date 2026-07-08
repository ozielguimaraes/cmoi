import { Phone, MessageCircle, Building2 } from 'lucide-react'
import { Card } from './ui/Card'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
import { Container } from './ui/Container'

export default function Convenios() {
  const convenios = [
    { name: 'CASSI', icon: Building2 },
    { name: 'FUSEX', icon: Building2 },
    { name: 'Zequinha Araújo', icon: Building2 },
  ]

  const whatsappUrl = 'https://wa.me/5569993157554?text=Gostaria%20de%20consultar%20sobre%20outros%20convênios'
  const phoneUrl = 'tel:+55693222-4886'

  return (
    <section id="convenios" className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Convênios Aceitos"
          subtitle="Trabalhamos com os principais convênios de Porto Velho para facilitar seu acesso"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {convenios.map(({ name, icon: Icon }) => (
            <Card key={name} className="p-8 text-center flex flex-col items-center gap-4">
              <Icon className="w-12 h-12 text-purple-600" />
              <p className="text-xl font-bold text-gray-900">
                {name}
              </p>
              <div className="text-sm text-purple-600 font-semibold">✓ Aceito</div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 md:p-10 text-white shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                E Outros Convênios?
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Aceitamos também outras formas de atendimento. Consulte-nos sobre outros convênios disponíveis na sua região.
              </p>
            </div>

            {/* Contact Options */}
            <div className="flex flex-col gap-3">
              <Button
                href={phoneUrl}
                variant="ghost"
                size="md"
                className="bg-white/20 hover:bg-white/30 text-white justify-start"
              >
                <Phone className="w-5 h-5" />
                (69) 3222-4886
              </Button>
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="md"
                className="justify-start"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
