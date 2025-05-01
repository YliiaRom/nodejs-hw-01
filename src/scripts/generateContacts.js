import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const prevContacts = await readContacts();

    let contacts = [];
    for (let i = 0; i < number; i++) {
      let user = createFakeContact();
      contacts.push(user);
    }
    const newContacts = [...prevContacts, ...contacts];
    await writeContacts(newContacts);

    return contacts;
  } catch (error) {
    console.log(error);
  }
};
generateContacts(5);

//node src/scripts/generateContacts.js
