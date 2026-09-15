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
export class Repository<T extends { id: number }> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}