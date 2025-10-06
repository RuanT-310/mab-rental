import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa todos os subcomponentes necessários para a Home
import { RouterLink } from '@angular/router';
import { RentalTypesComponent } from '../../components/rental-types/rental-types.component';
import { RentalListComponent } from '../../components/rental-list/rental-list.component';
import { TestimonialListComponent } from '../testimonial-list/testimonial-list.component';
import { CtaComponent } from '../../components/cta/cta.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    RentalTypesComponent, 
    RentalListComponent, 
    TestimonialListComponent, 
    CtaComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {  
  constructor() { }

  ngOnInit(): void { }
}