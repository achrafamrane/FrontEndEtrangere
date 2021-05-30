import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';
import { PieceDocument } from '../model/PieceDocument';


@Injectable({
  providedIn: 'root'
})
export class DocumentJustificationService {
  private baseUrl=`${API_URL}`;


  constructor(private http: HttpClient) { }


  getAllDocumentJustification():Observable<any>{
    return this.http.get(`${this.baseUrl}/allTypePiece`);
  }
  PostDocument(idBachelier,idTypePiece,fd):Observable<any>{
    return this.http.post<PieceDocument>(`${this.baseUrl}/piece/${idBachelier}/${idTypePiece}`,fd);

  }
  getDocumentByIdBachelier(idBachelier):Observable<any>{
    return this.http.get(`${this.baseUrl}/allPiece/${idBachelier}`);
  }
  PutDocument(idBachelier,idTypePiece,fd):Observable<any>{
    return this.http.put<PieceDocument>(`${this.baseUrl}/piece/${idBachelier}/${idTypePiece}`,fd);

  }

}
