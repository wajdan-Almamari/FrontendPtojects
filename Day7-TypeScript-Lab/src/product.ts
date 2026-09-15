// ========================================
// Product Interface
// Defines the shape of a product
// ========================================

export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
}


// ========================================
// Abstract Entity Class
// Base class for entities that have an ID
// ========================================

export abstract class Entity {

    // The ID can be read but cannot be changed
    constructor(public readonly id: number) { }

    // Every child class must implement describe()
    abstract describe(): string;
}


// ========================================
// Product Entity
// Extends Entity and follows Product interface
// ========================================

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
        // Send the ID to the parent Entity class
        super(id);

        // Store product values
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }

    // Implementation of the abstract describe() method
    describe(): string {
        return `${this.name} - ${this.price}`;
    }
}


// ========================================
// Generic Repository
// Stores and manages items with a numeric ID
// ========================================

export class Repository<T extends { id: number }> {

    // Private array for storing items
    private items: T[] = [];

    // Add a new item
    add(item: T): void {
        this.items.push(item);
    }

    // Return all items
    getAll(): T[] {
        return this.items;
    }

    // Find one item using its ID
    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}