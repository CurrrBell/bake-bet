<template>
    <nav>nav</nav>
    <main>
        <RouterView />
    </main>
</template>
<script setup lang="ts">
    import { RouterView } from 'vue-router';
</script>
<style scoped>
    nav {
        grid-area: nav
    }

    main {
        grid-area: main
    }
</style>
