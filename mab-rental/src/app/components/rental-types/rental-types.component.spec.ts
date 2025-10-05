import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalTypesComponent } from './rental-types.component';

describe('RentalTypesComponent', () => {
  let component: RentalTypesComponent;
  let fixture: ComponentFixture<RentalTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
