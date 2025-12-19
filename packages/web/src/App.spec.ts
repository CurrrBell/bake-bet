import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import App from './App.vue';
import { useUserStore } from './stores/user';

describe('App.vue nav visibility', () => {
    let pinia: ReturnType<typeof createPinia>;
    let userStore: ReturnType<typeof useUserStore>;

    beforeEach(() => {
        pinia = createPinia();
        setActivePinia(pinia);
        userStore = useUserStore();
    });

    it('hides the nav when user is not logged in', () => {
        const wrapper = mount(App, {
            global: {
                plugins: [pinia]
            },
            shallow: true
        });

        expect(wrapper.find('nav').exists()).toBe(false);
    });

    it('shows the nav when user is logged in', async () => {
        await userStore.login('u1', 'Test User', 1000);

        const wrapper = mount(App, {
            global: {
                plugins: [pinia]
            },
            shallow: true
        });

        expect(wrapper.find('nav').exists()).toBe(true);
    });
});