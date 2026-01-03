import { supabase } from "./supabase";
import type { DatabaseUser } from "./types/DatabaseUser";

export async function getUserProfile(id: string): Promise<DatabaseUser> {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        throw error;
    }

    return data;
}