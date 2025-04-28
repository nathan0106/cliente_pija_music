import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshoardComponent } from './deshoard.component';

describe('DeshoardComponent', () => {
  let component: DeshoardComponent;
  let fixture: ComponentFixture<DeshoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeshoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeshoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
