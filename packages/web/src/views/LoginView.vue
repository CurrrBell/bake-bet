<template>
    <div class="login">
        <div class="card">
            <header>
                <h1>BakeBet</h1>
                <h3>Bet fake currency on The Great British Bake Off</h3>
            </header>

            <form @submit.prevent="loginUser">
                <input v-model="username"
                       label="User Name"
                       placeholder="User Name" />
               <button class="primary"
                        type="submit"
                        :disabled="!username.trim()">Sign In</button>
                <button class="secondary"
                        @click="continueAsGuest">Continue as Guest</button>
            </form>
        </div>
    </div>

</template>
<script setup lang="ts">

import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import router from '../router';

const username = ref('');

const { logIn } = useUserStore();

function loginUser() {
    logIn(`user_${Date.now()}`, username.value, 1000)
        .then(() => router.push('/home'));
}

function continueAsGuest() {
    logIn(`guest_${Date.now()}`, 'Guest', 1000)
        .then(() => router.push('/home'));
}

</script>
<style scoped>
.login {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center
}

.card,
form {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}
</style>