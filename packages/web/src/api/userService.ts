import { supabase } from "../lib/supabase";
import { fromDatabaseUser, type User } from "../models/User";

export async function getUserProfile(id: string): Promise<User> {
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        throw error;
    }

    return fromDatabaseUser(data);
}