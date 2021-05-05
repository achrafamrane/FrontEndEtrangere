import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionGlobalComponent } from './inscription-global.component';

describe('InscriptionGlobalComponent', () => {
  let component: InscriptionGlobalComponent;
  let fixture: ComponentFixture<InscriptionGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
