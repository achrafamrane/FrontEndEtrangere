import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { InscrptionProfil } from '../model/inscrption-profil';
import { InscriptionProfilService } from '../services/InscriptionProfilService.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inscription-profil',
  templateUrl: './inscription-profil.component.html',
  styleUrls: ['./inscription-profil.component.css'],
})
export class InscriptionProfilComponent implements OnInit {
  id: number;
  selectedFile: File = null;
  image_paths: any;
  imageToShow: any;
  showChoix: Boolean = false;
  form: any = {};
  profil: InscrptionProfil;
  profile: any;
  info: any;
  signupInfo: InscrptionProfil;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  decode: string;
  show: boolean = false;

  nationalite: Observable<string[]>;
  typeBachelier: Observable<string[]>;
  InscriptionChoix: Observable<string[]>;
  constructor(
    private route: ActivatedRoute,
    private inscriptionProfilService: InscriptionProfilService,
    private token: TokenStorageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
    };
    this.inscriptionProfilService.getAllPays().subscribe(
      (Response) => {
        this.nationalite = Response;
      },
      (error) => {
        this.errorMessage = 'Error 404';
      }
    );
    this.decode = this.route.snapshot.params['id'];
    this.id = Number(window.atob(this.decode));

    this.profil = new InscrptionProfil(
      this.id,
      '',
      '',
      '',
      new Date(),
      '',
      0,
      0,
      new Date(),
      0,
      ''
    );

    this.inscriptionProfilService
      .getBachelierById(this.id)
      .subscribe((response) => {
        this.profil = response;
        if(this.profil.photo===''){}else{

        this.inscriptionProfilService.getPhoto(this.profil.photo).subscribe(
          (data1) => {

              this.show = true;
              this.image_paths = data1;
              this.imageToShow =
                'data:image/jpeg;base64,' + this.image_paths.res;
          },
          (error) => {

            this.show = false;
          }
        );
      }
      });
  }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.onUploadImage();
  }

  onUploadImage() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.inscriptionProfilService
      .uploadImages(this.id, fd)
      .subscribe((response) => {
        this.profile = response;
        this.inscriptionProfilService.getPhoto(this.profile.photo).subscribe(
          (data1) => {
            this.Success();
            this.show = true;
            this.image_paths = data1;
            this.imageToShow = 'data:image/jpeg;base64,' + this.image_paths.res;
          },
          (error) => {
            this.Error();
            this.show = false;
            this.errorMessage = 'Error 404';
          }
        );
      });
  }

  onSubmite() {
    this.inscriptionProfilService
      .updateInformation(this.id, this.profil)
      .subscribe(
        (data) => {
          this.Success();
        },
        (error) => {
          this.Error();
          this.errorMessage = 'Error 404';
        }
      );
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
