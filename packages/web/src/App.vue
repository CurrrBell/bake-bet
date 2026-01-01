<template>
    <div v-if="isCheckingSession"
         class="loading">
        <loading-spinner />
    </div>
    <template v-else>
        <main-nav v-if="isSignedIn">nav</main-nav>
        <main>
            <router-view />

            <div v-if="showModal"
                class="modal-overlay"
                @click.self="closeModal">
                <router-view name="modal" />
            </div>
        </main>
    </template>
</template>
<script setup lang="ts">
    import MainNav from './components/MainNav.vue';
    import { RouterView, useRoute, useRouter } from 'vue-router';
    import { useUserStore } from './stores/user';
    import { storeToRefs } from 'pinia';
    import { computed } from 'vue';
    import LoadingSpinner from './components/LoadingSpinner.vue';

    const route = useRoute();
    const router = useRouter();

    const showModal = computed(() => route.meta?.modal === true);

    const userStore = useUserStore();
    const { isSignedIn, isCheckingSession } = storeToRefs(userStore);

    userStore.checkSession();

    function closeModal() {
        router.back();
    }
</script>
<style scoped>
   nav {
        grid-area: nav;
    }

  main {
        grid-area: main;
        padding: var(--space-xl);
    }

  .modal-overlay {
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

  .loading {
        display: grid;
        place-items: center;
        height: 100vh;
    }
</style>