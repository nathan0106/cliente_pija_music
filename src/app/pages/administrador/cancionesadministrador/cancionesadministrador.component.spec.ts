import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesadministradorComponent } from './cancionesadministrador.component';

describe('CancionesadministradorComponent', () => {
  let component: CancionesadministradorComponent;
  let fixture: ComponentFixture<CancionesadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancionesadministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionesadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
