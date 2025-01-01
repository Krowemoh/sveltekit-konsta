import 'dotenv/config';

import { redirect } from '@sveltejs/kit';
import { handleSession } from '../node_modules/svelte-kit-cookie-session';

import Database from 'better-sqlite3';
const db = new Database(process.env.DATABASE);
db.pragma('journal_mode = WAL');

export const handle = handleSession(
    {
        secret: process.env.SECRET
    }, 
    ({ event, resolve }) => {
        const path = event.url.pathname;
        const session = event.locals.session.data;

        if (path.startsWith("/account") && !session.active) {
            redirect(302, "/login");
        }

        event.locals.db = db;
        return resolve(event);
    }
);
