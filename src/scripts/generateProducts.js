import { createFakeProduct } from "../utils/createFakeProduct.js";
import { writeProducts } from "../utils/writeProducts.js";
import { readProducts } from "../utils/readProducts.js";

const generateProducts = async (number) => { 
    try {
        const products = await readProducts();
        for (let i = 0; i < number; i++) {
            const product = createFakeProduct();
            products.push(product);
        }
        await writeProducts(products);
        console.log(`Generated ${number} fake products.`);
    } catch (error) { 
        console.error("Error generating products:", error);
    }
};

generateProducts(10);