// Configurações da aplicação
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5562981993875'
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'engeloop@gmail.com'
export const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE || '(62) 98199-3875'
export const CONTACT_ADDRESS = process.env.NEXT_PUBLIC_CONTACT_ADDRESS || 'Rua Hedberto Dias, 94, Quadra 60, Lote 10, Bairro Goia 2, CEP: 74.486-220'
export const CONTACT_HOURS = {
  weekdays: 'Segunda a Sexta: 8:00 às 18:00',
  saturday: 'Sábado: 8:00 às 13:00'
}
export const SOCIAL_MEDIA = {
  instagram: '@engeloop',
  facebook: '@engeloop',
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/engeloop',
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/engeloop'
}

// Google Ads Configuration
export const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || 'AW-XXXXXXXXX/YYYYYYYYYYYY'
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'

// Mensagens pré-formatadas para WhatsApp
export const WHATSAPP_MESSAGES = {
  default: 'Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Engeloop',
  orcamento: 'Olá!%20Gostaria%20de%20solicitar%20um%20orçamento',
  duvidas: 'Olá!%20Tenho%20algumas%20dúvidas%20sobre%20os%20serviços',
  consultoria: 'Olá!%20Gostaria%20de%20agendar%20uma%20consulta',
  especialista: 'Olá!%20Gostaria%20de%20falar%20com%20um%20especialista',
  sobre: 'Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Engeloop',
  contato: 'Olá!%20Gostaria%20de%20entrar%20em%20contato',
  consultoriaEspecializada: 'Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Consultoria%20Especializada',
  desenvolvimentoProjetos: 'Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Desenvolvimento%20de%20Projetos',
  suporteManutencao: 'Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Suporte%20e%20Manutenção'
}

// Tipos para TypeScript
export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES

// Função helper para criar link do WhatsApp
export const getWhatsAppLink = (message: WhatsAppMessageKey = 'default') => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGES[message]}`
}


