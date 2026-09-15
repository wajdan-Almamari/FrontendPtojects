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
export class ProductEntity extends Entity implements Product {
    name: string;
    price: number;
    stock: number;
    category: string;

    constructor(
        id: number,
        name: string,
        price: number,
        stock: number,
        category: string
    ) {
        super(id);

        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }

    describe(): string {
        return `${this.name} - ${this.price}`;
    }
}