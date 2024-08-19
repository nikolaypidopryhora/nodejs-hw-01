import { createFakeContact } from '../utils/createFakeContact.js';
import { read, write } from '../utils/functions.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();

  await read()
    .then((data) => {
      try {
        data = JSON.parse(data);
      } catch (err) {
        console.log(err);
      }
      return [...data, newContact];
    })
    .then((data) => write(JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error(error));
};

addOneContact();
