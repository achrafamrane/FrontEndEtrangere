import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomeAccesComponent } from './diplome-acces.component';

describe('DiplomeAccesComponent', () => {
  let component: DiplomeAccesComponent;
  let fixture: ComponentFixture<DiplomeAccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomeAccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplomeAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
