import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLaunchesCardComponent } from './new-launches-card.component';

describe('NewLaunchesCardComponent', () => {
  let component: NewLaunchesCardComponent;
  let fixture: ComponentFixture<NewLaunchesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLaunchesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLaunchesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
