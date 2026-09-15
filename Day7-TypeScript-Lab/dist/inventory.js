// ========================================
// Inventory Page
// ========================================
import { Repository } from "./product.js";
import { getProducts } from "./api.js";
// Repository for products
const productRepository = new Repository();
// ========================================
// Calculate Total Inventory Value
// ========================================
function calculateTotalValue(products) {
    return products.reduce((total, product) => total + product.price * product.stock, 0);
}
// ========================================
// Count Low Stock Products
// ========================================
function countLowStock(products, threshold) {
    return products.filter(product => product.stock <= threshold).length;
}
// ========================================
// Find Product by ID or Name
// Union Type + Narrowing
// ========================================
function findProduct(search) {
    if (typeof search === "number") {
        return productRepository.findById(search);
    }
    return productRepository
        .getAll()
        .find(product => product.name.toLowerCase() === search.toLowerCase());
}
// ========================================
// Load Products from API
// ========================================
async function loadProducts() {
    const products = await getProducts();
    products.forEach(product => {
        productRepository.add(product);
    });
    console.log(productRepository.getAll());
    console.log("Total Value:", calculateTotalValue(productRepository.getAll()));
    console.log("Low Stock:", countLowStock(productRepository.getAll(), 5));
}
// ========================================
// strictNullChecks Example
// ========================================
const productList = document.getElementById("productList");
if (productList !== null) {
    productList.textContent = "Products loaded";
}
// Load page data
loadProducts();
