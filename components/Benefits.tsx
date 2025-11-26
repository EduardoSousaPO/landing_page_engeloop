'use client'

import Image from 'next/image'
import { getWhatsAppLink, GOOGLE_ADS_CONVERSION_ID } from '@/lib/constants'
import { TeamIcon, CustomIcon, TechIcon, ResultsIcon } from '@/components/Icons'

export default function Benefits() {
  const handleWhatsAppClick = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': GOOGLE_ADS_CONVERSION_ID,
        'event_category': 'engagement',
        'event_label': 'whatsapp_benefits_click'
      })
    }
  }

  const benefits = [
    {
      title: 'Especialistas em Terraplanagem',
      description: 'Mais de 10 anos focados em terraplanagem e locação de máquinas, com portfólio repleto de projetos concluídos',
      icon: 'results'
    },
    {
      title: 'Frota Moderna de Equipamentos',
      description: 'Máquinas modernas e bem conservadas: retroescavadeiras, escavadeiras, motoniveladoras e mais',
      icon: 'tech'
    },
    {
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e experientes em terraplanagem, escavação e operação de máquinas pesadas',
      icon: 'team'
    },
    {
      title: 'Qualidade e Agilidade',
      description: 'Serviços executados com qualidade, dentro do prazo e cumprindo todas as normas técnicas',
      icon: 'custom'
    }
  ]

  return (
    <section id="beneficios" className="benefits">
      <div className="container">
        <div className="benefitsHeader">
          <h2>Por Que Nos Escolher?</h2>
          <p className="benefitsIntro">
            Com mais de 10 anos de mercado, especializados em terraplanagem e locação de máquinas, 
            a ENGELOOP é reconhecida pela qualidade dos serviços, cumprimento de prazos e normas técnicas. 
            Temos profissionais qualificados, frota moderna de equipamentos pesados e tecnologia de ponta 
            para atender seus projetos de terraplanagem.
          </p>
        </div>
        <div className="benefitsGrid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefitCard">
              <div className={`benefitIcon benefitIcon-${benefit.icon}`}>
                {benefit.icon === 'team' && <TeamIcon />}
                {benefit.icon === 'custom' && <CustomIcon />}
                {benefit.icon === 'tech' && <TechIcon />}
                {benefit.icon === 'results' && <ResultsIcon />}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="benefitsCta">
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

