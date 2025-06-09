import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMusicaComponent } from './dashboard-musica.component';

describe('dashboardmusicacomponent', () => {
  let component: DashboardMusicaComponent;
  let fixture: ComponentFixture<DashboardMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMusicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
