import { readFile } from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    // console.log(PATH_DB);
    const contents = await readFile(PATH_DB, { encoding: 'utf8' });
    // console.log(JSON.parse(contents));
    return JSON.parse(contents);
  } catch (err) {
    console.error(err.message);
  }
};
// readContacts();
// node src/utils/readContacts.js
