import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentJustification2Component } from './document-justification2.component';

describe('DocumentJustification2Component', () => {
  let component: DocumentJustification2Component;
  let fixture: ComponentFixture<DocumentJustification2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentJustification2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentJustification2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
