import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const dataAllContacts = await readContacts();
    return dataAllContacts;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
//npm run get-all
