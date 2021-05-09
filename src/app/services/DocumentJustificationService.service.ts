import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class DocumentJustificationService {
  private baseUrl=`${API_URL}`;


  constructor(private http: HttpClient) { }
  getAllDocumentJustification():Observable<any>{
    return this.http.get(`${this.baseUrl}/allTypePiece`);
  }

}
