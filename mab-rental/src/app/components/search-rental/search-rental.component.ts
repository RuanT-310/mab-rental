import { Component, signal, inject, Input } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necessário para ngModel

@Component({
  selector: 'app-search-rental',
  standalone: true, // Implementação moderna do Angular
  imports: [CommonModule, FormsModule], // Importa módulos necessários para ngFor e ngModel
  templateUrl: './search-rental.component.html',
  styleUrl: './search-rental.component.css'
})
export class SearchRentalComponent {
  // 1. Injeção segura do objeto 'window' via DOCUMENT
  private document = inject(DOCUMENT);
  
  // 2. Estado (React useState -> Angular signal)
  // Usamos signals para reatividade moderna e tipagem estrita
  @Input('propertyType') propertyType!: string
  @Input('location') location!: string

  // 3. Dados para os dropdowns (Arrays)
  readonly propertyTypes = [
    'Casa', 'Apartamento', 'Comercial', 'Germinada', 
    'Predio', 'Escritorio', 'Garagem', 'Residencial'
  ];

  readonly locations = [
    'Nova Marabá', 'Velha Marabá', 'Cidade Nova', 'Cidade Jardim', 'São Felix'
  ];

  /**
   * Função para lidar com o clique no botão de busca.
   * Navega para a página de listagem, adicionando os parâmetros de busca na URL.
   */
  handleSearch(): void {
    // Acessa o objeto window de forma segura
    const window = this.document.defaultView; 
    
    if (!window) {
      console.error("Ambiente de navegador não detectado.");
      return;
    }

    // Cria a URL com os valores atuais
    const url = new URL(window.location.href);
    
    // Configura o novo caminho
    url.pathname = "/property-list.html"; 
    
    // Adiciona os parâmetros de busca (os valores atuais dos signals)
    url.searchParams.set('type', this.propertyType);
    url.searchParams.set('sector', this.location);

    // Redireciona o usuário
    window.location.href = url.toString();
  }
}
