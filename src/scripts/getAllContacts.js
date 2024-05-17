import fs  from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    try {
        return JSON.parse(await fs.readFile(PATH_DB));
    } catch (error) {
console.log(error);
    }
};

console.log(await getAllContacts());
