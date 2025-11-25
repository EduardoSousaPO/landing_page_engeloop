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
      title: 'Mais de 10 Anos no Mercado',
      description: 'Portfólio repleto de obras concluídas com sucesso e clientes satisfeitos',
      icon: 'results'
    },
    {
      title: 'Qualidade, Prazo e Normas',
      description: 'Entregamos obras na mais perfeita qualidade, dentro do prazo e cumprindo todas as normas',
      icon: 'custom'
    },
    {
      title: 'Profissionais Qualificados e Experientes',
      description: 'Temos profissionais qualificados e experientes para atender nossos serviços',
      icon: 'team'
    },
    {
      title: 'Maquinários e Ferramentas Tecnológicas',
      description: 'Maquinários e ferramentas tecnológicas para atender nossos serviços',
      icon: 'tech'
    }
  ]

  return (
    <section id="beneficios" className="benefits">
      <div className="container">
        <div className="benefitsHeader">
          <h2>Por Que Nos Escolher?</h2>
          <p className="benefitsIntro">
            Com mais de 10 anos de mercado, um portfólio repleto de obras concluídas com sucesso, 
            clientes satisfeitos, a ENGELOOP sempre foi conhecida por uma empresa que entrega suas obras 
            na mais perfeita qualidade, dentro do prazo e cumprindo todas as normas. 
            Temos profissionais qualificados e experientes, maquinários e ferramentas tecnológicas para atender nossos serviços.
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

