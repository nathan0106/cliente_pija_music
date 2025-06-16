import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstilomusicaladministradorComponent } from './estilomusicaladministrador.component';

describe('EstilomusicaladministradorComponent', () => {
  let component: EstilomusicaladministradorComponent;
  let fixture: ComponentFixture<EstilomusicaladministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstilomusicaladministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstilomusicaladministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
