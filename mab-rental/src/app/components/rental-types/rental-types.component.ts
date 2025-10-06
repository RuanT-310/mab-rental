import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'; // Adicionando RouterLink
import { CommonModule } from '@angular/common'; // Necessário para *ngIf/pipes se usados (manter por segurança)

// Interface para um item de propriedade simplificado
interface Property {
  type: string;
}

// Interface para um item de tipo de propriedade com ícone
interface PropertyType {
  name: string;
  imgSrc: string;
}

@Component({
  selector: 'app-rental-types',
  // SINTAXE MODERNA
  standalone: true,
  imports: [CommonModule], // Adicionamos as importações
  templateUrl: './rental-types.component.html',
  styleUrls: ['./rental-types.component.css']
})
export class RentalTypesComponent implements OnInit {
  propertiesData: Property[] = [];
  
  propertyTypes: PropertyType[] = [
    { name: "Casa", imgSrc: '/icon-house.png' },
    { name: "Residencial", imgSrc: '/icon-villa.png' },
    { name: "Apartamento", imgSrc: '/icon-apartment.png' },
    { name: "Escritorio", imgSrc: '/icon-housing.png' },
    { name: "Prédio", imgSrc: '/icon-building.png' },
    { name: "Germinada", imgSrc: '/icon-neighborhood.png' },
    { name: "Garagem", imgSrc: '/icon-luxury.png' },
    { name: "Comercial", imgSrc: '/icon-condominium.png' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getAllRentals().then((response) => {
      this.propertiesData = response;
    });
  }

  async getAllRentals(): Promise<Property[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { type: "Casa" }, { type: "Apartamento" }, { type: "Apartamento" }, 
            { type: "Residencial" }, { type: "Escritorio" }, { type: "Prédio" }, 
            { type: "Germinada" }, { type: "Garagem" }, { type: "Comercial" }, { type: "Casa" },
        ]), 100); 
    });
  }

  countPropertiesByType(typeName: string): number {
    return this.propertiesData.filter((prop) => prop.type === typeName).length;
  }

  navigateToPropertyList(type: string): void {
    this.router.navigate(['/property-list'], { queryParams: { type: type } });
  }
}