import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const dataContacts = await readContacts();
    return dataContacts.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
//npm run count
