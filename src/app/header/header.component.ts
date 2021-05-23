import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  info: any;
  constructor(private token: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
    };
  }
  logout() {
    this.token.signOut();
   /*  this.router.navigate(['main'], { skipLocationChange: true }); */
    window.location.reload();
  }
  login() {
    this.router.navigate(['login']);
  }

}
