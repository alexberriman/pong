import * as http from 'http';
import { app } from './app';

const PORT = process.env['PORT'] || 3335;

const server = http.createServer(app);
server.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
