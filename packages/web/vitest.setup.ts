import { vi } from 'vitest';


vi.mock('./src/lib/supabase.ts', () => {
    return {
        supabase: {
            auth: {
                signInWithPassword: vi.fn(() => {
                    return {
                        data: {
                            user: { id: 'u1', email: 'test@test.com' },
                        },
                        error: null,
                    }
                }),
                signUp: vi.fn(),
                signOut: vi.fn(),
            },
        },
    };
})