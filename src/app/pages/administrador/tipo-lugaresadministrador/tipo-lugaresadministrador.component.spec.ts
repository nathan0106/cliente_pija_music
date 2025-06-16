import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLugaresadministradorComponent } from './tipo-lugaresadministrador.component';

describe('TipoLugaresadministradorComponent', () => {
  let component: TipoLugaresadministradorComponent;
  let fixture: ComponentFixture<TipoLugaresadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoLugaresadministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoLugaresadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
