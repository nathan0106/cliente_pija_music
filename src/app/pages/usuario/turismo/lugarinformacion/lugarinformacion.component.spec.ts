import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarinformacionComponent } from './lugarinformacion.component';

describe('LugarinformacionComponent', () => {
  let component: LugarinformacionComponent;
  let fixture: ComponentFixture<LugarinformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugarinformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarinformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
