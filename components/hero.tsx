import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background image with overlay */}
      <Image
        src="/hero-banner.jpg"
        alt="Popipokas - Pipocas Gourmet"
        fill
        className="object-cover"
        quality={100}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center pt-16 md:pt-0">
        <div className="mb-6 md:mb-8 animate-fade-in">
          <Image
            src="/popipokas-logo.png"
            alt="Logo Popipokas"
            width={150}
            height={150}
            className="mx-auto drop-shadow-lg w-32 h-32 md:w-48 md:h-48"
          />
        </div>
        
        <h1 className="font-playfair text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
          Popipokas
        </h1>
        
        <p className="text-base md:text-2xl text-amber-200 mb-8 max-w-2xl drop-shadow-md font-light italic px-2">
          A explosão de sabor que você sempre desejou
        </p>
        
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Conheça os Sabores
        </Button>
      </div>
    </section>
  )
}
