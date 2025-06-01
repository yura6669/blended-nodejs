import { readProducts } from "../utils/readProducts.js";

const groupProductsByCategories = async () => { 
    try {
        const products = await readProducts();
        const groupedProducts = products.reduce((acc, product) => {
            if (!acc[product.category]) {
                acc[product.category] = [];
            }
            acc[product.category].push(product.name);
            return acc;
        }, {});

        console.log("Products grouped by categories:", groupedProducts);
        return groupedProducts;
    } catch (error) {
        console.error("Error grouping products by categories:", error);
        return {};
    }
}

console.log(await groupProductsByCategories());