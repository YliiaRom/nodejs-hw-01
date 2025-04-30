import { generateContacts } from './generateContacts.js';

export const addOneContact = async () => {
  await generateContacts(1);
};

addOneContact();
//npm run add-one
