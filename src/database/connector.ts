import low from 'lowdb';
import path from 'path';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync(path.join(__dirname, '../../db/example.json'));
const db = low(adapter);

db.defaults({ books: [] }).write();

export default db;
