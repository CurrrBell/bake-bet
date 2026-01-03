import { supabase } from "./supabase";
import type { DatabaseUser } from "./types/DatabaseUser";
import { getUserProfile } from "./userService";

export {
    type DatabaseUser,
    getUserProfile,
    supabase,
};