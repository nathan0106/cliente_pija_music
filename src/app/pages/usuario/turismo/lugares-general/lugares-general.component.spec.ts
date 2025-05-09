import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresGeneralComponent } from './lugares-general.component';

describe('LugaresGeneralComponent', () => {
  let component: LugaresGeneralComponent;
  let fixture: ComponentFixture<LugaresGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugaresGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugaresGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
