'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export default function WhatsappCTA() {
  const { number: whatsappNumber, defaultMessage: whatsappMessage } = siteConfig.contact.whatsapp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-gradient-to-r from-primary via-primary/90 to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para Saborear?
        </h2>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Faça seu pedido agora pelo WhatsApp e receba as melhores pipocas gourmet na sua porta com qualidade garantida!
        </p>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-primary font-bold px-10 py-7 text-xl rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 inline-flex items-center gap-3"
          >
            <MessageCircle size={28} />
            <span>Fazer Pedido no WhatsApp</span>
          </Button>
        </a>

        <p className="text-white/70 mt-8 text-sm">
          Atendimento disponível de segunda a sábado, {siteConfig.hours.weekdays}
        </p>
      </div>
    </section>
  )
}
