
export class User{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getInfo(){
        return `${this.firstname} ${this.lastname}`;
    }
}