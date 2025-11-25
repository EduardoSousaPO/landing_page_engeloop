'use client'

import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      stars: '★★★★★',
      text: 'A Engeloop transformou completamente nosso negócio. Profissionalismo e resultados excepcionais!',
      author: 'Maria Silva',
      role: 'CEO, Empresa XYZ'
    },
    {
      stars: '★★★★★',
      text: 'Excelente atendimento e soluções inovadoras. Recomendo sem hesitação!',
      author: 'João Santos',
      role: 'Diretor, Empresa ABC'
    },
    {
      stars: '★★★★★',
      text: 'Superaram todas as expectativas. Projeto entregue no prazo e com qualidade impecável.',
      author: 'Ana Costa',
      role: 'Gerente, Empresa DEF'
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="sectionHeader">
          <h2>O Que Nossos Clientes Dizem</h2>
          <p className="sectionSubtitle">Depoimentos reais de quem confia na Engeloop</p>
        </div>
        <div className="testimonialsGrid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonialCard">
              <div className="testimonialContent">
                <div className="stars">{testimonial.stars}</div>
                <p>"{testimonial.text}"</p>
                <div className="testimonialAuthor">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Seção de depoimentos - use Feedback.jpg como referência para criar elementos visuais */}
      </div>
    </section>
  )
}

