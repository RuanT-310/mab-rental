import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necessário para [ngClass] e lógica

@Component({
  selector: 'app-nav-bar',
  // SINTAXE MODERNA
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive], // Importações essenciais
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuthenticated: boolean = true;
  iconDeal: string = 'assets/img/icon-deal.png';

  isMenuOpen: boolean = false;
  isImoveisDropdownOpen: boolean = false;
  isPaginasDropdownOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Lógica de inicialização aqui
  }

  logout(): void {
    console.log('Usuário deslogado (Mock)');
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  handleAuthClick(): void {
    if (this.isAuthenticated) {
      this.logout();
    } else {
      this.router.navigate(['/login']);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleImoveisDropdown(): void {
    this.isImoveisDropdownOpen = !this.isImoveisDropdownOpen;
    this.isPaginasDropdownOpen = false;
  }

  togglePaginasDropdown(): void {
    this.isPaginasDropdownOpen = !this.isPaginasDropdownOpen;
    this.isImoveisDropdownOpen = false;
  }
}