import { readProducts } from "../utils/readProducts.js";

const getTotalPrice = async () => { 
    try {
        const products = await readProducts();
        const totalPrice = products.reduce((acc, product) => acc + parseFloat(product.price), 0);
        console.log(`Total price of all products: $${totalPrice.toFixed(2)}`);
        return totalPrice;
    } catch (error) {
        console.error("Error calculating total price:", error);
        return 0;
    }
};

getTotalPrice();