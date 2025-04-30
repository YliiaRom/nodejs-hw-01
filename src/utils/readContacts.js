import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const filePath = resolve(PATH_DB);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    return JSON.parse(contents);
  } catch (err) {
    console.error(err.message);
  }
};

// node src/utils/readContacts.js
