import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../auth/token-storage.service';
import { DocumentJustificationModel } from '../model/documentJustification';
import { PieceDocument } from '../model/PieceDocument';
import { DocumentJustificationService } from '../services/DocumentJustificationService.service';
import { PieceDocumentService } from '../services/piece-document.service';

@Component({
  selector: 'app-document-justification2',
  templateUrl: './document-justification2.component.html',
  styleUrls: ['./document-justification2.component.css'],
})
export class DocumentJustification2Component implements OnInit {
  mySubscription: any;
  Piece: DocumentJustificationModel;
  PieceDocuments: PieceDocument;
  selectedFile: File = null;
  idBachelier: number;
  result: any;
  info: any;
  errorMessage = '';
  decode: any;
  res:boolean=false;
  res2:boolean=false;
  valId:any;
  constructor(
    private route: ActivatedRoute,
    private piecesDocumentService: PieceDocumentService,
    private documentJustificationService: DocumentJustificationService,
    private token: TokenStorageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
    };
    this.decode = this.route.snapshot.params['id'];
    this.idBachelier = Number(window.atob(this.decode));

    this.documentJustificationService.getAllDocumentJustification().subscribe(
      (Response) => {
        this.Piece = Response;
      },
      (error) => {
        this.errorMessage = 'Error 404';
      }
    );

    this.piecesDocumentService
      .getAllPieceJustification(this.idBachelier)
      .subscribe(
        (Response) => {
          this.PieceDocuments = Response;
          console.log(' this.PieceDocuments: ',  this.PieceDocuments);

        },
        (error) => {
          this.errorMessage = 'Error 404';
        }
      );

    this.mergeObjet();
  }

  mergeObjet() {
    setTimeout(() => {
      const mergeById = (array1, array2) =>
        array1.map((itm) => ({
          ...array2.find((item) => item.idTypePiece === itm.id && item),
          ...itm,
        }));
      this.result = mergeById(this.Piece, this.PieceDocuments);
      console.log('this.result: ', this.result);
    }, 1000);
  }

  onFileSelected(event, idTypePiece) {


    //selected file
    this.selectedFile = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    //getAllDocumentJustification

    // map resIdTypePiece and resIdBAchelier
    const resIdTypePiece = this.result.map((o) => o.idTypePiece);
    const resIdBAchelier = this.result.map((o) => o.idBachelier);
    this.documentJustificationService
    .PostDocument(this.idBachelier, idTypePiece, fd)
    .subscribe(
      (response) => {
        this.Success();
        this.documentJustificationService.getAllDocumentJustification().subscribe(
          (Response) => {
            this.Piece = Response;
          },
          (error) => {
            this.errorMessage = 'Error 404';
          }
        );

        this.piecesDocumentService
          .getAllPieceJustification(this.idBachelier)
          .subscribe(
            (Response) => {
              this.PieceDocuments = Response;
              console.log(' this.PieceDocuments: ',  this.PieceDocuments);

            },
            (error) => {
              this.errorMessage = 'Error 404';
            }
          );

        this.mergeObjet();
      },
      (error) => {
        this.errorMessage = 'Error 404';
        this.Error();
      }
    );






    /**
       if(resIdTypePiece[i]==null && resIdBAchelier[j]==null  ){

        this.documentJustificationService
          .PostDocument(this.idBachelier, idTypePiece, fd)
          .subscribe(
            (response) => {
              this.Success();

            },
            (error) => {
              this.errorMessage = 'Error 404';
              this.Error();
            }
          );
        break;
        }*/

    //updat
    /**
this.documentJustificationService
.PutDocument(this.idBachelier, idTypePiece, fd)
.subscribe(
  (response) => {
    this.Success();
  },
  (error) => {
    this.errorMessage = 'Error 404';
    this.Error();
  }
);*/
    //insert
    /**
          else  {
            this.documentJustificationService
              .PostDocument(this.idBachelier, idTypePiece, fd)
              .subscribe(
                (response) => {
                  this.Success();
                },
                (error) => {
                  this.errorMessage = 'Error 404';
                  this.Error();
                }
              );
            break;
          }*/
  }
  Error() {
    this._snackBar.open('Error ', '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'error',
    });
  }
  Success() {
    this._snackBar.open('Success', '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'success',
    });
  }
}
