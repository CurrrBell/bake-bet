<template>
    <v-card class="login-card">
        <v-card-title>Bake Bet</v-card-title>
        <v-card-subtitle>Bet fake currency on The Great British Bake Off</v-card-subtitle>
        <v-card-text>
            <v-form @submit.prevent="loginUser">
                <v-text-field v-model="username"
                              label="Username"
                              variant="outlined"
                              required />

                <v-btn type="submit"
                       class="mb-4"
                       color="primary"
                       block
                       :disabled="!username.trim()">
                    Sign In
                </v-btn>
                <v-btn variant="outlined"
                       block
                       @click="continueAsGuest">
                    Continue as Guest
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>
<script setup lang="ts">

import { ref } from 'vue';
import { VCard, VCardTitle, VCardSubtitle, VCardText, VForm, VTextField, VBtn } from 'vuetify/components';
import { useUserStore } from '../stores/user';
import router from '../router';

const username = ref('');

const { login } = useUserStore();

function loginUser() {
    login(`user_${Date.now}`, username.value, 1000)
        .then(() => router.push({ name: 'Home' }));
    ;
}

function continueAsGuest() {
    login(`guest_${Date.now}`, 'Guest', 1000)
        .then(() => router.push({ name: 'Home' }));
}

</script>
<style scoped>
.login-card {
    margin: auto;
    align-self: center;
}
</style>