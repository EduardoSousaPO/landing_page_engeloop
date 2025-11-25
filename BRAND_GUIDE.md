# Guia de Identidade Visual - Engeloop

## 🎨 Paleta de Cores Oficial

### Cores Principais

**Azul Escuro (Primary)**
- Hex: `#003366`
- RGB: `rgb(0, 51, 102)`
- Uso: Cor principal da marca, textos principais, botões primários, fundos escuros

**Branco (White)**
- Hex: `#FFFFFF`
- RGB: `rgb(255, 255, 255)`
- Uso: Textos sobre fundos escuros, elementos de destaque, backgrounds

### Cores Secundárias

**Azul Médio (Secondary)**
- Hex: `#0066CC`
- RGB: `rgb(0, 102, 204)`
- Uso: Destaques, links hover, elementos interativos

**Azul Claro (Light)**
- Hex: `#E6F0F8`
- RGB: `rgb(230, 240, 248)`
- Uso: Backgrounds suaves, seções alternadas

### Cores de Apoio

**WhatsApp Green**
- Hex: `#25D366`
- RGB: `rgb(37, 211, 102)`
- Uso: Exclusivamente para botões e links do WhatsApp

**Neutros**
- Cinza Escuro: `#1A1A1A` - Textos principais
- Cinza Médio: `#4A4A4A` - Textos secundários
- Cinza Claro: `#9B9B9B` - Textos terciários
- Cinza Muito Claro: `#F5F5F5` - Backgrounds

## 📐 Logo

### Versões do Logo

**Versão Escura (Dark)**
- Logo branco sobre fundo azul escuro (#003366)
- Uso: Header, backgrounds escuros

**Versão Clara (Light)**
- Logo azul escuro (#003366) sobre fundo branco
- Uso: Footer, backgrounds claros

### Elementos do Logo
- Símbolo: Loop estilizado (infinito/letra D) - presente nas imagens
- Nome: "ENGELOOP" em maiúsculas, sans-serif, peso 700
- Tagline: "ENGENHARIA E PROJETOS" em maiúsculas, menor, peso 500

### Implementação no Header
```tsx
<div className="logo">
  <h1>ENGELOOP</h1>
  <span className="logoTagline">ENGENHARIA E PROJETOS</span>
</div>
```

## 🔤 Tipografia

**Fonte Principal**
- Inter (Google Fonts)
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

**Hierarquia**
- Headings: 700 (Bold)
- Body: 400 (Regular)
- Buttons: 500 (Medium)

## 📏 Espaçamentos

- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 1.5rem (24px)
- LG: 2rem (32px)
- XL: 3rem (48px)
- 2XL: 4rem (64px)
- 3XL: 6rem (96px)

## 🎯 Aplicação

### Botões Primários
- Background: #003366
- Texto: #FFFFFF
- Hover: #002244

### Botões Secundários
- Background: Transparente
- Borda: #003366
- Texto: #003366
- Hover: Background #003366, Texto #FFFFFF

### Botões WhatsApp
- Background: #25D366
- Texto: #FFFFFF
- Hover: #20BA5A

## 📱 Responsividade

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✅ Checklist de Uso

- [ ] Sempre usar azul escuro (#003366) como cor principal
- [ ] Manter contraste adequado (WCAG AA)
- [ ] Usar branco apenas sobre fundos escuros
- [ ] WhatsApp verde apenas para elementos WhatsApp
- [ ] Logo branco em fundos escuros
- [ ] Logo azul em fundos claros

## 🎨 Imagens da Apresentação Integradas

### Hero Section
- **Imagem**: `PaginaInicial.pdf-image-000.jpg`
- **Conteúdo**: Profissional de construção segurando capacete branco
- **Uso**: Imagem principal do hero, transmitindo profissionalismo e segurança
- **Overlay**: Gradiente azul escuro para manter legibilidade do texto

### Benefits Section
- **Imagem**: `PaginaInicial.pdf-image-007.jpg`
- **Conteúdo**: Equipe profissional em reunião colaborativa
- **Uso**: Representa a equipe especializada e trabalho em equipe
- **Overlay**: Gradiente sutil para manter foco no conteúdo

### Services Section

#### Consultoria Especializada
- **Imagem**: `PaginaInicial.pdf-image-003.jpg`
- **Conteúdo**: Trabalhadores em andaime com tubos, cena de construção ativa
- **Uso**: Representa consultoria prática e experiência de campo

#### Desenvolvimento de Projetos
- **Imagem**: `PaginaInicial.pdf-image-004.jpg`
- **Conteúdo**: Plantas arquitetônicas detalhadas com medidas e especificações
- **Uso**: Representa precisão técnica e planejamento profissional

#### Execução e Construção
- **Imagem**: `PaginaInicial.pdf-image-006.jpg`
- **Conteúdo**: Casa moderna com arquitetura contemporânea
- **Uso**: Representa projetos executados com excelência

### Portfolio Section
- **Imagem 1**: `PaginaInicial.pdf-image-005.jpg` - Terraplanagem e movimentação de terra
- **Imagem 2**: `PaginaInicial.pdf-image-008.jpg` - Canteiro de obras com fundações
- **Imagem 3**: `PaginaInicial.pdf-image-010.jpg` - Equipe de construção em obra
- **Imagem 4**: `PaginaInicial.pdf-image-011.jpg` - Instalações elétricas e infraestrutura
- **Imagem 5**: `PaginaInicial.pdf-image-013.jpg` - Obra de grande porte em execução
- **Uso**: Galeria de projetos executados, com overlay hover mostrando título e descrição

### Team Section
- **Imagem Principal**: `PaginaInicial.pdf-image-009.jpg`
- **Conteúdo**: Dois profissionais em equipamento de segurança completo
- **Imagem Secundária**: `PaginaInicial.pdf-image-010.jpg`
- **Conteúdo**: Três trabalhadores em canteiro de obras
- **Uso**: Representa a equipe profissional e experiência de campo

### Contact Section
- **Imagem**: `PaginaInicial.pdf-image-012.jpg`
- **Conteúdo**: Logo ENGELOOP em destaque
- **Uso**: Elemento visual na seção de contato

### Logo Oficial
- **Imagem Principal**: `logo.jpg`
- **Uso**: Logo oficial da empresa usado em:
  - **Header**: Logo clicável que leva ao topo da página
  - **Footer**: Logo em branco sobre fundo azul escuro
  - **Contact Section**: Logo destacado na seção de contato

### Imagens Alternativas de Logo
- **Imagem**: `PaginaInicial.pdf-image-001.png` - Logo em formato PNG (triângulo impossível/Penrose)
- **Imagem**: `PaginaInicial.pdf-image-014.png` - Logo alternativo em PNG

### Estratégia de Uso
- Todas as imagens têm overlay azul escuro para manter consistência visual
- Imagens otimizadas com Next.js Image para performance
- Object-fit: cover para manter proporções
- Hover effects sutis para interatividade
- Galeria de portfolio com efeito hover mostrando informações do projeto
- Layout responsivo para todas as seções

### Ícones SVG
- **TeamIcon**: Equipe de pessoas
- **CustomIcon**: Projeto personalizado
- **TechIcon**: Tecnologia
- **ResultsIcon**: Gráfico de resultados
- Todos em azul escuro (#003366) com estilo minimalista

## 📐 Logo SVG

O logo foi recriado como SVG baseado no design das imagens:
- Loop estilizado (infinito/letra D)
- Cores: Azul escuro (#003366)
- Implementado como componente React

---

**Última atualização:** Novembro 2024

