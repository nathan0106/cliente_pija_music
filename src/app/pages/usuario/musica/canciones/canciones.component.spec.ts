import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionesComponent } from './canciones.component';

describe('CancionesComponent', () => {
  let component: CancionesComponent;
  let fixture: ComponentFixture<CancionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
