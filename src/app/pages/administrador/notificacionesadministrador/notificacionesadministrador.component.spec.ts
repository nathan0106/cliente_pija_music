import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionesadministradorComponent } from './notificacionesadministrador.component';

describe('NotificacionesadministradorComponent', () => {
  let component: NotificacionesadministradorComponent;
  let fixture: ComponentFixture<NotificacionesadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificacionesadministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificacionesadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
