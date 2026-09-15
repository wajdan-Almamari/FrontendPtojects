// ========================================
// Product Interface
// Defines the shape of a product
// ========================================
// ========================================
// Abstract Entity Class
// Base class for entities that have an ID
// ========================================
export class Entity {
    // The ID can be read but cannot be changed
    constructor(id) {
        this.id = id;
    }
}
// ========================================
// Product Entity
// Extends Entity and follows Product interface
// ========================================
export class ProductEntity extends Entity {
    constructor(id, name, price, stock, category) {
        // Send the ID to the parent Entity class
        super(id);
        // Store product values
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
    // Implementation of the abstract describe() method
    describe() {
        return `${this.name} - ${this.price}`;
    }
}
// ========================================
// Generic Repository
// Stores and manages items with a numeric ID
// ========================================
export class Repository {
    constructor() {
        // Private array for storing items
        this.items = [];
    }
    // Add a new item
    add(item) {
        this.items.push(item);
    }
    // Return all items
    getAll() {
        return this.items;
    }
    // Find one item using its ID
    findById(id) {
        return this.items.find(item => item.id === id);
    }
}
