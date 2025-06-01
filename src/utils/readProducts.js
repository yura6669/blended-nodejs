import { PATH_DB } from "../constants/products.js";
import fs from 'node:fs';

export const readProducts = async () => { 
    const buffer = await fs.promises.readFile(PATH_DB, 'utf-8');
    if (buffer.length === 0) { 
        return [];
    }
     const products = JSON.parse(buffer);
    return products;
};
