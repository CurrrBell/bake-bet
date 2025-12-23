<template>
    <main-nav v-if="isLoggedIn">nav</main-nav>
    <main>
        <template v-if="backgroundRoute">

        </template>

        <router-view v-else />
    </main>
</template>
<script setup lang="ts">
import MainNav from './components/MainNav.vue';
import { RouterView, useRoute } from 'vue-router';

import { useUserStore } from './stores/user';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const route = useRoute();

const backgroundRoute = computed(() => route.meta?.background ?? null);

const { isLoggedIn } = storeToRefs(useUserStore());
</script>
<style scoped>
nav {
    grid-area: nav;
}

main {
    grid-area: main;
}
</style>