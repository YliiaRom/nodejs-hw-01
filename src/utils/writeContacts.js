import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
//--01
// fsPromises.writeFile(file, data[, options])
// const student = {
//   name: 'X',
//   age: 10,
// };
export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), {
      encoding: 'utf-8',
    });
    // return data;
  } catch (error) {
    return console.log(error);
  }
};
//--проверка--02
// writeContacts(student).then((data) => console.log(data));

//  node src/utils/writeContacts.js
