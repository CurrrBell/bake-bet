import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useUserStore } from '../user'

describe('user store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('logs in a user asynchronously', async () => {
        const store = useUserStore();

        await store.logIn('u1', 'Test User', 1000);

        expect(store.isLoggedIn).toBe(true);
    });

    it('logs a user out properly', async () => {
        const store = useUserStore();

        await store.logIn('u1', 'Test User', 1000);
        await store.logOut();

        expect(store.isLoggedIn).toBe(false);
    })
});
