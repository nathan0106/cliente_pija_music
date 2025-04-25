import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsenderismoComponent } from './dashboardsenderismo.component';

describe('DashboardsenderismoComponent', () => {
  let component: DashboardsenderismoComponent;
  let fixture: ComponentFixture<DashboardsenderismoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardsenderismoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardsenderismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
