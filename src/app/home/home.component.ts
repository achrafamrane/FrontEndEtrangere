import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  info: any;
  idUsername: any;
  encode: string;
  errorMessage: 'Error 404';
  constructor(
    private token: TokenStorageService,
    private homeServices: HomeServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {

    //Authentification
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
    };
    //get id of username
    this.homeServices.getByusernames(this.info.username).subscribe(
      (data) => {
        this.idUsername = data;
      },
      (error) => {
        this.errorMessage = 'Error 404';
        setTimeout(() => {
          this.refreshPage();
        }, 1000);
      }
    );
  }
  suivant() {
    this.encode = window.btoa(this.idUsername.id);
    this.router.navigate(['global', this.encode]);
  }
  refreshPage() {
    window.location.reload();
  }

}
