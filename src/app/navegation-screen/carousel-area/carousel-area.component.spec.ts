import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAreaComponent } from './carousel-area.component';

describe('CarouselAreaComponent', () => {
  let component: CarouselAreaComponent;
  let fixture: ComponentFixture<CarouselAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
