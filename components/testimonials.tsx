import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    role: 'Cliente desde 2023',
    content: 'As pipocas da Popipokas são simplesmente incríveis! O sabor é autêntico e a qualidade é premium. Já pedi várias vezes e recomendo para todos os meus amigos!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'João Santos',
    role: 'Cliente VIP',
    content: 'Perfeito para festas! Todos os meus convidados amaram. A entrega foi rápida e as pipocas chegaram fresquinhas. Muito satisfeito com o atendimento!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Ana Costa',
    role: 'Fã do Pop Ninho',
    content: 'O Pop Ninho Avelludado é meu favorito! Essa combinação de leite ninho com a textura crocante é simplesmente perfeita. Crio coragem para variar os sabores!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    id: '4',
    name: 'Pedro Oliveira',
    role: 'Cliente frequente',
    content: 'Qualidade premium com preço justo. O desconto que vocês ofereceram foi excelente. Pipocas crocantes, saborosas e muito mais que alguém espera!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-muted to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leia as experiências reais de quem já provou a qualidade das nossas pipocas gourmet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 border-0 bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
