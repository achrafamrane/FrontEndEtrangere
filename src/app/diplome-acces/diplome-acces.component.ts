import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { DiplomeAccesModel } from '../model/DiplomeAcces';
import { InscrptionProfil } from '../model/inscrption-profil';
import { DiplomeAccesServiceService } from '../services/diplome-acces-service.service';
import { InscriptionProfilService } from '../services/InscriptionProfilService.service';

@Component({
  selector: 'app-diplome-acces',
  templateUrl: './diplome-acces.component.html',
  styleUrls: ['./diplome-acces.component.css'],
})
export class DiplomeAccesComponent implements OnInit {
  idBachelier: number;
  showChoix: Boolean = false;
  form: any = {};
  diplome: DiplomeAccesModel;
  diplomes: any;
  nationalite: Observable<string[]>;
  errorMessage = '';

  info: { token: any; username: any };
  decode: any;
  constructor(
    private route: ActivatedRoute,
    private diplomeAccesService: DiplomeAccesServiceService,
    private inscriptionProfilService: InscriptionProfilService,
    private token: TokenStorageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
    };
    this.decode = this.route.snapshot.params['id'];
    this.idBachelier = Number(window.atob(this.decode));
    this.diplome = new DiplomeAccesModel(
      1,
      this.idBachelier,
      '',
      0,
      new Date(),
      '',
      false,
      ''
    );
    this.diplomeAccesService.getByidBachleir(this.idBachelier).subscribe(
      (response) => {
        if (response === null) {
        } else {
          this.diplome = response;
        }
      },
      (error) => {
        this.Error();
        this.errorMessage = 'Error 404';
      }
    );
    this.inscriptionProfilService.getAllPays().subscribe((Response) => {
      this.nationalite = Response;
    });
  }

  onSubmite() {
    if (this.idBachelier != this.diplome.idBachelier) {
      this.diplomeAccesService
        .UpdateDiplome(this.idBachelier, this.diplome)
        .subscribe(
          () => {
            this.Success();
          },
          (error) => {
            this.Error();
            this.errorMessage = 'Error 404';
          }
        );
    } else {
      this.diplomeAccesService.PostDiplome(this.diplome).subscribe(
        () => {
          this.Success();
        },
        (error) => {
          this.Error();
          this.errorMessage = 'Error 404';
        }
      );
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
