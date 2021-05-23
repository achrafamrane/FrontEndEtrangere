import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentJustificationModel } from '../model/documentJustification';
import { PieceDocument } from '../model/PieceDocument';
import { DocumentJustificationService } from '../services/DocumentJustificationService.service';
import { PieceDocumentService } from '../services/piece-document.service';

@Component({
  selector: 'app-document-justification2',
  templateUrl: './document-justification2.component.html',
  styleUrls: ['./document-justification2.component.css']
})
export class DocumentJustification2Component implements OnInit {
  mySubscription: any;
  Piece: DocumentJustificationModel;
  PieceDocuments: PieceDocument;
  selectedFile: File = null;
  idBachelier: number;
  result:any;
  constructor(private route: ActivatedRoute, private piecesDocumentService: PieceDocumentService
    , private documentJustificationService: DocumentJustificationService) {

    }

  ngOnInit(): void {
    this.idBachelier = this.route.snapshot.params['id'];

    this.documentJustificationService.getAllDocumentJustification().subscribe((Response) => {
      this.Piece = Response;
    });

    this.piecesDocumentService.getAllPieceJustification(this.idBachelier).subscribe((Response) => {
      this.PieceDocuments = Response;
    });
this.mergeObjet();

  }

  mergeObjet(){
    setTimeout(() => {
      const mergeById = (array1, array2) =>
        array1.map(itm => ({
          ...array2.find((item) => (item.idTypePiece === itm.id) && item),
          ...itm
        }));
      this.result = mergeById(this.Piece, this.PieceDocuments);
    }, 1000);

  }
  onFileSelected(event, idTypePiece) {
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.documentJustificationService
      .PostDocument(this.idBachelier, idTypePiece, fd)
      .subscribe((response) => {
        console.log('response: ', response);

      });
  }

}
