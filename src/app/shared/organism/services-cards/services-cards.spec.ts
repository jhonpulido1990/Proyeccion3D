import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCards } from './services-cards';

describe('ServicesCards', () => {
  let component: ServicesCards;
  let fixture: ComponentFixture<ServicesCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
