import { PieceDocument } from "./PieceDocument";

export class DocumentJustificationModel {
  concat(PieceDocuments: PieceDocument) {
    throw new Error('Method not implemented.');
  }
  id:number;
  lib_type_latin: string;
  lib_type_arabe: string;
  lib_type_alglais: string;
  code: string;
  obligatoire: boolean;
  objet: string;




  constructor(id:number,
    lib_type_latin: string,
    lib_type_arabe: string,
    lib_type_alglais: string,
    code: string,
    obligatoire: boolean,
    objet: string,
    ) {
     this.id=id;
     this.lib_type_latin=lib_type_latin;
     this.lib_type_arabe=lib_type_arabe;
     this.lib_type_alglais=lib_type_alglais;
     this.code=code;
     this.obligatoire=obligatoire;
     this.objet=objet;
  }
}
