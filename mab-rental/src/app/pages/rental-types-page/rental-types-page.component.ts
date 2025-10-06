import { Component } from '@angular/core';
import { RentalTypesComponent } from '../../components/rental-types/rental-types.component';

@Component({
  selector: 'app-rental-types-page',
  standalone: true,
  imports: [RentalTypesComponent],
  templateUrl: './rental-types-page.component.html',
  styleUrl: './rental-types-page.component.css'
})
export class RentalTypesPageComponent {

}
