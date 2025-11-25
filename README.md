# Landing Page Engeloop - Next.js

Landing page otimizada para conversão e campanhas do Google Ads, desenvolvida com Next.js e pronta para deploy na Vercel.

## 🚀 Características

- **Next.js 14** com App Router
- **Design Moderno e Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Otimizada para Conversão**: CTAs estratégicos e botões WhatsApp
- **Pronta para Google Ads**: Integração com Google Tag Manager e rastreamento de conversões
- **Performance**: Otimização automática de imagens e carregamento rápido
- **SEO Friendly**: Meta tags e estrutura semântica otimizadas
- **Sem Backend**: Apenas links diretos para WhatsApp

## 📁 Estrutura de Arquivos

```
engeloop/
├── app/
│   ├── layout.tsx          # Layout principal com metadata
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Hero.tsx            # Seção hero
│   ├── About.tsx           # Seção sobre
│   ├── Services.tsx        # Seção serviços
│   ├── Testimonials.tsx    # Depoimentos
│   ├── Contact.tsx         # Contato com WhatsApp
│   ├── Footer.tsx          # Rodapé
│   └── FloatingCTA.tsx     # Botão flutuante WhatsApp
├── lib/
│   └── constants.ts        # Constantes e configurações
├── public/                 # Imagens estáticas
├── package.json
├── next.config.js
├── tsconfig.json
└── vercel.json
```

## ⚙️ Configuração

### 1. Instalar Dependências

```bash
npm install
```

### 2. Mover Imagens para Public

Mova as imagens para a pasta `public/`:

```powershell
Move-Item "Home.jpg" "public/"
Move-Item "About Us.jpg" "public/"
Move-Item "Services.jpg" "public/"
Move-Item "Services (2).jpg" "public/"
Move-Item "Services (3).jpg" "public/"
Move-Item "Contact.jpg" "public/"
Move-Item "Feedback.jpg" "public/"
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_CONTACT_EMAIL=contato@engeloop.com.br
NEXT_PUBLIC_CONTACT_PHONE=(11) 9999-9999
NEXT_PUBLIC_CONTACT_ADDRESS=São Paulo, SP - Brasil
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX/YYYYYYYYYYYY
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 4. Testar Localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 🚀 Deploy na Vercel

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático!

Veja `DEPLOY.md` para instruções detalhadas.

## 📊 Botões WhatsApp

A landing page possui múltiplos botões WhatsApp estratégicos em todas as seções.

## ✅ Checklist

- [ ] Imagens movidas para `public/`
- [ ] Variáveis de ambiente configuradas
- [ ] Google Tag Manager configurado
- [ ] Google Ads configurado
- [ ] Teste local realizado
- [ ] Deploy na Vercel

---

**Desenvolvido com Next.js e foco em conversão** 🎯


