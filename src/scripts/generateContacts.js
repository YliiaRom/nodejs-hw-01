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
//проверка
// generateContacts(5).then((contacts) => console.log(contacts));
//node generateContacts.js
