import { readProducts } from "../utils/readProducts.js";

const getUniqueCategories = async () => { 
    try {
        const products = await readProducts();
        const uniqueCategories = new Set(products.map(product => product.category));
        console.log(`Unique categories found: ${Array.from(uniqueCategories).join(', ')}`);
        return Array.from(uniqueCategories);
    } catch (error) {
        console.error("Error fetching unique categories:", error);
        return [];
    }
};

console.log(await getUniqueCategories());