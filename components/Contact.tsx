'use client'

import Image from 'next/image'
import { getWhatsAppLink, GOOGLE_ADS_CONVERSION_ID } from '@/lib/constants'

export default function Contact() {
  const handleWhatsAppClick = (type: string) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': GOOGLE_ADS_CONVERSION_ID,
        'event_category': 'engagement',
        'event_label': `whatsapp_contact_${type}`
      })
    }
  }

  return (
    <section id="contato" className="contact contactWithBackground">
      <div className="contactBackgroundImage">
        <Image
          src="/imagens_projeto/PaginaInicial.pdf-image-012.jpg"
          alt="Engeloop - Engenharia e Projetos"
          fill
          className="contactBgImage"
          style={{ objectFit: 'cover' }}
        />
        <div className="contactBackgroundOverlay"></div>
      </div>
      <div className="container">
        <div className="contactWrapper">
          <h2 className="contactTitle">Entre em Contato</h2>
          <p className="contactSubtitle">
            Com sede em Goiânia – GO, nossa localização privilegiada favorece a logística operacional, 
            resultando na otimização do nosso trabalho, reforçando nosso compromisso com cada cliente em qualquer lugar do país.
          </p>
          <div className="contactInfo">
            <div className="contactInfoItem">
              <span className="contactInfoLabel">Telefone</span>
              <p className="contactInfoValue">(62) 98199-3875</p>
            </div>
            <div className="contactInfoItem">
              <span className="contactInfoLabel">E-mail</span>
              <p className="contactInfoValue">engeloop@gmail.com</p>
            </div>
            <div className="contactInfoItem">
              <span className="contactInfoLabel">Endereço</span>
              <p className="contactInfoValue">Rua Hedberto Dias, 94, Quadra 60, Lote 10, Bairro Goia 2, CEP: 74.486-220</p>
            </div>
            <div className="contactInfoItem">
              <span className="contactInfoLabel">Horário de Funcionamento</span>
              <p className="contactInfoValue">Segunda a Sexta: 8:00 às 18:00<br />Sábado: 8:00 às 13:00</p>
            </div>
          </div>
          <div className="whatsappButtons">
            <a
              href={getWhatsAppLink('orcamento')}
              target="_blank"
              rel="noopener noreferrer"
              className="btnWhatsApp btnBlock btnLarge"
              onClick={() => handleWhatsAppClick('orcamento')}
            >
              Solicitar Orçamento pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

