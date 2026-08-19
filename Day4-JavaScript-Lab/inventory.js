// 1. LOCAL DATA
// ------------------------------------------------------------
const products = [
    { name: "Mouse", price: 19.99, stock: 15, category: "Accessories" },
    { name: "Keyboard", price: 35.00, stock: 5, category: "Accessories" },
    { name: "Monitor", price: 120.00, stock: 8, category: "Electronics" },
    { name: "Laptop", price: 650.00, stock: 12, category: "Computers" },
    { name: "Headset", price: 45.00, stock: 6, category: "Accessories" },
    { name: "Webcam", price: 50.00, stock: 20, category: "Electronics" }
];

// 2. RENDERING
// Arrow Function
// ------------------------------------------------------------
const renderProductCard = (product) => {

    return `
        <div class="col-12 col-md-6 col-lg-4 mb-3">

            <div class="card h-100">

                <div class="card-body">

                    <h5 class="card-title">
                        ${product.name}
                    </h5>

                    <p class="card-text">
                        Price: $${product.price.toFixed(2)}
                    </p>

                    <p class="card-text">
                        Stock: ${product.stock}
                    </p>

                    <p class="card-text text-muted">
                        Category: ${product.category}
                    </p>

                </div>

            </div>

        </div>
    `;
};


// Render all products using .map().join("")
function renderProducts(list) {

    document.getElementById("productList").innerHTML =
        list.map(renderProductCard).join("");
}

// ------------------------------------------------------------
// 3. COMPUTED SUMMARY
// ------------------------------------------------------------

// Total Inventory Value
function calculateTotalValue(list) {

    let total = 0;

    for (const product of list) {

        total = total + (product.price * product.stock);

    }

    return total;
}

// Count Low Stock Products
function countLowStock(list) {

    let count = 0;

    for (const product of list) {

        if (product.stock < 10) {

            count = count + 1;

        }
    }

    return count;
}


// Display Summary
function renderSummary() {

    const totalValue = calculateTotalValue(products);

    const lowStockCount = countLowStock(products);

    document.getElementById("totalValue").textContent =
        `$${totalValue.toFixed(2)}`;

    document.getElementById("lowStockCount").textContent =
        lowStockCount;
}

// 4. INTERACTIVE TOGGLE
// ------------------------------------------------------------

let showLowStockOnly = false;

document.getElementById("lowStockBtn")
    .addEventListener("click", function () {

        showLowStockOnly = !showLowStockOnly;

        if (showLowStockOnly) {

            const lowStockProducts = [];

            for (const product of products) {

                if (product.stock < 10) {

                    lowStockProducts.push(product);

                }
            }

            renderProducts(lowStockProducts);

            this.textContent = "Show All Products";

        } else {

            renderProducts(products);

            this.textContent = "Show Low Stock Only";

        }

    });
// ------------------------------------------------------------
// 5. INITIAL RENDER
// ------------------------------------------------------------

renderProducts(products);

renderSummary();
