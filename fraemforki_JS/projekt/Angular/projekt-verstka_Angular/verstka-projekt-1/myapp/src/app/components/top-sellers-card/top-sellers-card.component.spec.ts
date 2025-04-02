import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellersCardComponent } from './top-sellers-card.component';

describe('TopSellersCardComponent', () => {
  let component: TopSellersCardComponent;
  let fixture: ComponentFixture<TopSellersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSellersCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSellersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
