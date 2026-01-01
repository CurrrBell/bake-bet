import { setActivePinia, createPinia } from 'pinia';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useUserStore } from '../user';

describe('user store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        vi.clearAllMocks();
    });

    it('signs in a user asynchronously', async () => {
        const store = useUserStore();

        await store.signIn('test@test.com', 'password1234');

        expect(store.user).toBeTruthy();
    });

    it('signs a user out properly', async () => {
        const store = useUserStore();

        await store.signIn('test@test.com', 'password1234');
        await store.signOut();

        expect(store.user).toBeFalsy();
    })
});
