import { isRedirect, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ locals }) => {
        try {
            await locals.session.destroy();
            redirect(302, '/');

        } catch (e) {
            if (isRedirect(e)) throw e;

            return { error: error.message };
        }
    }
};
