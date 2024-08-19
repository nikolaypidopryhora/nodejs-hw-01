import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export async function read() {
  return await fs.readFile(PATH_DB, 'utf8');
}

export async function write(data) {
  await fs.writeFile(PATH_DB, data, 'utf8');
}
