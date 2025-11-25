# Setup Inicial - Engeloop Landing Page

Siga estes passos para configurar e fazer o deploy da landing page.

## 📦 Passo 1: Instalar Dependências

```bash
npm install
```

## 📁 Passo 2: Mover Imagens para a Pasta Public

As imagens precisam estar na pasta `public/` para funcionar no Next.js.

**Windows (PowerShell):**
```powershell
Move-Item "Home.jpg" "public/"
Move-Item "About Us.jpg" "public/"
Move-Item "Services.jpg" "public/"
Move-Item "Services (2).jpg" "public/"
Move-Item "Services (3).jpg" "public/"
Move-Item "Contact.jpg" "public/"
Move-Item "Feedback.jpg" "public/"
```

## ⚙️ Passo 3: Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=contato@engeloop.com.br
NEXT_PUBLIC_CONTACT_PHONE=(11) 9999-9999
NEXT_PUBLIC_CONTACT_ADDRESS=São Paulo, SP - Brasil

# Google Ads & Analytics
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX/YYYYYYYYYYYY
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

**⚠️ IMPORTANTE**: Substitua pelos seus valores reais!

## 🚀 Passo 4: Testar Localmente

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## ✅ Passo 5: Verificar

- [ ] Imagens aparecem corretamente
- [ ] Botões WhatsApp abrem corretamente
- [ ] Navegação funciona
- [ ] Design responsivo funciona

## 📤 Passo 6: Deploy

Siga as instruções no arquivo `DEPLOY.md` para fazer o deploy na Vercel.

---

**Dúvidas?** Consulte o `README.md` para mais informações.


