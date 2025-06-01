import { PATH_DB } from "../constants/products.js";
import fs from 'fs/promises';

export const writeProducts = async (products) => { 
    const json = JSON.stringify(products, null, 2);
    await fs.writeFile(PATH_DB, json, 'utf-8');
};