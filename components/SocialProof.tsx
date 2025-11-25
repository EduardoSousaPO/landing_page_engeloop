'use client'

import { getWhatsAppLink, GOOGLE_ADS_CONVERSION_ID } from '@/lib/constants'

export default function SocialProof() {
  const handleWhatsAppClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': GOOGLE_ADS_CONVERSION_ID,
        'event_category': 'engagement',
        'event_label': 'whatsapp_social_proof_click'
      })
    }
  }

  const clients = [
    'Savoy Indústria de Cosméticos',
    'Pepsico',
    'Votorantim',
    'Dream Park',
    'Alphaville Residencial',
    'Igreja Impactados',
    'Deville Joias',
    'Terral Construtora',
    'EneC Engenharia'
  ]

  return (
    <section className="socialProof">
      <div className="container">
        <div className="socialProofHeader">
          <h2>Nossos Clientes</h2>
          <p>Portfólio repleto de obras concluídas com sucesso. Clientes satisfeitos.</p>
        </div>
        <div className="clientsGrid">
          {clients.map((client, index) => (
            <div key={index} className="clientBadge">
              <span className="clientName">{client}</span>
            </div>
          ))}
        </div>
        <div className="socialProofCta">
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

