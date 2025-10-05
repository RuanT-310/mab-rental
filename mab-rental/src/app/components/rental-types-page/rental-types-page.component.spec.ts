import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalTypesPageComponent } from './rental-types-page.component';

describe('RentalTypesPageComponent', () => {
  let component: RentalTypesPageComponent;
  let fixture: ComponentFixture<RentalTypesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalTypesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalTypesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
