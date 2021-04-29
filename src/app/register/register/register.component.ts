import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { SignUpInfo } from 'src/app/auth/signup-info';
import { IscriptionProfil } from 'src/app/services/inscriptionProfil.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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
    private authService: AuthService,
    private inscriptionProfil: IscriptionProfil
  ) {}

  ngOnInit() {
    this.inscriptionProfil.getAllPays().subscribe((Response) => {
      this.nationalite = Response;
    });
    this.inscriptionProfil.getAllTypeBachelier().subscribe((Response) => {
      this.typeBachelier = Response;
    });
    this.inscriptionProfil.getAllInscriptionChoix().subscribe((Response) => {
      this.InscriptionChoix = Response;
    });
  }

  onSubmit() {
    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.prenom,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.ConfirmPassword
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
  changeTypeBachelier(e) {
    if (e.target.value == 3) {
      this.showChoix = true;
    } else {
      this.showChoix = false;
    }
  }
}
