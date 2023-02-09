export class Tour {
    constructor (
        
        public title: string,
        public bio: string,
        public maxSlots: number,
        public locationId: number,
        public guidemanId: number,
        public id?: number,
        public image?: Blob

    ){}

    toString(): string {
        return this.id + ", "+ this.title + ", "+ this.bio + ", "+ 
        this.maxSlots + ", " + this.locationId + ", " + this.guidemanId;
    }

}