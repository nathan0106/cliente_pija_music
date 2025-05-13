import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCarruselComponent } from './menu-carrusel.component';

describe('MenuCarruselComponent', () => {
  let component: MenuCarruselComponent;
  let fixture: ComponentFixture<MenuCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCarruselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
