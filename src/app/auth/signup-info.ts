export class SignUpInfo {
    name: string;
    prenom: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    ConfirmPassword:string;
    pays_nationalite:number;
    type_bachelier:number;
    types_inscription:string;



    constructor(name: string, prenom: string,username: string, email: string, password: string,    ConfirmPassword:string
      ,pays_nationalite:number,type_bachelier:number,types_inscription:string) {
        this.name = name;
        this.prenom = prenom;
        this.username = username;
        this.email = email;
        this.password = password;
        this.ConfirmPassword = ConfirmPassword;
        this.pays_nationalite = pays_nationalite;
        this.type_bachelier=type_bachelier;
        this.types_inscription=types_inscription;
        this.role = ['user'];
    }
}
