# 🚀 Guia Rápido - Popipokas Landing Page

## Primeiros Passos

### 1️⃣ Clonar/Baixar o Projeto
```bash
git clone <seu-repositorio>
cd popipokas
pnpm install
```

### 2️⃣ Iniciar o Desenvolvimento
```bash
pnpm dev
```
Acesse: http://localhost:3000

---

## 📝 Personalizações Essenciais

### 🔴 URGENTE: Atualizar Número do WhatsApp

**Arquivo único:** `/config/site.ts`
```typescript
contact: {
  whatsapp: {
    number: '5585987654321',  // ← MUDE PARA SEU NÚMERO
    defaultMessage: 'Olá! Gostaria de fazer um pedido das pipocas Popipokas!',
  },
  // ...
}
```

**Formato correto:** `55` + DDD + Número (sem parênteses, sem hífens, sem espaços)
- ✅ Correto: `5585987654321`
- ❌ Incorreto: `(85) 9 8765-4321`

---

## 🎨 Personalizar Cores

Edite `/app/globals.css`:

```css
:root {
  --primary: #d9444a;        /* Cor principal (vermelho) */
  --secondary: #d4a574;      /* Cor secundária (dourado) */
  /* ... outras cores ... */
}
```

---

## 📦 Adicionar Novos Produtos

Edite `/components/products-carousel.tsx`:

```tsx
const products: Product[] = [
  // ... produtos existentes ...
  {
    id: '6',
    name: 'Pop Açúcar e Canela',
    description: 'Doce e deliciosa, perfeita para café.',
    oldPrice: 45.00,
    newPrice: 36.00,
    discount: 20,
    image: '/product-novo.jpg'
  },
]
```

### ⚠️ Importante:
- Adicione a imagem em `/public/product-novo.jpg`
- Use imagens quadradas (400x400px) para melhor resultado
- Mantenha o padrão de ID único

---

## 💬 Adicionar Depoimentos

Edite `/components/testimonials.tsx`:

```tsx
const testimonials: Testimonial[] = [
  // ... depoimentos existentes ...
  {
    id: '5',
    name: 'Carlos Mendes',
    role: 'Cliente VIP',
    content: 'Adorei! Pipocas incríveis e entrega rápida!',
    rating: 5,
    avatar: 'https://exemplo.com/foto.jpg'
  },
]
```

---

## 🖼️ Mudar Banner Principal

Edite `/components/hero.tsx`:

```tsx
<Image
  src="/seu-hero-banner.jpg"  // ← Mude AQUI
  alt="Popipokas"
  // ...
/>
```

Salve sua imagem em `/public/seu-hero-banner.jpg`

---

## 📱 Testar Responsividade

1. Abra o DevTools (F12)
2. Ative o modo mobile (Ctrl+Shift+M)
3. Teste em diferentes tamanhos

---

## 🚀 Deploy no Vercel

### Opção 1: Automático via Git
1. Faça push no GitHub
2. Vá em [vercel.com](https://vercel.com)
3. Clique "New Project"
4. Selecione seu repositório
5. Clique "Deploy"

### Opção 2: Manual
```bash
npm install -g vercel
vercel
```

---

## 📞 Informações de Contato

Edite **apenas** `/config/site.ts` – todas as informações (WhatsApp, telefone, email, endereço, redes sociais, SEO) são centralizadas e usadas automaticamente em header, footer e demais componentes.

---

## ✅ Checklist de Deploy

- [ ] Número do WhatsApp atualizado em `config/site.ts`
- [ ] Logo salva em `/public/popipokas-logo.png`
- [ ] Produtos adicionados corretamente
- [ ] Imagens otimizadas (não maiores que 1MB)
- [ ] Testado em mobile (F12)
- [ ] SEO atualizado em `layout.tsx`
- [ ] Depoimentos atualizados
- [ ] Links de redes sociais corretos

---

## 🆘 Troubleshooting

### Imagens não aparecem
```bash
# Limpe o cache e reinicie
rm -rf .next
pnpm dev
```

### Carrossel não funciona
Verifique se tem pelo menos 2 produtos na lista

### WhatsApp não abre
Verifique o formato do número (com +55 e tudo junto)

### Fontes estranhas
Limpe o cache do navegador (Ctrl+Shift+Delete)

---

## 📚 Documentação Completa

Veja `README.md` para informações técnicas detalhadas.

---

**Boa sorte com sua loja! 🍿✨**
