'use client'

import Image from 'next/image'
import { getWhatsAppLink, GOOGLE_ADS_CONVERSION_ID } from '@/lib/constants'

export default function Portfolio() {
  const handleWhatsAppClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': GOOGLE_ADS_CONVERSION_ID,
        'event_category': 'engagement',
        'event_label': 'whatsapp_portfolio_click'
      })
    }
  }

  const projects = [
    {
      image: '/imagens_projeto/PaginaInicial.pdf-image-005.jpg',
      alt: 'Escavação com retroescavadeira'
    },
    {
      image: '/imagens_projeto/PaginaInicial.pdf-image-008.jpg',
      alt: 'Obras de fundação e terraplanagem'
    },
    {
      image: '/imagens_projeto/PaginaInicial.pdf-image-010.jpg',
      alt: 'Equipe de trabalhadores'
    },
    {
      image: '/imagens_projeto/PaginaInicial.pdf-image-011.jpg',
      alt: 'Obras em área urbana'
    },
    {
      image: '/imagens_projeto/PaginaInicial.pdf-image-013.jpg',
      alt: 'Construções residenciais em execução'
    },
    {
      image: '/imagens_projeto/PaginaInicial.pdf-image-009.jpg',
      alt: 'Funcionários uniformizados da Engeloop'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="sectionHeader">
          <h2>Nossos Projetos</h2>
          <p className="sectionSubtitle">
            Portfólio repleto de obras concluídas com sucesso
          </p>
        </div>
        <div className="portfolioGrid">
          {projects.map((project, index) => (
            <div key={index} className="portfolioCard">
              <div className="portfolioImageWrapper">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="portfolioImage"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="portfolioCta">
          <a
            href={getWhatsAppLink('orcamento')}
            target="_blank"
            rel="noopener noreferrer"
            className="btnPrimary btnLarge"
            onClick={handleWhatsAppClick}
          >
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

