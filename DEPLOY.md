# Guia de Deploy - Engeloop Landing Page

Este guia explica como fazer o deploy da landing page na Vercel.

## 🚀 Opção 1: Deploy via GitHub (Recomendado)

### Passo 1: Preparar o Repositório

1. Inicialize o Git:
```bash
git init
git add .
git commit -m "Initial commit - Engeloop Landing Page"
```

2. Crie um repositório no GitHub e faça push:
```bash
git remote add origin https://github.com/seu-usuario/engeloop.git
git branch -M main
git push -u origin main
```

### Passo 2: Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório `engeloop`
5. Configure as variáveis de ambiente (veja abaixo)
6. Clique em **"Deploy"**

### Passo 3: Configurar Variáveis de Ambiente

Na Vercel, vá em **Settings** > **Environment Variables** e adicione:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_CONTACT_EMAIL=contato@engeloop.com.br
NEXT_PUBLIC_CONTACT_PHONE=(11) 9999-9999
NEXT_PUBLIC_CONTACT_ADDRESS=São Paulo, SP - Brasil
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXX/YYYYYYYYYYYY
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## 🚀 Opção 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## 📁 Preparar Imagens

Certifique-se de que as imagens estão na pasta `public/` antes do deploy.

## ✅ Verificação Pós-Deploy

Após o deploy, verifique:
1. URL de produção funcionando
2. Botões WhatsApp funcionando
3. Responsividade
4. Performance

---

**Pronto para converter visitantes em clientes!** 🎯


