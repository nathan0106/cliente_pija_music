import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresadministradorComponent } from './lugaresadministrador.component';

describe('LugaresadministradorComponent', () => {
  let component: LugaresadministradorComponent;
  let fixture: ComponentFixture<LugaresadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugaresadministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugaresadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
