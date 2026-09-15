// ========================================
// Inventory Page
// ========================================

import type { Product } from "./product.js";
import { Repository } from "./product.js";
import { getProducts } from "./api.js";


// Repository for products
const productRepository = new Repository<Product>();


// ========================================
// Calculate Total Inventory Value
// ========================================

function calculateTotalValue(products: Product[]): number {
    return products.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}


// ========================================
// Count Low Stock Products
// ========================================

function countLowStock(
    products: Product[],
    threshold: number
): number {
    return products.filter(
        product => product.stock <= threshold
    ).length;
}


// ========================================
// Find Product by ID or Name
// Union Type + Narrowing
// ========================================

function findProduct(
    search: number | string
): Product | undefined {

    if (typeof search === "number") {
        return productRepository.findById(search);
    }

    return productRepository
        .getAll()
        .find(
            product =>
                product.name.toLowerCase() === search.toLowerCase()
        );
}


// ========================================
// Load Products from API
// ========================================

async function loadProducts(): Promise<void> {
    const products: Product[] = await getProducts();

    products.forEach(product => {
        productRepository.add(product);
    });

    console.log(productRepository.getAll());

    console.log(
        "Total Value:",
        calculateTotalValue(productRepository.getAll())
    );

    console.log(
        "Low Stock:",
        countLowStock(productRepository.getAll(), 5)
    );
}


// ========================================
// strictNullChecks Example
// ========================================

const productList =
    document.getElementById("productList");

if (productList !== null) {
    productList.textContent = "Products loaded";
}


// Load page data
loadProducts();