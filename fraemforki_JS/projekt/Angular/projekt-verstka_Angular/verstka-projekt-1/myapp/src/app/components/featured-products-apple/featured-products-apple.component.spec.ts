import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductsAppleComponent } from './featured-products-apple.component';

describe('FeaturedProductsAppleComponent', () => {
  let component: FeaturedProductsAppleComponent;
  let fixture: ComponentFixture<FeaturedProductsAppleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProductsAppleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedProductsAppleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
