'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface Product {
  id: string
  name: string
  description: string
  oldPrice: number
  newPrice: number
  discount: number
  image: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Pop Ninho Avelludado',
    description: 'Explosão de sabor com Leite Ninho. Super crocante e macia por dentro.',
    oldPrice: 45.00,
    newPrice: 35.00,
    discount: 22,
    image: '/product-ninho.jpg'
  },
  {
    id: '2',
    name: 'Pop Doce Tradicional',
    description: 'A clássica pipoca doce, crocante e irresistível para toda a família.',
    oldPrice: 40.00,
    newPrice: 32.00,
    discount: 20,
    image: '/product-doce.jpg'
  },
  {
    id: '3',
    name: 'Pop Caramelo Gourmet',
    description: 'Caramelo Premium com um toque especial que derreterá na sua boca.',
    oldPrice: 50.00,
    newPrice: 38.00,
    discount: 24,
    image: '/product-caramelo.jpg'
  },
  {
    id: '4',
    name: 'Pop Chocolate Belga',
    description: 'Chocolate belga premium que envolve cada pipoca com perfeição.',
    oldPrice: 48.00,
    newPrice: 36.00,
    discount: 25,
    image: '/product-chocolate.jpg'
  },
  {
    id: '5',
    name: 'Pop Mel e Amendoim',
    description: 'Combinação irresistível de mel puro com amendoim crocante.',
    oldPrice: 42.00,
    newPrice: 33.00,
    discount: 21,
    image: '/product-mel.jpg'
  },
]

export default function ProductsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = 400
      const newScroll = direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount
      
      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Sabores Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra uma variedade exclusiva de pipocas gourmet, cada sabor é uma experiência única
          </p>
        </div>

        <div className="relative group">
          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-80 md:w-96 snap-center">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-0 bg-card">
                  {/* Product Image Container */}
                  <div className="relative h-64 w-full bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden group/image">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Discount Badge */}
                    {product.discount > 0 && (
                      <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold shadow-lg">
                        <div className="text-center">
                          <div className="text-2xl">{product.discount}%</div>
                          <div className="text-xs">OFF</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Price Section */}
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-3xl font-bold text-primary">
                        R$ {product.newPrice.toFixed(2)}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        R$ {product.oldPrice.toFixed(2)}
                      </span>
                    </div>

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                    >
                      Adicionar ao Carrinho
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 z-10 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:-translate-x-0 z-10 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
