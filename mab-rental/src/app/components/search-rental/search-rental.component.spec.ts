import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRentalComponent } from './search-rental.component';

describe('SearchRentalComponent', () => {
  let component: SearchRentalComponent;
  let fixture: ComponentFixture<SearchRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRentalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
