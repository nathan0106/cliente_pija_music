import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasdministradorComponent } from './artistasdministrador.component';

describe('ArtistasdministradorComponent', () => {
  let component: ArtistasdministradorComponent;
  let fixture: ComponentFixture<ArtistasdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistasdministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistasdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
