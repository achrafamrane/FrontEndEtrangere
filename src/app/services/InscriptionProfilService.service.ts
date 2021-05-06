import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';
import { InscrptionProfil } from '../model/inscrption-profil';

@Injectable({
  providedIn: 'root'
})
export class InscriptionProfilService {
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
  getBachelierById(id):Observable<any>{
    return this.http.get<InscrptionProfil>(`${this.baseUrl}/informationProfil/${id}`);
  }
  getPhoto(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/image/${id}`);
  }
  
  uploadImages(id,fd)
  {
  return  this.http.put(`${this.baseUrl}/informationProfil/${id}`,fd);
  }

}
