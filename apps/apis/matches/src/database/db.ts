import { Database } from 'newtondb';
import { FileAdapter } from 'newtondb/adapters/file-adapter';
import type { Match } from '@pong/matches';

const path = `${__dirname}/assets/db.json`;
const adapter = new FileAdapter(path);
const db = new Database<Match[]>(adapter, {
  collection: { primaryKey: ['id'] },
  writeOnCommit: true,
});

export { db };
