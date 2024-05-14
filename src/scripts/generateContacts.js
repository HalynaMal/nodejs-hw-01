 // eslint-disable-next-line no-unused-vars
 import { PATH_DB } from '../constants/contacts.js';

// const generateContacts = async (number) => {};

// await generateContacts(5);

const fs = require('fs');
const path = require('path');
const { createFakeContact } = require('./createFakeContact'); // Assuming you have this function defined elsewhere

async function generateContacts(number) {
  const dbFilePath = path.join(__dirname, '../db/db.json');

  // Read existing contacts from db.json (if any)
  let existingContacts = [];
  try {
    const dbFileContent = fs.readFileSync(dbFilePath, 'utf-8');
    existingContacts = JSON.parse(dbFileContent);
  } catch (error) {
    console.error('Error reading existing contacts:', error.message);
  }

  // Generate new fake contacts
  const newContacts = [];
  for (let i = 0; i < number; i++) {
    const fakeContact = createFakeContact(); // Assuming createFakeContact returns a new contact object
    newContacts.push(fakeContact);
  }

  // Add new contacts to existing ones
  const updatedContacts = [...existingContacts, ...newContacts];

  // Write updated contacts back to db.json
  try {
    fs.writeFileSync(dbFilePath, JSON.stringify(updatedContacts, null, 2), 'utf-8');
    console.log(`Added ${number} new contacts to db.json.`);
  } catch (error) {
    console.error('Error writing contacts to db.json:', error.message);
  }
}

// Example usage: generate 5 new contacts
await generateContacts(5);
