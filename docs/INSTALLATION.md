# 📦 Guia de Instalação - Popipokas

## Sistema de Arquivos Criados

### 🎨 Componentes Principais
```
components/
├── header.tsx                   # Navegação fixa no topo
├── hero.tsx                     # Banner principal luxuoso
├── products-carousel.tsx        # Carrossel horizontal de produtos
├── testimonials.tsx             # Seção de depoimentos de clientes
├── whatsapp-cta.tsx            # Call-to-action para WhatsApp
└── footer.tsx                   # Rodapé com links e contato
```

### 📄 Páginas e Configuração
```
app/
├── page.tsx                     # Página principal (HOME)
├── layout.tsx                   # Layout raiz com fontes Google
└── globals.css                  # Temas, tokens de design e animações
```

### 🖼️ Assets e Imagens
```
public/
├── popipokas-logo.png          # Logo da marca (circular)
├── hero-banner.jpg             # Banner principal
├── product-ninho.jpg           # Pop Ninho Avelludado
├── product-doce.jpg            # Pop Doce Tradicional
├── product-caramelo.jpg        # Pop Caramelo Gourmet
├── product-chocolate.jpg       # Pop Chocolate Belga
└── product-mel.jpg             # Pop Mel e Amendoim
```

### ⚙️ Configuração
```
config/
└── site.ts                      # Arquivo centralizado de configurações

root/
├── tailwind.config.ts           # Configuração Tailwind CSS
├── README.md                    # Documentação completa
├── QUICKSTART.md                # Guia de personalização rápida
└── INSTALLATION.md              # Este arquivo
```

---

## Dependências Instaladas Automaticamente

O projeto usa as seguintes bibliotecas (instaladas automaticamente):

- **next**: ^15.0.0 - Framework React
- **react**: ^19.0.0 - Biblioteca UI
- **tailwindcss**: ^4.0.0 - Utility CSS
- **shadcn/ui**: Componentes prontos
- **lucide-react**: Ícones
- **next/image**: Otimização de imagens

---

## 🚀 Instalação Rápida

### Pré-requisitos
- Node.js 18.17+
- pnpm, npm ou yarn

### Passos

1. **Clone o repositório**
   ```bash
   git clone <seu-repo>
   cd popipokas
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Inicie o desenvolvimento**
   ```bash
   pnpm dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

---

## 🎯 Próximas Ações Recomendadas

### 1️⃣ Personalize Imediatamente
1. Atualize o número do WhatsApp (ver QUICKSTART.md)
2. Adicione seus produtos reais
3. Atualize depoimentos com clientes reais

### 2️⃣ Configure SEO
- Edite `layout.tsx` com título e descrição
- Atualize meta tags

### 3️⃣ Customize Cores (Opcional)
- Edite `/app/globals.css` para mudar o tema
- Mantenha o design premium

### 4️⃣ Deploy
- Conecte ao GitHub
- Deploy via Vercel com um clique

---

## 📁 Estrutura Completa

```
popipokas/
│
├── 📂 app/
│   ├── 📄 layout.tsx
│   ├── 📄 page.tsx
│   └── 📄 globals.css
│
├── 📂 components/
│   ├── 📄 header.tsx
│   ├── 📄 hero.tsx
│   ├── 📄 products-carousel.tsx
│   ├── 📄 testimonials.tsx
│   ├── 📄 whatsapp-cta.tsx
│   ├── 📄 footer.tsx
│   └── 📂 ui/
│       └── [componentes shadcn]
│
├── 📂 config/
│   └── 📄 site.ts
│
├── 📂 public/
│   ├── 🖼️ popipokas-logo.png
│   ├── 🖼️ hero-banner.jpg
│   └── 🖼️ product-*.jpg
│
├── 📂 hooks/
│   └── [hooks padrão v0]
│
├── 📂 lib/
│   └── [utilitários padrão v0]
│
├── 📄 tailwind.config.ts
├── 📄 tsconfig.json
├── 📄 package.json
├── 📄 next.config.mjs
│
├── 📄 README.md
├── 📄 QUICKSTART.md
└── 📄 INSTALLATION.md
```

---

## 🎨 Paleta de Cores Usada

```css
--primary: #d9444a        /* Vermelho Coral - cor principal */
--secondary: #d4a574      /* Dourado - acentos */
--background: #ffffff     /* Branco - fundo */
--foreground: #1a1a1a     /* Preto - texto */
--muted: #f5f5f5         /* Cinza claro - backgrounds secundários */
```

---

## 🔤 Tipografia

- **Playfair Display** - Títulos (elegant serif)
- **Poppins** - Corpo (modern sans-serif)

---

## ✨ Features Implementadas

- ✅ Hero banner com imagem de fundo
- ✅ Carrossel horizontal de produtos
- ✅ Cards com preço, desconto e imagem
- ✅ Seção de depoimentos (4 clientes)
- ✅ CTA WhatsApp funcional
- ✅ Header responsivo com logo
- ✅ Footer com contato e links
- ✅ Design premium e moderno
- ✅ Totalmente responsivo (mobile-first)
- ✅ Animações suaves
- ✅ Otimizado para SEO

---

## 🔧 Stack Tecnológico

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| Next.js | 16 | Framework |
| React | 19 | UI |
| TypeScript | 5 | Type Safety |
| Tailwind CSS | 4 | Styling |
| shadcn/ui | Latest | UI Components |
| Lucide React | Latest | Icons |
| Google Fonts | Latest | Typography |

---

## 📝 Checklist de Configuração

- [ ] Instalou pnpm install
- [ ] Rodou pnpm dev com sucesso
- [ ] Atualizou número WhatsApp
- [ ] Atualizou logo da marca
- [ ] Adicionou produtos reais
- [ ] Atualizou depoimentos
- [ ] Testou no celular
- [ ] Customizou cores (opcional)
- [ ] Testou todos os links
- [ ] Ready para deploy

---

## 🆘 Suporte

### Problemas Comuns

**P: Imagens não carregam**
```bash
rm -rf .next node_modules
pnpm install
pnpm dev
```

**P: Erro de fonte**
Verifique se `layout.tsx` importa as fontes do Google Fonts

**P: WhatsApp não funciona**
Verifique o número: deve ser `55` + DDD + número (sem formatação)

**P: Build falha**
Verifique TypeScript errors: `pnpm tsc --noEmit`

---

## 📚 Documentação Adicional

- **README.md** - Documentação completa
- **QUICKSTART.md** - Personalizações rápidas
- **INSTALLATION.md** - Este arquivo

---

## 🎉 Pronto!

Seu site está pronto para usar! Siga o QUICKSTART.md para personalizações.

**Boa sorte com a Popipokas! 🍿✨**
