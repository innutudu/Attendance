const db = require('./database/init-db');
const stmt = db.prepare("SELECT name FROM sqlite_master WHERE type='table'");
const tables = stmt.all();
console.log('Tables:', tables.map(t => t.name));
stmt.finalize();