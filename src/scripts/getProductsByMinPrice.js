import { readProducts } from "../utils/readProducts.js";

const getProductsByMinPrice = async (minPrice) => { 
    try {
        const products = await readProducts();
        const filteredProducts = products.filter(product => parseFloat(product.price) >= minPrice);
        if (filteredProducts.length === 0) {
            console.log(`No products found with a price greater than or equal to ${minPrice}.`);
            return [];
        } else {
            console.log(`Found ${filteredProducts.length} products with a price greater than or equal to ${minPrice}.`);
            return filteredProducts;
        }
    } catch (error) {
        console.error("Error fetching products by minimum price:", error);
        return [];
    }
};

console.log(await getProductsByMinPrice(500));