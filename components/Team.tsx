'use client'

import Image from 'next/image'
import { getWhatsAppLink, GOOGLE_ADS_CONVERSION_ID } from '@/lib/constants'

export default function Team() {
  const handleWhatsAppClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': GOOGLE_ADS_CONVERSION_ID,
        'event_category': 'engagement',
        'event_label': 'whatsapp_team_click'
      })
    }
  }

  return (
    <section id="equipe" className="team teamWithBackground">
      <div className="teamBackgroundImage">
        <Image
          src="/imagens_projeto/PaginaInicial.pdf-image-009.jpg"
          alt="Equipe profissional da Engeloop"
          fill
          className="teamBgImage"
          style={{ objectFit: 'cover' }}
        />
        <div className="teamBackgroundOverlay"></div>
      </div>
      <div className="container">
        <div className="teamWrapper">
          <div className="teamContent">
            <h2>Nossa Equipe</h2>
            <p className="teamSubtitle">
              Contamos com profissionais altamente qualificados e experientes, 
              comprometidos em entregar projetos de excelência.
            </p>
            <div className="teamFeatures">
              <div className="teamFeature">
                <h3>Profissionais Certificados</h3>
                <p>Equipe com certificações e treinamentos constantes</p>
              </div>
              <div className="teamFeature">
                <h3>Experiência Comprovada</h3>
                <p>Anos de experiência em projetos de diversos portes</p>
              </div>
              <div className="teamFeature">
                <h3>Trabalho em Equipe</h3>
                <p>Colaboração e sinergia para resultados excepcionais</p>
              </div>
            </div>
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
          <div className="teamImages">
            <div className="teamImageMain">
              <Image
                src="/imagens_projeto/PaginaInicial.pdf-image-009.jpg"
                alt="Equipe profissional da Engeloop"
                width={600}
                height={400}
                className="teamImage"
              />
            </div>
            <div className="teamImageSecondary">
              <Image
                src="/imagens_projeto/PaginaInicial.pdf-image-010.jpg"
                alt="Equipe de construção em campo"
                width={400}
                height={300}
                className="teamImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

