import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceItem } from './service-item';

describe('ServiceItem', () => {
  let component: ServiceItem;
  let fixture: ComponentFixture<ServiceItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
