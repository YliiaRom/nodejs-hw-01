import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), {
      encoding: 'utf-8',
    });
  } catch (error) {
    return console.log(error);
  }
};

//  node src/utils/writeContacts.js
