# 🍿 Popipokas - Landing Page Premium

Uma landing page moderna e responsiva para a marca **Popipokas**, especializada em pipocas gourmet premium. Desenvolvida com Next.js 16, React 19 e Tailwind CSS.

## 🎨 Features

- ✨ **Hero Banner** - Seção inicial impactante com imagem de fundo e logo da marca
- 🎠 **Carrossel de Produtos** - Exibição interativa dos sabores com preços e descontos
- ⭐ **Depoimentos** - Seção de avaliações de clientes satisfeitos
- 💬 **CTA WhatsApp** - Botão inteligente para direcionar pedidos via WhatsApp
- 📱 **Responsivo** - Design mobile-first, otimizado para todos os dispositivos
- 🎭 **Tema Customizado** - Paleta de cores premium (vermelho coral, dourado, preto)

## 🎨 Design System

### Cores
- **Primária**: #d9444a (Vermelho Coral)
- **Secundária**: #d4a574 (Dourado)
- **Fundo**: #ffffff (Branco)
- **Texto**: #1a1a1a (Quase preto)

### Tipografia
- **Títulos**: Playfair Display (serif elegante)
- **Corpo**: Poppins (sans-serif moderna)

## 🚀 Como Usar

### 1. **Instalação**
```bash
# Clone ou baixe o projeto
cd popipokas

# Instale as dependências
pnpm install
```

### 2. **Desenvolvimento**
```bash
# Inicie o servidor de desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar.

### 3. **Customização**

#### Atualizar Número do WhatsApp
Edite o arquivo `/components/whatsapp-cta.tsx` e `/components/header.tsx`:
```tsx
const whatsappNumber = '5585987654321' // Substitua pelo seu número
```

#### Adicionar/Editar Produtos
Edite `/components/products-carousel.tsx` na seção `products`:
```tsx
{
  id: '6',
  name: 'Seu Novo Sabor',
  description: 'Descrição do produto',
  oldPrice: 50.00,
  newPrice: 40.00,
  discount: 20,
  image: '/caminho-da-imagem.jpg'
}
```

#### Adicionar/Editar Depoimentos
Edite `/components/testimonials.tsx` na seção `testimonials`:
```tsx
{
  id: '5',
  name: 'Nome do Cliente',
  role: 'Descrição',
  content: 'Seu depoimento aqui...',
  rating: 5,
  avatar: '/url-da-foto.jpg'
}
```

## 📁 Estrutura do Projeto

```
popipokas/
├── app/
│   ├── layout.tsx           # Layout raiz com fontes
│   ├── globals.css          # Estilos globais e tokens de design
│   └── page.tsx             # Página principal
├── components/
│   ├── header.tsx           # Navegação superior fixa
│   ├── hero.tsx             # Banner principal
│   ├── products-carousel.tsx # Carrossel de produtos
│   ├── testimonials.tsx     # Seção de depoimentos
│   ├── whatsapp-cta.tsx     # Call-to-action WhatsApp
│   ├── footer.tsx           # Rodapé
│   └── ui/                  # Componentes shadcn/ui
├── public/
│   ├── hero-banner.jpg      # Imagem do hero
│   ├── popipokas-logo.png   # Logo da marca
│   └── product-*.jpg        # Imagens dos produtos
├── tailwind.config.ts       # Configuração do Tailwind
└── package.json             # Dependências
```

## 🔧 Tecnologias

- **Framework**: Next.js 16
- **React**: 19.2+
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Fonts**: Google Fonts (Playfair Display, Poppins)
- **Icons**: Lucide React
- **Animações**: CSS nativa + Tailwind CSS

## 📱 Responsividade

- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub
2. Clique em "Deploy"
3. Configure as variáveis de ambiente se necessário

### Outros Hosts
```bash
# Build para produção
pnpm build

# Inicie o servidor de produção
pnpm start
```

## 🎯 Próximos Passos

- [ ] Integrar sistema de carrinho de compras
- [ ] Adicionar integração com gateway de pagamento
- [ ] Implementar formulário de contato
- [ ] Adicionar blog com receitas
- [ ] Expandir para e-commerce completo

## 📞 Contato & Suporte

Para dúvidas sobre este projeto ou a marca Popipokas, entre em contato via WhatsApp!

---

**Desenvolvido com ❤️ por v0**
