export class PieceDocument {
  id:number;
  url: string;
  id_bachelier: number;
  id_type_piece: number;
  est_fourni: boolean;
  date_modification: string;




  constructor(id:number,
    url: string,
    id_bachelier: number,
    id_type_piece: number,
    est_fourni: boolean,
    date_modification: string,
    ) {
     this.id=id;
     this.url=url;
     this.id_bachelier=id_bachelier;
     this.id_type_piece=id_type_piece;
     this.est_fourni=est_fourni;
     this.date_modification=date_modification;
  }
}
