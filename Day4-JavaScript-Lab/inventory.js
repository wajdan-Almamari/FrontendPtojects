const products = [
    {
        name: "Mouse",
        price: 19.99,
        stock: 15,
        category: "Accessories"
    },

    {
        name: "Keyboard",
        price: 35,
        stock: 5,
        category: "Accessories"
    }
];

const renderProductCard = (product) => {
    return `
        <div class="card">
            <div class="card-body">
                <h5>${product.name}</h5>
                <p>Price: ${product.price}</p>
                <p>Stock: ${product.stock}</p>
                <p>Category: ${product.category}</p>
            </div>
        </div>
    `;
};
