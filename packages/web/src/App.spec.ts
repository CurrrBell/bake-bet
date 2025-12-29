import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import App from './App.vue';
import { useUserStore } from './stores/user';
import MainNav from './components/MainNav.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

describe('App.vue nav visibility', () => {
    let pinia: ReturnType<typeof createPinia>;
    let userStore: ReturnType<typeof useUserStore>;


    const router = createRouter({
        history: createMemoryHistory(),
        routes: [
            {
                path: '/',
                component: { template: '<div />' },
            },
            {
                path: '/bet',
                components: {
                    default: { template: '<div />' },
                    modal: { template: '<div />' },
                },
                meta: { modal: true },
            },
        ],
    });


    beforeAll(async () => {
        await router.push('/bet');
        await router.isReady();
    })

    beforeEach(() => {
        pinia = createPinia();
        setActivePinia(pinia);
        userStore = useUserStore();
    });

    it('hides the nav when user is not logged in', () => {
        const wrapper = mount(App, {
            global: {
                plugins: [pinia, router],
                components: { MainNav },
                stubs: { 'router-view': true },
            },
        });

        expect(wrapper.find('nav').exists()).toBe(false);
    });

    it('shows the nav when user is logged in', async () => {
        const wrapper = mount(App, {
            global: {
                plugins: [pinia, router],
                components: { MainNav },
                stubs: { 'router-view': true }
            },
        });

        await userStore.signIn('test@test.com', 'password1234');

        expect(wrapper.find('nav').exists()).toBe(true);
    });
});