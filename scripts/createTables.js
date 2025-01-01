import 'dotenv/config';

import Database from 'better-sqlite3';
import { dbCreate } from "../src/lib/dbActions.js";

const db = new Database(process.env.DATABASE);
db.pragma('journal_mode = WAL');

function main() {
    let table;

    table = {
        username: "",
        password: "",
    }

    dbCreate(db, "users", table);
}

main();
