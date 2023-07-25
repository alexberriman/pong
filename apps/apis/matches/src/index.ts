import * as http from 'http';
import { app } from './app';
import { db } from './database/db';

const PORT = process.env['PORT'] || 3333;

const server = http.createServer(app);
server.listen(PORT, async () => {
  await db.read();
  console.log(`Server is running at http://localhost:${PORT}`);
});
