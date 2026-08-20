//1.	Local	Data

const orders = [
    {
        id: 101,
        customer: "Sara",
        status: "Shipped",
        date: "2026-08-01",
        items: [
            { product: "Mouse", price: 20, quantity: 2 }
        ]
    },

    {
        id: 102,
        customer: "Ali",
        status: "Pending",
        date: "2026-08-02",
        items: [
            { product: "Keyboard", price: 35, quantity: 1 },
            { product: "Mouse Pad", price: 10, quantity: 1 }
        ]
    },

    {
        id: 103,
        customer: "Maha",
        status: "Shipped",
        date: "2026-08-03",
        items: [
            { product: "Monitor", price: 120, quantity: 2 }
        ]
    },

    {
        id: 104,
        customer: "Ahmed",
        status: "Cancelled",
        date: "2026-08-04",
        items: [
            { product: "USB Cable", price: 8, quantity: 3 }
        ]
    },

    {
        id: 105,
        customer: "Noor",
        status: "Pending",
        date: "2026-08-05",
        items: [
            { product: "Headphones", price: 60, quantity: 2 }
        ]
    },

    {
        id: 106,
        customer: "Omar",
        status: "Shipped",
        date: "2026-08-06",
        items: [
            { product: "Laptop", price: 450, quantity: 1 },
            { product: "Laptop Bag", price: 30, quantity: 1 }
        ]
    },

    {
        id: 107,
        customer: "Huda",
        status: "Pending",
        date: "2026-08-07",
        items: [
            { product: "Webcam", price: 45, quantity: 1 }
        ]
    },

    {
        id: 108,
        customer: "Salim",
        status: "Shipped",
        date: "2026-08-08",
        items: [
            { product: "Printer", price: 150, quantity: 1 },
            { product: "Ink", price: 25, quantity: 2 }
        ]
    },

    {
        id: 109,
        customer: "Sara",
        status: "Pending",
        date: "2026-08-09",
        items: [
            { product: "Tablet", price: 180, quantity: 1 }
        ]
    },

    {
        id: 110,
        customer: "Ali",
        status: "Cancelled",
        date: "2026-08-10",
        items: [
            { product: "Charger", price: 25, quantity: 2 }
        ]
    },

    {
        id: 111,
        customer: "Maha",
        status: "Shipped",
        date: "2026-08-11",
        items: [
            { product: "Smart Watch", price: 90, quantity: 2 },
            { product: "Watch Strap", price: 15, quantity: 1 }
        ]
    },

    {
        id: 112,
        customer: "Ahmed",
        status: "Pending",
        date: "2026-08-12",
        items: [
            { product: "Speaker", price: 70, quantity: 1 },
            { product: "Microphone", price: 55, quantity: 1 }
        ]
    },

    {
        id: 113,
        customer: "Noor",
        status: "Shipped",
        date: "2026-08-13",
        items: [
            { product: "Phone", price: 300, quantity: 1 }
        ]
    },

    {
        id: 114,
        customer: "Omar",
        status: "Cancelled",
        date: "2026-08-14",
        items: [
            { product: "Power Bank", price: 40, quantity: 2 }
        ]
    },

    {
        id: 115,
        customer: "Huda",
        status: "Pending",
        date: "2026-08-15",
        items: [
            { product: "SSD", price: 80, quantity: 2 },
            { product: "USB Drive", price: 20, quantity: 1 }
        ]
    }
];

function calculateOrderTotal(order) {

    return order.items.reduce((total, item) => {

        return total + (item.price * item.quantity);

    }, 0);
}

console.log("Order 101 Total:", calculateOrderTotal(orders[0]));

// 3. Dashboard Summary Numbers

function updateSummary(currentOrders) {

    const totalRevenue = currentOrders.reduce((total, order) => {

        return total + calculateOrderTotal(order);

    }, 0);


    const pendingCount = currentOrders.filter(
        order => order.status === "Pending"
    ).length;


    const shippedCount = currentOrders.filter(
        order => order.status === "Shipped"
    ).length;


    const cancelledCount = currentOrders.filter(
        order => order.status === "Cancelled"
    ).length;


    const highestOrder = currentOrders.reduce((highest, order) => {

        if (calculateOrderTotal(order) > calculateOrderTotal(highest)) {
            return order;
        }

        return highest;

    }, currentOrders[0]);


    const allOrdersHaveItems = currentOrders.every(
        order => order.items.length > 0
    );


    document.getElementById("totalRevenue").textContent =
        `$${totalRevenue.toFixed(2)}`;

    document.getElementById("pendingCount").textContent =
        pendingCount;

    document.getElementById("shippedCount").textContent =
        shippedCount;

    document.getElementById("cancelledCount").textContent =
        cancelledCount;


    document.getElementById("highestOrder").textContent =
        `${highestOrder.customer} - $${calculateOrderTotal(highestOrder).toFixed(2)}`;


    document.getElementById("itemsCheck").textContent =
        `Every order has items: ${allOrdersHaveItems}`;
}
