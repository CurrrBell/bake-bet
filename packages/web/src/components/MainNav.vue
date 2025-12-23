<template>
    <nav aria-label="Main Navigation">
        <ul>
           <li v-for="route in visibleRoutes">
                <router-link :to="route.path">{{ route.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { routes } from '../router';

const visibleRoutes = computed(() => routes.filter((route) => !route.meta?.modal && route.meta?.requiresAuth))

</script>
<style scoped>
nav {
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
</style>