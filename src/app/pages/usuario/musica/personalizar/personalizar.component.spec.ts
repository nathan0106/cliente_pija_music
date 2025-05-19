import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizarComponent } from './personalizar.component';

describe('PersonalizarComponent', () => {
  let component: PersonalizarComponent;
  let fixture: ComponentFixture<PersonalizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
