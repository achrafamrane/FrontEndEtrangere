import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';
import { DiplomeAccesModel } from '../model/DiplomeAcces';

@Injectable({
  providedIn: 'root'
})
export class DiplomeAccesServiceService {
  private baseUrl=`${API_URL}`;


  constructor(private http: HttpClient) { }



  PostDiplome(diplome):Observable<any>{
    return this.http.post<DiplomeAccesModel>(`${this.baseUrl}/DiplomeAccesModel`,diplome);
  }
  }
