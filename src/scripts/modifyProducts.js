import { readProducts } from "../utils/readProducts.js";
import { writeProducts } from "../utils/writeProducts.js";

const modifyProducts = async () => { 
    try {
        const products = await readProducts();
        const modifiedProducts = products.map(product => {
            const { description, ...rest } = product;
            return rest;
        });
        await writeProducts(modifiedProducts);
        console.log("Removed description from all products.");
    } catch (error) { 
        console.error("Error modifying products:", error);
    }
};

modifyProducts();