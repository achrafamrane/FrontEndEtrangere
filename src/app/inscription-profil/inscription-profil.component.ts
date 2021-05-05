import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { InscrptionProfil } from '../model/inscrption-profil';
import { InscriptionProfilService } from '../services/InscriptionProfilService.service';

@Component({
  selector: 'app-inscription-profil',
  templateUrl: './inscription-profil.component.html',
  styleUrls: ['./inscription-profil.component.css']
})
export class InscriptionProfilComponent implements OnInit {
  id:number;
  showChoix: Boolean = false;
  form: any = {};
  profil:InscrptionProfil;
  signupInfo: InscrptionProfil;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  nationalite: Observable<string[]>;
  typeBachelier: Observable<string[]>;
  InscriptionChoix: Observable<string[]>;
  constructor(
    private route:ActivatedRoute,
    private authService: AuthService,
    private inscriptionProfilService: InscriptionProfilService
  ) {}

  ngOnInit() : void {
    this.inscriptionProfilService.getAllPays().subscribe((Response) => {
      this.nationalite = Response;
    });
    this.id = this.route.snapshot.params["id"];
    this.profil=new InscrptionProfil(this.id,"","","",new Date(),"",0,0,new Date(),0);

    this.inscriptionProfilService.getBachelierById(this.id).subscribe(response=>
      {
        this.profil=response;
        console.log('this.profil: ', this.profil);
      })
  }


  onSubmit() {








      }}
