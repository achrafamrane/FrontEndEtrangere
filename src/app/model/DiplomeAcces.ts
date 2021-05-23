export class DiplomeAccesModel {
  id:number;
  idBachelier: number;
  typeDiplome: string;
  paysDelivranceDiplome: number;
  dateDelivranceDiplome: Date;
  optionsDiplome: string;
  moyenDiplome: string;

  estValide: boolean;




  constructor(id:number,
    idBachelier: number,
    typeDiplome: string,
    paysDelivranceDiplome: number,
    dateDelivranceDiplome: Date,
    optionsDiplome: string,
    estValide: boolean,
    moyenDiplome:string,
    ) {
     this.id=id;
     this.idBachelier=idBachelier;
     this.typeDiplome=typeDiplome;
     this.paysDelivranceDiplome=paysDelivranceDiplome;
     this.dateDelivranceDiplome=dateDelivranceDiplome;
     this.optionsDiplome=optionsDiplome;
     this.estValide=estValide;
     this.moyenDiplome=moyenDiplome;
  }
}
