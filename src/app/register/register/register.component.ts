import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { SignUpInfo } from 'src/app/auth/signup-info';
import { InscriptionProfilService } from 'src/app/services/InscriptionProfilService.service';

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

  nationalites = [];
  typeBachelier: Observable<string[]>;
  InscriptionChoix: Observable<string[]>;
  constructor(
    private authService: AuthService,
    private inscriptionProfil: InscriptionProfilService,
    private _snackBar: MatSnackBar

  ) {}

  ngOnInit() {

    this.inscriptionProfil.getAllPays().subscribe((Response) => {
      this.nationalite = Response;
      this.nationalites=Response;

    });
    this.inscriptionProfil.getAllTypeBachelier().subscribe((Response) => {
      this.typeBachelier = Response;
    });
    this.inscriptionProfil.getAllInscriptionChoix().subscribe((Response) => {
      this.InscriptionChoix = Response;
    });
  }

  onSubmit() {
    if(this.form.types_inscription==null){
      this.signupInfo = new SignUpInfo(
        this.form.name,
        this.form.prenom,
        this.form.username,
        this.form.email,
        this.form.password,
        this.form.ConfirmPassword,
        this.form.pays_nationalite=3,
        this.form.type_bachelier,
        this.form.types_inscription="Bachelier"
      );
    }else{
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
    }
    const nationalitesId = this.nationalites.map(sweetItem => {
      return sweetItem.id
  })






    this.authService.signUp(this.signupInfo).subscribe(
      (data) => {
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        this.Success();
      },
      (error) => {
        this.Error();
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
  Error() {
    this._snackBar.open('Error ', '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'error',
    });
  }
  Success() {
    this._snackBar.open('Success', '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'success',
    });
  }
}
