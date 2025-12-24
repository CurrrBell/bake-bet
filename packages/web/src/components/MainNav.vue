

<template>
   <nav class="main-nav"
         aria-label="Main Navigation">
        <ul>
           <li>
                <router-link to="/home">Home</router-link>
            </li>
            <li>
                <router-link to="/markets">Markets</router-link>
            </li>
            <li>
                <router-link to="/tickets">Tickets</router-link>
            </li>
        </ul>
       <div class="main-nav__right">
           <div>
                <currency-icon />
                {{ user.balance }}
           </div>

            <bet-bake-menu>
                <template v-slot:trigger="{ toggle }">
                    <span @click="toggle">{{ user.userName }}</span>
                </template>
                <template v-slot:menu>
                   <router-link to="/profile">Profile</router-link>
                   settings
                    <hr>
                    log out
                </template>
            </bet-bake-menu>
        </div>
    </nav>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/user';
import CurrencyIcon from './CurrencyIcon.vue';
import BetBakeMenu from './BetBakeMenu.vue';

const { user } = storeToRefs(useUserStore());

</script>
<style scoped>
.main-nav {
    display: flex;
        justify-content: space-between;
    background-color: var(--color-surface);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    padding: 1rem 1rem;
}


ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
}
.main-nav__right {
    display: flex;
    gap: var(--space-lg);
    align-items: center;
}
</style>