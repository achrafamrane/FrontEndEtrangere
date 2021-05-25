import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private baseUrl=`${API_URL}`;


  constructor(private http: HttpClient) { }




  getByusernames(username):Observable<any>{
    return this.http.get(`${this.baseUrl}/informationProfilByusername/${username}`);
  }
}
