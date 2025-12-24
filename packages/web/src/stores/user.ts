import { StorageSerializers, useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed } from "vue";
import type { User } from "../models/User";

export const useUserStore = defineStore('user', () => {
    const user = useStorage<User>('currentUser', null, undefined, { serializer: StorageSerializers.object });   // declare the serializer here bc useStorage can't infer type with null as a default https://vueuse.org/core/useStorage/#custom-serialization

    const isLoggedIn = computed(() => !!user.value?.id);

    async function login(newId: string, newName: string, newBalance: number) {
        Promise.resolve()
            .then(() => user.value = { id: newId, userName: newName, displayName: newName, balance: newBalance, createdAt: Date.now.toString() });
    }

    async function logout() {
        Promise.resolve()
            .then(() => user.value = null);
    }

    return {
        user,
        isLoggedIn,
        login,
        logout
    }
});