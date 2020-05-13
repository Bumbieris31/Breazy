export class Item {
    constructor(
        public id: string,
        public name: string,
        public category: string,
        public description: string,
        public imageUrl: string,
        public price: number
    ) { }
}