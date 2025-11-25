# Guia de Design - Engeloop Landing Page

Este guia explica como personalizar o design baseado nas imagens do Canva fornecidas.

## 🎨 Extraindo Elementos das Imagens

### 1. Logo
- Abra as imagens no Canva ou editor de imagens
- Extraia o logo da empresa
- Salve como PNG transparente em `public/logo.png`
- O logo será exibido automaticamente no header

### 2. Cores
Analise as imagens e identifique:
- **Cor Principal**: Cor mais usada na marca
- **Cor Secundária**: Cor de destaque/accent
- **Cor de Texto**: Cor do texto principal

Depois, atualize no arquivo `app/globals.css`:

```css
:root {
    --primary-color: #SUA_COR_PRINCIPAL;
    --primary-dark: #VERSÃO_ESCURA;
    --secondary-color: #SUA_COR_SECUNDÁRIA;
    --text-dark: #COR_DO_TEXTO;
}
```

### 3. Tipografia
Identifique as fontes usadas nas imagens:
- **Fonte dos Títulos**: Geralmente mais bold/heavy
- **Fonte do Corpo**: Geralmente regular/medium

Atualize no `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=SUA_FONTE:wght@400;600;700;800&display=swap');

:root {
    --font-primary: 'SUA_FONTE', sans-serif;
    --font-heading: 'SUA_FONTE', sans-serif;
}
```

## 📝 Passos para Personalização

### Passo 1: Adicionar Logo
1. Extraia o logo das imagens
2. Salve como `public/logo.png`
3. Descomente a linha no `components/Header.tsx`:
```tsx
<img src="/logo.png" alt="Engeloop Logo" />
```

### Passo 2: Ajustar Cores
1. Abra `app/globals.css`
2. Localize `:root {`
3. Atualize as variáveis de cor baseado nas imagens

### Passo 3: Ajustar Fontes
1. Identifique as fontes nas imagens
2. Adicione o import do Google Fonts ou use fontes locais
3. Atualize `--font-primary` e `--font-heading`

### Passo 4: Elementos Visuais
As imagens são usadas como referência. Crie elementos visuais baseados nelas:
- Ícones
- Ilustrações
- Padrões de fundo
- Gradientes

## 🎯 Exemplo de Cores Comuns

Se as imagens usam:
- **Azul**: `--primary-color: #0066CC`
- **Verde**: `--secondary-color: #00A86B`
- **Laranja**: `--accent-color: #FF6B35`

## 📐 Estrutura Visual

O design atual usa:
- Espaçamentos consistentes
- Bordas arredondadas (12px)
- Sombras suaves
- Gradientes sutis
- Tipografia hierárquica

Ajuste conforme o estilo visual das imagens do Canva.

---

**Dica**: Use ferramentas como [Coolors](https://coolors.co) para extrair paleta de cores das imagens.


