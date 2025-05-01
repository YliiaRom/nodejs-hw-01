import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const newContacts = await readContacts();
    if (!newContacts.length) {
      return;
    }
    newContacts.pop();

    await writeContacts(newContacts);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
//node src/scripts/removeLastContact.js
