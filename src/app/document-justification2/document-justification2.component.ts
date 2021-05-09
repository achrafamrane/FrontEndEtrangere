import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentJustificationModel } from '../model/documentJustification';
import { DocumentJustificationService } from '../services/DocumentJustificationService.service';

@Component({
  selector: 'app-document-justification2',
  templateUrl: './document-justification2.component.html',
  styleUrls: ['./document-justification2.component.css']
})
export class DocumentJustification2Component implements OnInit {
Piece:DocumentJustificationModel;
selectedFile: File = null;
idBachelier: number;

  constructor(private route: ActivatedRoute,private documentJustificationService:DocumentJustificationService) { }

  ngOnInit(): void {
    this.idBachelier = this.route.snapshot.params['id'];

    this.documentJustificationService.getAllDocumentJustification().subscribe((Response) => {
      this.Piece = Response;
    });
  }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  onUploadImage() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log('fd: ', this.idBachelier);

  }
}
