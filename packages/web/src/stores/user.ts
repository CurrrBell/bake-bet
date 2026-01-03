import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { fromDatabaseUser, type User } from "../models/User";
import { supabase, getUserProfile } from '@bake-bet/api';


export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);
    const isSignedIn = computed(() => !!user.value?.id);
    const isCheckingSession = ref(false);

    async function getUser(id: string) {
        return fromDatabaseUser(await getUserProfile(id));
    }

    async function checkSession() {
        isCheckingSession.value = true;

        const { data } = await supabase.auth.getSession();
        let session = data.session;

        if (session) {
            user.value = await getUser(session.user.id);
            isCheckingSession.value = false;
        }

        supabase.auth.onAuthStateChange(async (_event, newSession) => {
            session = newSession;

            if (newSession) {
                user.value = await getUser(newSession.user.id);
                isCheckingSession.value = false;
            } else {
                user.value = null;
                isCheckingSession.value = false;
            }
        });
    }

    async function signUp(email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
            console.error(error);
        } else {
            user.value = await getUser(data.user!.id!);
        }
    }

    async function signIn(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            console.error(error);
        } else {
            user.value = await getUser(data.user.id!);
        }
    }

    async function signOut() {
        await supabase.auth.signOut();
        user.value = null;
    }

    return {
        user,
        isSignedIn,
        isCheckingSession,
        checkSession,
        signOut,
        signUp,
        signIn,

    }
});