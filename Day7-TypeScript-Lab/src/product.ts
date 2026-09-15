export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
}
export abstract class Entity {
    constructor(public readonly id: number) { }

    abstract describe(): string;
}