export class Location {
    constructor (
        public country: string,
        public city: string,
        public street: string,
        public street_number: number,
        public id?: number,
    ){}

    toString(): string {
        let temp:string = this.id + ", " + this.country +", "+ this.city + ", " + this.street + ", " + this.street_number;
        return temp;
    }
}