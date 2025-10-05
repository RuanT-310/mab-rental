import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Defina a interface para o objeto de aluguel para tipagem segura
interface Rental {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  sector: string;
  sqft: number;
  bed: number;
  bath: number;
  images: string[];
}

@Component({
  selector: 'app-rental-info',
  standalone: true,
  templateUrl: './rental-info.component.html',
  styleUrls: ['./rental-info.component.css'],
})
export class RentalInfoComponent implements OnInit {
  rental: Rental | null = null;
  images: string[] = [];
  rentalId: string | null = null;
  
  // Configuração do Swiper para o Angular
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
  };

  // Injete o ActivatedRoute para obter o parâmetro da URL
  constructor(private route: ActivatedRoute) {
    // Registra os módulos do Swiper (necessário para que a navegação e paginação funcionem)
    Swiper.use([Navigation, Pagination, Autoplay]);
  }

  ngOnInit(): void {
    // Obtém o 'id' da URL
    this.route.paramMap.subscribe(params => {
      this.rentalId = params.get('id');
      if (this.rentalId) {
        this.loadRentalData(this.rentalId);
      }
    });
  }

  // MOCK: Simula a função de busca do imóvel (Substitua pela lógica do seu serviço de Auth/API)
  loadRentalData(id: string): void {
    console.log(`Buscando imóvel com ID: ${id}`);
    
    // Simulação dos dados que viriam da API
    const mockRentalData: Rental = {
      id: id,
      title: 'Apartamento de Luxo com Vista Panorâmica',
      description: 'Este é um lindo apartamento, perfeito para quem busca conforto e modernidade no centro da cidade.',
      price: 3500.00,
      location: 'Rua Principal, 123',
      sector: 'Centro',
      sqft: 85,
      bed: 2,
      bath: 2,
      images: [
        'assets/img/rental-1.jpg', // Adicione caminhos reais
        'assets/img/rental-2.jpg',
        'assets/img/rental-3.jpg',
        'assets/img/rental-4.jpg',
      ],
    };

    // Simula um atraso de rede
    setTimeout(() => {
      this.rental = mockRentalData;
      this.images = mockRentalData.images;
    }, 500);
  }

  // Função para formatar o preço (opcional, mas recomendado)
  formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}