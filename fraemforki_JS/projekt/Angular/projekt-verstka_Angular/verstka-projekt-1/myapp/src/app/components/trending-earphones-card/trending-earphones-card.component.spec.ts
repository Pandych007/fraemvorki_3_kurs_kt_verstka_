import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingEarphonesCardComponent } from './trending-earphones-card.component';

describe('TrendingEarphonesCardComponent', () => {
  let component: TrendingEarphonesCardComponent;
  let fixture: ComponentFixture<TrendingEarphonesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingEarphonesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingEarphonesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
