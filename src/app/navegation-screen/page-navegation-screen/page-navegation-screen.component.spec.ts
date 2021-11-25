import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNavegationScreenComponent } from './page-navegation-screen.component';

describe('PageNavegationScreenComponent', () => {
  let component: PageNavegationScreenComponent;
  let fixture: ComponentFixture<PageNavegationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNavegationScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNavegationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
