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

