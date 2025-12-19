import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/user';

import LoginView from './views/LoginView.vue';
import HomeView from './views/HomeView.vue';
// import BetView from './views/BetView.vue'
// import LeaderboardView from './views/LeaderboardView.vue'
// import ProfileView from './views/ProfileView.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
        beforeEnter: (to, from, next) => {
            const userStore = useUserStore()
            if (userStore?.isLoggedIn) {
                next({ name: 'Home' })
            } else {
                next()
            }
        }
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
        meta: { requiresAuth: true }
    },
    //   {
    //     path: '/bet/:contestantId?',
    //     name: 'Bet',
    //     component: BetView,
    //     meta: { requiresAuth: true }
    //   },
    //   {
    //     path: '/leaderboard',
    //     name: 'Leaderboard',
    //     component: LeaderboardView,
    //     meta: { requiresAuth: true }
    //   },
    //   {
    //     path: '/profile',
    //     name: 'Profile',
    //     component: ProfileView,
    //     meta: { requiresAuth: true }
    //   },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/home'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();

    if (to.meta.requiresAuth && !userStore?.isLoggedIn) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;