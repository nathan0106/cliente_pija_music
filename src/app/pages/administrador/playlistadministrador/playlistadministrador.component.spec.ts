import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistadministradorComponent } from './playlistadministrador.component';

describe('PlaylistadministradorComponent', () => {
  let component: PlaylistadministradorComponent;
  let fixture: ComponentFixture<PlaylistadministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaylistadministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
