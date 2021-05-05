import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { IscriptionProfil } from '../services/inscriptionProfil.service';

@Component({
  selector: 'app-inscription-profil',
  templateUrl: './inscription-profil.component.html',
  styleUrls: ['./inscription-profil.component.css']
})
export class InscriptionProfilComponent implements OnInit {
  id:number;
  showChoix: Boolean = false;
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  nationalite: Observable<string[]>;
  typeBachelier: Observable<string[]>;
  InscriptionChoix: Observable<string[]>;
  constructor(
    private route:ActivatedRoute,
    private authService: AuthService,
    private inscriptionProfil: IscriptionProfil
  ) {}

  ngOnInit() : void {
    this.inscriptionProfil.getAllPays().subscribe((Response) => {
      this.nationalite = Response;
    });
    const id = this.route.snapshot.paramMap.get('id');
    console.log('this.id: ', this.id);

  }

  onSubmit() {

      this.signupInfo = new SignUpInfo(
        this.form.name,
        this.form.prenom,
        this.form.username,
        this.form.email,
        this.form.password,
        this.form.ConfirmPassword,
        this.form.pays_nationalite,
        this.form.type_bachelier,
        this.form.types_inscription
      );




    this.authService.signUp(this.signupInfo).subscribe(
      (data) => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
