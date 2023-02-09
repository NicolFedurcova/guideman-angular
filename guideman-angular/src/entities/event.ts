import { Time } from "@angular/common";
import { User } from "./user";

export class Event {
    constructor (
        
        public dateOfTour: Date,
        public duration: Time,
        public price: number,
        public tourId: number,
        public guidemanId: number,
        public tourists?: User[],
        public ratings?: number[],
        public reviews?: string [],
        public id?: number,

    ){}

    toString(): string {
        return this.id + ", "+ this.dateOfTour + ", "+ this.duration + ", "+ 
        this.price + ", " + this.tourId + ", " + this.guidemanId + ", "+ 
        this.tourists + ", " + this.ratings + ", " + this.reviews;
    }

}