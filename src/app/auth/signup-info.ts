export class SignUpInfo {
    name: string;
    prenom: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    ConfirmPassword:string;

    constructor(name: string, prenom: string,username: string, email: string, password: string,    ConfirmPassword:string) {
        this.name = name;
        this.prenom = prenom;
        this.username = username;
        this.email = email;
        this.password = password;
        this.ConfirmPassword = ConfirmPassword;

        this.role = ['user'];
    }
}
