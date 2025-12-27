import { StorageSerializers, useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed } from "vue";
import type { User } from "../models/User";
import { supabase } from '../lib/supabase';


export const useUserStore = defineStore('user', () => {
    const user = useStorage<User>('currentUser', null, undefined, { serializer: StorageSerializers.object });   // declare the serializer here bc useStorage can't infer type with null as a default https://vueuse.org/core/useStorage/#custom-serialization

    const isSignedIn = computed(() => !!user.value?.id);

    async function signUp(email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
            console.error(error);
        } else {
            user.value = data.user;
        }
    }

    async function signIn(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            console.error(error);
        } else {

            user.value = {
                id: data.user.id,
                userName: data.user.email,
                displayName: data.user.email,
                createdAt: data.user.created_at
            };
        }
    }


    async function signOut() {
        await supabase.auth.signOut();

        user.value = null;
    }

    return {
        user,
        isSignedIn,
        signOut,
        signUp,
        signIn,

    }
});