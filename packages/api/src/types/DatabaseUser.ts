export interface DatabaseUser {
    id: string;
    display_name: string | null;
    user_name: string;
    balance: number;
    created_at: string | null;
}