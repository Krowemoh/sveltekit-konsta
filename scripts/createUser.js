import 'dotenv/config';

import Database from 'better-sqlite3';
import bcrypt from 'bcrypt';

import { dbInsert } from "../src/lib/dbActions.js";

const db = new Database(process.env.DATABASE);
db.pragma('journal_mode = WAL');

dbInsert(db, "users", {
    username: "admin",
    password: await bcrypt.hash("admin", 10),
});
