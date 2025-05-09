import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarcardComponent } from './lugarcard.component';

describe('LugarcardComponent', () => {
  let component: LugarcardComponent;
  let fixture: ComponentFixture<LugarcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugarcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
