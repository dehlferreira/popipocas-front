import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { siteConfig, navigationLinks } from '@/config/site'

export default function Header() {
  const { number: whatsappNumber, defaultMessage: whatsappMessage } = siteConfig.contact.whatsapp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md shadow-lg border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-3 md:px-8 py-2 md:py-3 flex items-center justify-between min-h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
          <Image
            src="/popipokas-logo.png"
            alt="Logo Popipokas"
            width={1200}
            height={600}
            className="w-auto h-16 md:h-20"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-primary transition font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-4 md:px-6 py-2 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Pedir Agora</span>
          </Button>
        </a>
      </div>
    </header>
  )
}
