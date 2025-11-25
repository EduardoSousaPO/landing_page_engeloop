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
          <p className="sectionSubtitle">Conheça nossa história e compromisso com a excelência</p>
        </div>
        <div className="aboutContent">
          <div className="aboutText">
            <h3>Nossa Missão</h3>
            <p>
              Na Engeloop, acreditamos que cada projeto é único e merece atenção especial. 
              Com anos de experiência no mercado, oferecemos soluções personalizadas que 
              atendem às necessidades específicas de cada cliente.
            </p>
            <h3>Por Que Escolher a Engeloop?</h3>
            <ul className="featuresList">
              <li>✓ Equipe especializada e certificada</li>
              <li>✓ Tecnologia de ponta</li>
              <li>✓ Atendimento personalizado</li>
              <li>✓ Resultados comprovados</li>
              <li>✓ Suporte contínuo</li>
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

