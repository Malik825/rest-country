import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderCountryButtonComponent } from './border-country-button.component';

describe('BorderCountryButtonComponent', () => {
  let component: BorderCountryButtonComponent;
  let fixture: ComponentFixture<BorderCountryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderCountryButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderCountryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
