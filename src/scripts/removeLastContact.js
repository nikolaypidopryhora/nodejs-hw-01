import { read, write } from '../utils/functions.js';

export const removeLastContact = async () => {
  await read()
    .then((data) => {
      try {
        data = JSON.parse(data);
        if (!data.length) {
          console.log('File empty');
          return;
        }
      } catch (err) {
        console.log(err);
      }
      return data.slice(0, -1);
    })
    .then((data) => write(JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error(error));
};

removeLastContact();
