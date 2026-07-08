import { Check, Phone, MessageCircle } from 'lucide-react'

export default function Convenios() {
  const convenios = [
    { name: 'CASSI', icon: '🏥' },
    { name: 'FUSEX', icon: '🛡️' },
    { name: 'Zequinha Araújo', icon: '✨' },
  ]

  const whatsappUrl = 'https://wa.me/5569993157554?text=Gostaria%20de%20consultar%20sobre%20outros%20convênios'
  const phoneUrl = 'tel:+55693222-4886'

  return (
    <section id="convenios" className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Convênios Aceitos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com os principais convênios de Porto Velho para facilitar seu acesso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {convenios.map(({ name, icon }) => (
            <div
              key={name}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-purple-100 hover:border-purple-300"
            >
              <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">
                {icon}
              </div>
              <p className="text-xl font-bold text-gray-900 text-center">
                {name}
              </p>
              <div className="mt-4 pt-4 border-t border-purple-100">
                <p className="text-xs text-purple-600 text-center font-semibold">✓ Aceito</p>
              </div>
            </div>
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
              <a
                href={phoneUrl}
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition font-semibold"
              >
                <Phone className="w-5 h-5" />
                (69) 3222-4886
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg transition font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
