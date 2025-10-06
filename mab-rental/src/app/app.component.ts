import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchRentalComponent } from './components/search-rental/search-rental.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Necessário para exibir o conteúdo das rotas
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}