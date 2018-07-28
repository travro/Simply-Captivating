export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public category?: string,        
        public description?: string,
        public imageURL?: string,
        public price?: number,
        public stock? : number) { }
}