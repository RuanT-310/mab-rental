import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';

register(); // Register Swiper's custom elements
// Defina a interface para os dados do depoimento
interface Testimonial {
  id: number;
  text: string;
  imageSrc: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonial-list',
  standalone: true,
  // Assumimos que o SwiperModule (ou o componente Swiper) foi importado aqui
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.css']
})
export class TestimonialListComponent implements OnInit {

  testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Fiquei impressionado com a praticidade do site. Em poucos cliques, encontrei uma casa perfeita para minhas necessidades. A experiência foi muito tranquila!",
      imageSrc: "/testimonial-5.jpg", // Caminho para assets/
      name: "Wesley",
      role: "Analista de Sistemas",
    },
    {
      id: 2,
      text: "O processo foi super simples e transparente. Consegui alugar uma casa incrível na localização que eu queria, e tudo de forma rápida e segura. Recomendo!",
      imageSrc: "/testimonial-2.jpg",
      name: "Pedro",
      role: "Analista de Sistemas",
    },
    {
      id: 3,
      text: "Excelente variedade de imóveis e ótimo suporte ao cliente. Encontrei exatamente o que procurava e o atendimento foi impecável. Melhor experiência de aluguel que já tive!",
      imageSrc: "/testimonial-3.jpg",
      name: "Gustavo",
      role: "Analista de Sistemas",
    },
  ];

  // Configuração do Swiper (similar ao objeto passado no React)
  // NOTA: No Angular real, isso seria um objeto SwiperOptions
  swiperConfig: any = { 
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
  };

  constructor() { }

  ngOnInit(): void {
    // Lógica para buscar depoimentos da API, se necessário
  }
}