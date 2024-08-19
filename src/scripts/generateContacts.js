import { createFakeContact } from '../utils/createFakeContact.js';
import { read, write } from '../utils/functions.js';

const generateContacts = async (number) => {
  const newContacts = Array.from({ length: number }, () => createFakeContact());

  await read()
    .then((data) => {
      try {
        data = JSON.parse(data);
      } catch (err) {
        console.log(err);
      }
      return [...data, ...newContacts];
    })
    .then((data) => write(JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error(error));
};

generateContacts(5);
