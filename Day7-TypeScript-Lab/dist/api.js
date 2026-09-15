// ========================================
// API Layer
// Typed version of Day 6 api.js
// ========================================
// Use the same API URL from your Day 6 project
const API_URL = "YOUR_DAY6_API_URL";
// ========================================
// Get All Products
// ========================================
export async function getProducts() {
    const response = await fetch(API_URL);
    const products = await response.json();
    return products;
}
// ========================================
// Get Product By ID
// ========================================
export async function getProductById(id) {
    const response = await fetch(`${API_URL}/${id}`);
    const product = await response.json();
    return product;
}
// ========================================
// Create Product
// ========================================
export async function createProduct(product) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
    const createdProduct = await response.json();
    return createdProduct;
}
// ========================================
// Update Product
// ========================================
export async function updateProduct(id, product) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
    const updatedProduct = await response.json();
    return updatedProduct;
}
// ========================================
// Delete Product
// ========================================
export async function deleteProduct(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
}
