import Database from "better-sqlite3";

const db = new Database("database.db");

const createTable = `
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL
  );
`;

db.prepare(createTable).run();

export default db;