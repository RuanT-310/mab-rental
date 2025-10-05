import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Interface para um item de propriedade simplificado (apenas o tipo é necessário para a contagem)
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
  standalone: true,
  imports: [],
  templateUrl: './rental-types.component.html',
  styleUrls: ['./rental-types.component.css']
})
export class RentalTypesComponent implements OnInit {
  // Lista de todas as propriedades carregadas (mockada)
  propertiesData: Property[] = [];
  
  // Dados dos tipos de propriedade com caminhos de imagem
  propertyTypes: PropertyType[] = [
    { name: "Casa", imgSrc: 'assets/img/icon-house.png' },
    { name: "Residencial", imgSrc: 'assets/img/icon-villa.png' },
    { name: "Apartamento", imgSrc: 'assets/img/icon-apartment.png' },
    { name: "Escritorio", imgSrc: 'assets/img/icon-housing.png' },
    { name: "Prédio", imgSrc: 'assets/img/icon-building.png' },
    { name: "Germinada", imgSrc: 'assets/img/icon-neighborhood.png' },
    { name: "Garagem", imgSrc: 'assets/img/icon-luxury.png' },
    { name: "Comercial", imgSrc: 'assets/img/icon-condominium.png' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getAllRentals().then((response) => {
      this.propertiesData = response;
    });
  }

  // MOCK: Simulação da função de busca de todas as propriedades
  async getAllRentals(): Promise<Property[]> {
    console.log('Mock: Buscando todos os tipos de imóveis...');
    // Dados simulados que viriam da sua API para contagem
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { type: "Casa" },
            { type: "Apartamento" },
            { type: "Apartamento" },
            { type: "Residencial" },
            { type: "Escritorio" },
            { type: "Prédio" },
            { type: "Germinada" },
            { type: "Garagem" },
            { type: "Comercial" },
            { type: "Casa" },
        ]), 100); 
    });
  }

  // Função para contar as propriedades por tipo
  countPropertiesByType(typeName: string): number {
    return this.propertiesData.filter((prop) => prop.type === typeName).length;
  }

  // Função para gerar a URL com o tipo de propriedade (navegação no Angular)
  navigateToPropertyList(type: string): void {
    // Redireciona para a lista de propriedades com o parâmetro de query 'type'
    this.router.navigate(['/property-list'], { queryParams: { type: type } });
  }
}