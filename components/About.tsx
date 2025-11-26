'use client'

import { getWhatsAppLink, GOOGLE_ADS_CONVERSION_ID } from '@/lib/constants'

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleWhatsAppClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': GOOGLE_ADS_CONVERSION_ID,
        'event_category': 'engagement',
        'event_label': 'whatsapp_about_click'
      })
    }
  }

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="sectionHeader">
          <h2>Sobre a Engeloop</h2>
          <p className="sectionSubtitle">Especialistas em terraplanagem e locação de máquinas há mais de 10 anos</p>
        </div>
        <div className="aboutContent">
          <div className="aboutText">
            <h3>Nossa Especialização</h3>
            <p>
              A Engeloop é uma empresa goiana do ramo da construção civil há mais de 10 anos no mercado. 
              Nos últimos anos, nos especializamos em <strong>terraplanagem e locação de máquinas</strong>, 
              sendo este nosso foco principal (90% dos nossos serviços). Oferecemos soluções completas 
              em terraplanagem, escavação e locação de equipamentos pesados para atender às necessidades 
              de nossos clientes em qualquer lugar do país.
            </p>
            <h3>Por Que Escolher a Engeloop?</h3>
            <ul className="featuresList">
              <li>✓ Especialistas em terraplanagem e locação de máquinas</li>
              <li>✓ Frota moderna de equipamentos pesados</li>
              <li>✓ Equipe qualificada e experiente</li>
              <li>✓ Atendimento rápido e eficiente</li>
              <li>✓ Mais de 10 anos de experiência no mercado</li>
            </ul>
            <a
              href={getWhatsAppLink('sobre')}
              target="_blank"
              rel="noopener noreferrer"
              className="btnPrimary"
              onClick={handleWhatsAppClick}
            >
              Fale com Nossa Equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

