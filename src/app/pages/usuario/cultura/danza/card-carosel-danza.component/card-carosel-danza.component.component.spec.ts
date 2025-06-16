import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaroselDanzaComponentComponent } from './card-carosel-danza.component.component';

describe('CardCaroselDanzaComponentComponent', () => {
  let component: CardCaroselDanzaComponentComponent;
  let fixture: ComponentFixture<CardCaroselDanzaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCaroselDanzaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCaroselDanzaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
