import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, beforeAll, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import App from './App.vue';
import { useUserStore } from './stores/user';
import MainNav from './components/MainNav.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

import { getUserProfile } from '@bake-bet/api';

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
            {
                path: '/home',
                component: { template: '<div />' },
            },
            {
                path: '/markets',
                component: { template: '<div />' },
            },
            {
                path: '/tickets',
                component: { template: '<div />' },
            }
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

    it('should show a spinner while checking session', () => {
        const wrapper = mount(App, {
            global: {
                plugins: [pinia, router],
                components: { MainNav },
                stubs: { 'router-view': true },
            },
        });

        expect(wrapper.find('svg').exists()).toBe(true);
    });

    describe('after session check', () => {

        it('hides the nav when user is not logged in', () => {
            vi.mocked(getUserProfile).mockResolvedValueOnce(null);
            userStore.checkSession();

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
            userStore.checkSession();

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


});