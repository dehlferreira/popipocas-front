// Configurações centralizadas do site Popipokas

export const siteConfig = {
  // Informações da marca
  brand: {
    name: 'Popipokas',
    tagline: 'Pipocas Gourmet Premium',
    description: 'As melhores pipocas gourmet com sabores únicos e deliciosos',
  },

  // Contato
  contact: {
    whatsapp: {
      number: '5585987654321', // Substitua pelo seu número (sem formatação)
      defaultMessage: 'Olá! Gostaria de fazer um pedido das pipocas Popipokas!',
    },
    email: 'contato@popipokas.com',
    phone: '(85) 98765-4321',
    address: 'Santo André, SP',
  },

  // Horário de atendimento
  hours: {
    weekdays: '9h às 20h',
    weekends: 'Consulte via WhatsApp',
  },

  // Redes sociais
  social: {
    instagram: 'https://instagram.com/popipokas',
    facebook: 'https://facebook.com/popipokas',
  },

  // SEO
  seo: {
    title: 'Popipokas - Pipocas Gourmet Premium',
    description: 'Descubra as melhores pipocas gourmet com sabores únicos e deliciosos. Popipokas - Pipocas de Qualidade',
    keywords: ['pipocas', 'gourmet', 'premium', 'doces', 'pipocas salgadas'],
  },

  // Cores
  colors: {
    primary: '#d9444a',      // Vermelho Coral
    secondary: '#d4a574',    // Dourado
    dark: '#1a1a1a',         // Quase preto
    light: '#ffffff',        // Branco
    muted: '#666666',        // Cinza médio
  },
}

export const navigationLinks = [
  { label: 'Sabores', href: '#sabores' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
  { label: 'Sobre', href: '#sobre' },
]
