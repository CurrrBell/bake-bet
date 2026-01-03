import { supabase } from "./lib/supabase";
import { DatabaseUser } from "./types/DatabaseUser";

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