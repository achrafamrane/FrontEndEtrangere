import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DiplomeAccesModel } from '../model/DiplomeAcces';
import { InscrptionProfil } from '../model/inscrption-profil';
import { DiplomeAccesServiceService } from '../services/diplome-acces-service.service';
import { InscriptionProfilService } from '../services/InscriptionProfilService.service';

@Component({
  selector: 'app-diplome-acces',
  templateUrl: './diplome-acces.component.html',
  styleUrls: ['./diplome-acces.component.css']
})
export class DiplomeAccesComponent implements OnInit {
  idBachelier: number;
  showChoix: Boolean = false;
  form: any = {};
  diplome: DiplomeAccesModel;
  diplomes: any;
  nationalite: Observable<string[]>;

  errorMessage = '';
  constructor(
    private route: ActivatedRoute,
    private diplomeAccesService:DiplomeAccesServiceService,
    private inscriptionProfilService:InscriptionProfilService,
  ) { }

  ngOnInit(): void {
    this.idBachelier = this.route.snapshot.params['id'];
    this.diplome = new DiplomeAccesModel(1,this.idBachelier,'',0,new Date(),'',false,'');
this.diplomeAccesService.getByidBachleir(this.idBachelier).subscribe((response)=>{
  if(response===null){

    this.diplome = new DiplomeAccesModel(1,this.idBachelier,'',0,new Date(),'',false,'');

  }
  else{
    this.diplome=response;

  }
})
this.inscriptionProfilService.getAllPays().subscribe((Response) => {
  this.nationalite = Response;
});
  }


  onSubmite() {
if(this.idBachelier==this.diplome.idBachelier)
{

this.diplomeAccesService.UpdateDiplome(this.idBachelier,this.diplome).subscribe(()=>{

console.log('update: ', );
},

(error)=>
{
this.errorMessage=error;
console.log('error: ', error);
})
}else{
  this.diplomeAccesService.PostDiplome(this.diplome).subscribe((data)=>{
    console.log('datasss: ', data);

    },

    (error)=>
    {
this.errorMessage=error;
console.log('error: ', error);
    })
}




  }
}
