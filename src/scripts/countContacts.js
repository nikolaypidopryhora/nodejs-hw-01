import { read } from '../utils/functions.js';

export const countContacts = async () => {
  return await read()
    .then((data) => {
      try {
        data = JSON.parse(data);
      } catch (err) {
        console.log(err);
      }
      return data.length;
    })
    .catch((error) => console.error(error));
};

console.log(await countContacts());
