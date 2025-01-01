import { isRedirect, redirect } from '@sveltejs/kit';
import bcrypt from "bcrypt";

export const actions = {
    default: async ({ locals, request }) => {
        try {
            const db = locals.db;

            const values = await request.formData();

            const username = values.get('username');
            const password = values.get('password');

            const row = db.prepare('SELECT * FROM users WHERE username = ?').get(username);

            if (!row) {
                return { error: 'Invalid username.' };
            }

            let valid = await bcrypt.compare(password, row.password);
            if (!valid) {
                return { error: 'Invalid password.' };
            }

            await locals.session.set({ active: true, username: username });

            redirect(302,"/");

        } catch (e) {
            if (isRedirect(e)) throw e;

            return { error: error.message };
        }
    }
};
