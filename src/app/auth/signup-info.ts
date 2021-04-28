export class SignUpInfo {
    name: string;
    prenom: string;
    username: string;
    email: string;
    role: string[];
    password: string;

    constructor(name: string, prenom: string,username: string, email: string, password: string) {
        this.name = name;
        this.prenom = prenom;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
