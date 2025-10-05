import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

// Interface para tipagem dos dados do imóvel
interface Property {
  _id: number;
  images: string[];
  status: string;
  type: string;
  price: string;
  title: string;
  location: string;
  sqft: string;
  bed: string;
  bath: string;
}

@Component({
  selector: 'app-rental-list',
  // SINTAXE MODERNA
  standalone: true,
  imports: [CommonModule, RouterLink, NgClass], // Adicionamos as importações
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  properties: Property[] = [];
  statusFilters: string[] = ["Todas", "Top", "Recentes"];
  activeStatus: string = "";
  
  private mockProperties: Property[] = [
    { _id: 1, images: ['assets/img/prop-1.jpg'], status: "Venda", type: "Casa", price: "500,000", title: "Casa de Campo Moderna", location: "São Paulo, SP", sqft: "200m²", bed: "3 Quartos", bath: "2 Banheiros" },
    { _id: 2, images: ['assets/img/prop-2.jpg'], status: "Aluguel", type: "Apartamento", price: "2.500", title: "Ap. com Varanda Gourmet", location: "Rio de Janeiro, RJ", sqft: "85m²", bed: "2 Quartos", bath: "1 Banheiro" },
    { _id: 3, images: ['assets/img/prop-3.jpg'], status: "Top", type: "Casa", price: "800,000", title: "Cobertura de Luxo", location: "Belo Horizonte, MG", sqft: "150m²", bed: "4 Quartos", bath: "3 Banheiros" },
    { _id: 4, images: ['assets/img/prop-4.jpg'], status: "Recentes", type: "Comercial", price: "4.000", title: "Escritório Novo", location: "Curitiba, PR", sqft: "50m²", bed: "0 Quartos", bath: "1 Banheiro" },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const statusOfList = params.get('status');
      this.activeStatus = statusOfList || "";

      this.getAllRentals().then((data) => {
        let filteredData = data;
        if (statusOfList && statusOfList !== "Todas") {
            // Lógica de filtragem
        }
        this.properties = filteredData;
      });
    });
  }

  async getAllRentals(): Promise<Property[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(this.mockProperties), 300);
    });
  }

  changeFilterParams(newStatus: string): void {
    const statusParam = newStatus === 'Todas' ? null : newStatus;
    
    this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { status: statusParam },
        queryParamsHandling: 'merge'
    });
  }
}