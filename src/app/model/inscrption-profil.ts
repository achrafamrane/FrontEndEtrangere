export class InscrptionProfil {
  id:number;
  nom: string;
  prenom: string;
  sexe: string;
  dateNaissance: Date;
  lieuNaissance: string;
  paysNaissance: number;
  numeroPassport: number;
  datelimiteValidite: Date;
  paysdelivrencePassport: number;
photo:any;



  constructor(id:number,
    nom: string,
    prenom: string,
    sexe: string,
    dateNaissance: Date,
    lieuNaissance: string,
    paysNaissance: number,
    numeroPassport: number,
    datelimiteValidite: Date,
    paysdelivrencePassport: number,
    photo:any,
    ) {
      this.id=id;
      this.nom = nom;
      this.prenom = prenom;
      this.sexe = sexe;
      this.dateNaissance = dateNaissance;
      this.lieuNaissance = lieuNaissance;
      this.paysNaissance = paysNaissance;
      this.numeroPassport = numeroPassport;
      this.datelimiteValidite=datelimiteValidite;
      this.paysdelivrencePassport=paysdelivrencePassport;
      this.photo=photo;
  }
}
