import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class IscriptionProfil {
  private baseUrl=`${API_URL}`;


  constructor(private http: HttpClient) { }

  getAllPays():Observable<any>{
    return this.http.get(`${this.baseUrl}/allPays`);
  }
  getAllTypeBachelier():Observable<any>{
    return this.http.get(`${this.baseUrl}/allTypeBachelier`);
  }
  getAllInscriptionChoix():Observable<any>{
    return this.http.get(`${this.baseUrl}/allInscriptionChoix`);
  }


}
