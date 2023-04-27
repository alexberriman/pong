import { Database } from 'newtondb';
import { FileAdapter } from 'newtondb/adapters/file-adapter';
import type { User } from '../types';

const path = `${__dirname}/assets/db.json`;
const adapter = new FileAdapter(path);
const db = new Database<User[]>(adapter, {
  collection: { primaryKey: ['id'] },
  writeOnCommit: true,
});

export { db };
