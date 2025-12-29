<template>
<div class="login">
    <div class="card">
        <header>
            <h1>BakeBet</h1>
            <h3>Bet fake currency on The Great British Bake Off</h3>
        </header>

        <form @submit.prevent="signInUser">
            <fieldset :disabled="isSigningIn">
                <h3>Sign {{ hasAccount ? 'In' : 'Up' }}</h3>

                <input v-model="email"
                       label="Email"
                       type="email"
                       placeholder="Email" />

                <input v-model="password"
                       label="Password"
                       type="password"
                       placeholder="Password" />

                <button class="primary"
                        type="submit"
                        :disabled="!email.trim()">{{ buttonText }}</button>
            </fieldset>

        </form>

        <button v-if="hasAccount"
                :disabled="isSigningIn"
                @click="() => hasAccount = false">Sign up</button>
        </div>
        </div>
</template>
<script setup lang="ts">

    import { computed, ref } from 'vue';
    import { useUserStore } from '../stores/user';
    import router from '../router';

    const email = ref('');
    const password = ref('');
    const hasAccount = ref(true);
    const isSigningIn = ref(false);

    const buttonText = computed(() => {
        if (isSigningIn.value) return 'Signing In...';

        return `Sign ${hasAccount ? 'In' : 'Up'}`;
    })

    const { signIn, signUp } = useUserStore();

    function signInUser() {
        isSigningIn.value = true;
        const auth = hasAccount.value ? signIn : signUp;

        auth(email.value, password.value)
            .then(() => router.push('/home'));
    }

</script>
<style scoped>
   .login {
       height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center
    }

  .card,
   fieldset {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }
</style>