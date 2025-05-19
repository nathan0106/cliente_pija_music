import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosadministradorComponent } from './favoritosadministrador.component';

describe('FavoritosadministradorComponent', () => {
  let component: FavoritosadministradorComponent;
  let fixture: ComponentFixture<FavoritosadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritosadministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritosadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
