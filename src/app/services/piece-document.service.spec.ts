import { TestBed } from '@angular/core/testing';

import { PieceDocumentService } from './piece-document.service';

describe('PieceDocumentService', () => {
  let service: PieceDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
