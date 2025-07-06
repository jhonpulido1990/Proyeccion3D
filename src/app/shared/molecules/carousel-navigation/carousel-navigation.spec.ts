import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNavigation } from './carousel-navigation';

describe('CarouselNavigation', () => {
  let component: CarouselNavigation;
  let fixture: ComponentFixture<CarouselNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselNavigation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
