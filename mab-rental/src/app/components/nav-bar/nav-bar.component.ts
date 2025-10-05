import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  standalone: true,
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  // Mock dos estados de autenticação
  isAuthenticated: boolean = true; // Mude para 'false' para testar o estado 'Login'
  
  // Caminho para o ícone (adapte se necessário)
  iconDeal: string = 'assets/img/icon-deal.png';

  // Variáveis de estado para o controle do menu e dropdowns no Tailwind/Angular
  isMenuOpen: boolean = false; // Controla o menu hamburguer (mobile)
  isImoveisDropdownOpen: boolean = false;
  isPaginasDropdownOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Aqui você integraria o seu serviço de Auth real para verificar o estado
    // Ex: this.authService.isAuthenticated$.subscribe(auth => this.isAuthenticated = auth);
  }

  // Mock da função de logout
  logout(): void {
    console.log('Usuário deslogado (Mock)');
    this.isAuthenticated = false; // Atualiza o estado
    this.router.navigate(['/']);
    // Implementação real: this.authService.logout();
  }

  // Função para lidar com o clique no botão Login/Sair
  handleAuthClick(): void {
    if (this.isAuthenticated) {
      this.logout();
    } else {
      this.router.navigate(['/login']);
      // Alternativamente, se quiser apenas alternar o estado mockado:
      // this.isAuthenticated = true; 
    }
  }

  // Funções para controle do dropdown (necessário para acessibilidade e toque)
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleImoveisDropdown(): void {
    this.isImoveisDropdownOpen = !this.isImoveisDropdownOpen;
    this.isPaginasDropdownOpen = false; // Fecha o outro dropdown
  }

  togglePaginasDropdown(): void {
    this.isPaginasDropdownOpen = !this.isPaginasDropdownOpen;
    this.isImoveisDropdownOpen = false; // Fecha o outro dropdown
  }
}