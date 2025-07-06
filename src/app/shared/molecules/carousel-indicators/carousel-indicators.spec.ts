import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselIndicators } from './carousel-indicators';

describe('CarouselIndicators', () => {
  let component: CarouselIndicators;
  let fixture: ComponentFixture<CarouselIndicators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselIndicators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselIndicators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
