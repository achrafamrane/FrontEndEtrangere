import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PieceDocumentService {
  private baseUrl=`${API_URL}`;


  constructor(private http: HttpClient) { }

  getAllPieceJustification(idBachelier):Observable<any>{
    return this.http.get(`${this.baseUrl}/allPiece/${idBachelier}`);
  }


}
