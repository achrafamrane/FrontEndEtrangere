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
    return this.http.post(`${this.baseUrl}/DiplomeAccesModel`,diplome);
  }

  UpdateDiplome(id,diplome)
  {
  return  this.http.put(`${this.baseUrl}/DiplomeAccesModel/${id}`,diplome);
  }
  getByidBachleir(id):Observable<any>{
    return this.http.get(`${this.baseUrl}/DiplomeAccesModel/${id}`);
  }
  }
