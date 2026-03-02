import Header from '@/components/header'
import Hero from '@/components/hero'
import ProductsCarousel from '@/components/products-carousel'
import Testimonials from '@/components/testimonials'
import WhatsappCTA from '@/components/whatsapp-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full overflow-hidden">
        <Hero />
        <section id="sabores">
          <ProductsCarousel />
        </section>
        <section id="depoimentos">
          <Testimonials />
        </section>
        <WhatsappCTA />
        <Footer />
      </main>
    </>
  )
}
