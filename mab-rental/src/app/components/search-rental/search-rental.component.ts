import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necessário para ngModel

@Component({
  selector: 'app-search-rental',
  standalone: true,
  imports: [CommonModule, FormsModule], // SINTAXE MODERNA
  templateUrl: './search-rental.component.html',
  styleUrls: ['./search-rental.component.css']
})
export class SearchRentalComponent implements OnInit {
  // Estados para armazenar os valores dos selects (ngModel)
  propertyType: string = '';
  location: string = '';
  
  // Listas de opções
  propertyTypes: string[] = ["Casa", "Apartamento", "Comercial", "Germinada", "Predio", "Escritorio", "Garagem", "Residencial"];
  locations: string[] = ["Nova Marabá", "Velha Marabá", "Cidade Nova", "Cidade Jardim", "São Felix"];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  // Função para lidar com o clique no botão de busca
  handleSearch(): void {
    console.log(`Buscando Tipo: ${this.propertyType}, Localização: ${this.location}`);

    // Usa o Router para navegar e adicionar parâmetros de URL (Substitui a manipulação de window.location)
    this.router.navigate(['/rentals'], { 
      queryParams: { 
        type: this.propertyType || null, // Passa null para remover se estiver vazio
        sector: this.location || null
      }
    });
  }
}