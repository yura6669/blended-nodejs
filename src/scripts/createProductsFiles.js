import { PATH_FILES_DIR } from "../constants/products.js";
import { readProducts } from "../utils/readProducts.js";
import path from 'node:path';
import fs from 'fs/promises';

const createProductsFiles = async () => { 
    try {
        const products = await readProducts();
        await fs.mkdir(PATH_FILES_DIR, { recursive: true });

        await Promise.all(products.map(async (product) => {
            const fileName = product.name.toLowerCase().replaceAll(' ', '-') + '.json';
            const filePath = path.join(PATH_FILES_DIR, fileName);
            const productData = JSON.stringify(product, null, 2);
            await fs.writeFile(filePath, productData, 'utf-8');
        }));

        console.log("Product files created successfully.");
    } catch (error) {
        console.error("Error creating product files:", error);
    }
}

createProductsFiles();