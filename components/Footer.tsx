'use client'

import Image from 'next/image'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, CONTACT_HOURS, SOCIAL_MEDIA } from '@/lib/constants'

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container">
        <div className="footerContent">
          <div className="footerSection">
            <div className="footerLogo">
              <Image
                src="/imagens_projeto/logo_branca.png"
                alt="Engeloop Engenharia e Projetos"
                width={400}
                height={180}
                className="footerLogoImage"
                priority
              />
            </div>
            <h3>Engeloop Engenharia e Projetos Ltda</h3>
            <p>Empresa goiana especializada em terraplanagem e locação de máquinas há mais de 10 anos no mercado. Com sede em Goiânia – GO.</p>
          </div>
          <div className="footerSection">
            <div className="footerContactItem">
              <div className="footerContactIcon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" fill="none"/>
                  <path d="M22 6L12 13L2 6" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="footerContactContent">
                <span className="footerContactLabel">EMAIL</span>
                <p>{CONTACT_EMAIL}</p>
              </div>
            </div>
            <div className="footerContactItem">
              <div className="footerContactIcon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21C9.4 21 0 11.6 0 0.08C0 -0.52 0.48 -1 1.08 -1H4.08C4.68 -1 5.16 -0.52 5.16 0.08C5.16 1.08 5.32 2.04 5.64 2.92C5.8 3.36 5.68 3.88 5.32 4.24L3.64 5.92C5.04 8.56 7.44 10.96 10.08 12.36L11.76 10.68C12.12 10.32 12.64 10.2 13.08 10.36C13.96 10.68 14.92 10.84 15.92 10.84C16.52 10.84 17 11.32 17 11.92V14.92C17 15.52 16.52 16 15.92 16Z" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="footerContactContent">
                <span className="footerContactLabel">TELEFONE</span>
                <p>{CONTACT_PHONE}</p>
              </div>
            </div>
            <div className="footerContactItem">
              <div className="footerContactIcon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="10" r="3" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="footerContactContent">
                <span className="footerContactLabel">ENDEREÇO</span>
                <p>{CONTACT_ADDRESS}</p>
              </div>
            </div>
            <div className="footerContactItem">
              <div className="footerContactIcon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="footerContactContent">
                <span className="footerContactLabel">HORÁRIO</span>
                <p>{CONTACT_HOURS.weekdays}<br />{CONTACT_HOURS.saturday}</p>
              </div>
            </div>
            <div className="footerSocial">
              {SOCIAL_MEDIA.instagramUrl && (
                <a href={SOCIAL_MEDIA.instagramUrl} target="_blank" rel="noopener noreferrer" className="footerSocialLink">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                  </svg>
                  Instagram: {SOCIAL_MEDIA.instagram}
                </a>
              )}
              {SOCIAL_MEDIA.facebookUrl && (
                <a href={SOCIAL_MEDIA.facebookUrl} target="_blank" rel="noopener noreferrer" className="footerSocialLink">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                  </svg>
                  Facebook: {SOCIAL_MEDIA.facebook}
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy; 2024 Engeloop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
