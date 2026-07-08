import Link from 'next/link'
import { Phone, MessageCircle, Heart } from 'lucide-react'
import { Container } from './ui/Container'

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsappUrl = 'https://wa.me/5569993157554'
  const phoneUrl = 'tel:+55693222-4886'
  const instagramUrl = 'https://www.instagram.com/clinicacmoi/'

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CMOI</h3>
            <p className="text-sm text-gray-400 mb-4">
              Centro Médico Odontológico Integrado. Odontologia e Dermatologia Premium em Porto Velho.
            </p>
            <div className="flex gap-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-600 rounded hover:bg-purple-700 transition"
                title="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="white" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" fill="none" stroke="white" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="0.75" fill="white"/>
                </svg>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-600 rounded hover:bg-green-700 transition"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href={phoneUrl}
                className="p-2 bg-purple-600 rounded hover:bg-purple-700 transition"
                title="Telefone"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Especialidades */}
          <div>
            <h4 className="font-semibold text-white mb-4">Especialidades</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#specialties" className="hover:text-white transition">
                  Implantes
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition">
                  Próteses
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition">
                  Endodontia
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition">
                  Dermatologia
                </a>
              </li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#differentials" className="hover:text-white transition">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contato
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={phoneUrl}
                  className="hover:text-white transition font-semibold"
                >
                  (69) 3222-4886
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition font-semibold"
                >
                  (69) 99315-7554
                </a>
              </li>
              <li>
                <p className="text-gray-500 text-xs">Av. José Vieira Caúla, 3842<br />Nova Porto Velho, RO 76820-148</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {year} Centro Médico Odontológico Integrado. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                LGPD
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
            Feito com
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            para sua saúde
          </p>
        </div>
      </Container>
    </footer>
  )
}
