import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardadministradorComponent } from './dashboardadministrador.component';

describe('DashboardadministradorComponent', () => {
  let component: DashboardadministradorComponent;
  let fixture: ComponentFixture<DashboardadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardadministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
