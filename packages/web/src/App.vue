<template>
    <nav v-if="isLoggedIn">nav</nav>
    <main>
        <RouterView />
    </main>
</template>
<script setup lang="ts">
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
            display: flex;
    }
</style>
