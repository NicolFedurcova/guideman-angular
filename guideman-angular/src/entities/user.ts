
export class User {
    constructor (
        
        public name: string,
        public surname: string,
        public email: string,
        
        public birthdate: Date,
        public login: string,
        public password: string,
        public id?: number,
        public telNumber?: string,
        public image?: Blob

    ){}

    toString(): string {
        return this.login;
    }

}