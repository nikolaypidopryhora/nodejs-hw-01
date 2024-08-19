import { read } from '../utils/functions.js';

export const getAllContacts = async () => {
  return await read()
    .then((data) => {
      try {
        data = JSON.parse(data);
      } catch (err) {
        console.log(err);
      }
      return data;
    })
    .catch((error) => console.error(error));
};

console.log(await getAllContacts());
