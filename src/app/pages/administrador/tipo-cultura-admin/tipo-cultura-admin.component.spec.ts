import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCulturaAdminComponent } from './tipo-cultura-admin.component';

describe('TipoCulturaAdminComponent', () => {
  let component: TipoCulturaAdminComponent;
  let fixture: ComponentFixture<TipoCulturaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoCulturaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoCulturaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
