import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorCoplasAdminComponent } from './autor-coplas-admin.component';

describe('AutorCoplasAdminComponent', () => {
  let component: AutorCoplasAdminComponent;
  let fixture: ComponentFixture<AutorCoplasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorCoplasAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorCoplasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
