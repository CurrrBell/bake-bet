import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import App from './App.vue';
import { useUserStore } from './stores/user';
import MainNav from './components/MainNav.vue';
import { useRouter, useRoute } from 'vue-router';

describe('App.vue nav visibility', () => {
    let pinia: ReturnType<typeof createPinia>;
    let userStore: ReturnType<typeof useUserStore>;
    vi.mock('vue-router', () => ({
        useRoute: vi.fn(),
        useRouter: vi.fn(),
    }));

    beforeEach(() => {
        pinia = createPinia();
        setActivePinia(pinia);
        userStore = useUserStore();
    });

    it('hides the nav when user is not logged in', () => {
        useRoute.mockImplementationOnce();
        const wrapper = mount(App, {
            global: {
                plugins: [pinia],
                components: { MainNav },
                stubs: { 'router-view': true },
            },
        });

        expect(wrapper.find('nav').exists()).toBe(false);
    });

    it('shows the nav when user is logged in', async () => {
        await userStore.login('u1', 'Test User', 1000);

        const wrapper = mount(App, {
            global: {
                plugins: [pinia],
                components: { MainNav },
                stubs: { 'router-view': true }
            },
        });

        expect(wrapper.find('nav').exists()).toBe(true);
    });
});