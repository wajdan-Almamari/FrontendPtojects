// ========================================
// API Layer
// Typed version of Day 6 api.js
// ========================================

import type { Product } from "./product.js";

// Use the same API URL from your Day 6 project
const API_URL = "YOUR_DAY6_API_URL";


// ========================================
// Get All Products
// ========================================

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(API_URL);

    const products: Product[] = await response.json();

    return products;
}


// ========================================
// Get Product By ID
// ========================================

export async function getProductById(
    id: number
): Promise<Product> {

    const response = await fetch(`${API_URL}/${id}`);

    const product: Product = await response.json();

    return product;
}


// ========================================
// Create Product
// ========================================

export async function createProduct(
    product: Product
): Promise<Product> {

    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)
    });

    const createdProduct: Product = await response.json();

    return createdProduct;
}


// ========================================
// Update Product
// ========================================

export async function updateProduct(
    id: number,
    product: Product
): Promise<Product> {

    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(product)
    });

    const updatedProduct: Product = await response.json();

    return updatedProduct;
}


// ========================================
// Delete Product
// ========================================

export async function deleteProduct(
    id: number
): Promise<void> {

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
}