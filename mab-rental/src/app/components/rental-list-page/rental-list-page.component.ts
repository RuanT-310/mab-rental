import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { RentalListComponent } from '../rental-list/rental-list.component';

@Component({
  selector: 'app-rental-list-page',
  imports: [CtaComponent, RentalListComponent],
  templateUrl: './rental-list-page.component.html',
  styleUrl: './rental-list-page.component.css'
})
export class RentalListPageComponent {
  constructor() { }
  
  ngOnInit(): void {}
}
