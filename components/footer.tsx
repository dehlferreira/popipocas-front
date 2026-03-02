import Image from 'next/image'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/popipokas-logo.png"
                alt="Logo Popipokas"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-playfair text-xl font-bold">Popipokas</h3>
                <p className="text-sm text-white/70">Gourmet Premium</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              As melhores pipocas gourmet para você e sua família. Qualidade premium em cada pipoca.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#produtos" className="hover:text-white transition">Sabores</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-white transition">Contato</a></li>
              <li><a href="#sobre" className="hover:text-white transition">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>(85) 98765-4321</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>contato@popipokas.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span>Santo André, SP</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/popipokas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary/40 p-3 rounded-lg transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/popipokas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary/40 p-3 rounded-lg transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2024 Popipokas. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
