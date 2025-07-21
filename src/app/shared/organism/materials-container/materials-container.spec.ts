import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsContainer } from './materials-container';

describe('MaterialsContainer', () => {
  let component: MaterialsContainer;
  let fixture: ComponentFixture<MaterialsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialsContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
