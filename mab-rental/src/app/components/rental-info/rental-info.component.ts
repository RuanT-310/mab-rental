import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necessário para pipes e classes dinâmicas
import { SwiperOptions } from 'swiper/types';
// Dependências do Swiper (Manteremos a sintaxe original do Swiper para manter a integridade do mock)
import Swiper from 'swiper';
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
  // Adiciona RouterLink e CommonModule para suportar o novo template
  imports: [CommonModule, RouterLink], 
  templateUrl: './rental-info.component.html',
  styleUrls: ['./rental-info.component.css'],
})
export class RentalInfoComponent implements OnInit {
  rental: Rental | null = {
      id: 'id',
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
  images: string[] = [];
  rentalId: string | null = null;
  
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
  };

  constructor(private route: ActivatedRoute) {
    Swiper.use([Navigation, Pagination, Autoplay]);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.rentalId = params.get('id');
      if (this.rentalId) {
        this.loadRentalData(this.rentalId);
      }
    });
  }

  loadRentalData(id: string): void {
    // ... (mock de carregamento de dados)
    const mockRentalData: Rental = {
        id: id, title: 'Apartamento de Luxo com Vista Panorâmica', description: 'Este é um lindo apartamento...',
        price: 3500.00, location: 'Rua Principal, 123', sector: 'Centro', sqft: 85, bed: 2, bath: 2,
        images: ['assets/img/rental-1.jpg', 'assets/img/rental-2.jpg', 'assets/img/rental-3.jpg', 'assets/img/rental-4.jpg'],
    };
    setTimeout(() => {
      this.rental = mockRentalData;
      this.images = mockRentalData.images;
    }, 500);
  }

  formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}