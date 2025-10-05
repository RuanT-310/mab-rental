import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Estilos do Swiper
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Módulos do Swiper

// Inicializa os módulos do Swiper
const swiperModules = [Navigation, Pagination, Autoplay];

export const TestimonialList = () => {
  // Dados dos depoimentos
  const testimonials = [
    {
      id: 1,
      text: "Fiquei impressionado com a praticidade do site. Em poucos cliques, encontrei uma casa perfeita para minhas necessidades. A experiência foi muito tranquila!",
      imageSrc: "img/testimonial-5.jpg",
      name: "Wesley",
      role: "Analista de Sistemas",
    },
    {
      id: 2,
      text: "O processo foi super simples e transparente. Consegui alugar uma casa incrível na localização que eu queria, e tudo de forma rápida e segura. Recomendo!",
      imageSrc: "img/testimonial-2.jpg",
      name: "Pedro",
      role: "Analista de Sistemas",
    },
    {
      id: 3,
      text: "Excelente variedade de imóveis e ótimo suporte ao cliente. Encontrei exatamente o que procurava e o atendimento foi impecável. Melhor experiência de aluguel que já tive!",
      imageSrc: "img/testimonial-3.jpg",
      name: "Gustavo",
      role: "Analista de Sistemas",
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Título e descrição */}
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Nossos clientes dizem!</h1>
          <p>
            Descubra o que nossos clientes têm a dizer sobre suas experiências. Suas opiniões refletem a qualidade e confiança que oferecemos em cada serviço!
          </p>
        </div>

        {/* Carrossel de depoimentos com Swiper */}
        <div className="wow fadeInUp" data-wow-delay="0.1s">
          <Swiper
            modules={swiperModules} // Módulos do Swiper
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-item bg-light rounded p-3">
                  <div className="bg-white border rounded p-4">
                    <p>{testimonial.text}</p>
                    <div className="d-flex align-items-center">
                      <img
                        className="img-fluid flex-shrink-0 rounded"
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        style={{ width: '45px', height: '45px' }}
                      />
                      <div className="ps-3">
                        <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                        <small>{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
