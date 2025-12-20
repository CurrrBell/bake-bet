<template>
    <main-nav v-if="isLoggedIn">nav</main-nav>
    <main>
        <router-view />
    </main>
</template>
<script setup lang="ts">
import MainNav from './components/MainNav.vue';
import { RouterView } from 'vue-router';

import { useUserStore } from './stores/user';
import { storeToRefs } from 'pinia';

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