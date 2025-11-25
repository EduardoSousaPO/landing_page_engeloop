'use client'

import Image from 'next/image'
import { getWhatsAppLink, GOOGLE_ADS_CONVERSION_ID } from '@/lib/constants'

export default function Services() {
  const handleWhatsAppClick = (service: string) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': GOOGLE_ADS_CONVERSION_ID,
        'event_category': 'engagement',
        'event_label': `whatsapp_service_${service}`
      })
    }
  }

  const services = [
    {
      title: 'Projetos',
      description: '',
      messageKey: 'desenvolvimentoProjetos' as const,
      image: '/imagens_projeto/PaginaInicial.pdf-image-004.jpg',
      alt: 'Plantas arquitetônicas e projetos de engenharia',
      items: ['Elétrico', 'Hidráulico', 'Sanitário', 'Incêndio', 'Arquitetônico', 'Estrutural', 'Interiores']
    },
    {
      title: 'Demolição e Escavação',
      description: '',
      messageKey: 'consultoriaEspecializada' as const,
      image: '/imagens_projeto/PaginaInicial.pdf-image-005.jpg',
      alt: 'Serviços de terraplanagem e escavação',
      items: ['Escavação', 'Carga', 'Transporte de material', 'Compactação', 'Demolição em geral']
    },
    {
      title: 'Construção e Reforma',
      description: '',
      messageKey: 'suporteManutencao' as const,
      image: '/imagens_projeto/PaginaInicial.pdf-image-006.jpg',
      alt: 'Obras residenciais, comerciais e industriais',
      items: ['Residencial', 'Comercial', 'Industrial']
    }
  ]

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="sectionHeader">
          <h2>Nossos Serviços</h2>
        </div>
        <div className="servicesGrid">
          {services.map((service, index) => (
            <div key={index} className="serviceCard">
              <div className="serviceImageWrapper">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={250}
                  className="serviceImage"
                />
                <div className="serviceImageOverlay"></div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.items && (
                <ul className="serviceItems">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              <a
                href={getWhatsAppLink(service.messageKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="btnService"
                onClick={() => handleWhatsAppClick(service.title.toLowerCase().replace(/\s+/g, '_'))}
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

