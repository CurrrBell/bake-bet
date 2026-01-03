import type { DatabaseUser } from "@bake-bet/api";

export interface User {
    id: string;
    userName: string;
    displayName: string;
    balance: number;
    createdAt: string;
}

export function fromDatabaseUser(dbUser: DatabaseUser): User {
    return {
        id: dbUser.id,
        userName: dbUser.user_name,
        displayName: dbUser.display_name ?? '',
        balance: dbUser.balance,
        createdAt: dbUser.created_at ?? '',
    }
}