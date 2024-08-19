import { write } from '../utils/functions.js';

export const removeAllContacts = async () => {
  await write(JSON.stringify([])).catch((error) => console.error(error));
};

removeAllContacts();
