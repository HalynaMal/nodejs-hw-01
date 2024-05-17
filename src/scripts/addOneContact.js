import { PATH_DB } from '../constants/contacts.js';
import {createFakeContact} from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const addOneContact = async () => {
    try {
        const contacts = JSON.parse(await fs.readFile(PATH_DB));
        const newContact = createFakeContact();
        contacts.push(newContact);
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    } catch (error) {
console.log(error);
    }
};

await addOneContact();
