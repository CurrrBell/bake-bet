import { vi } from 'vitest';

vi.mock('./src/lib/supabase.ts', () => {
    const mockUser = {
        id: 'u1',
        userName: 'tentbaker',
        displayName: 'Tent Baker',
        balance: 124.5,
        createdAt: '2024-09-01',
    };
    const single = vi.fn(() => ({ data: mockUser }));
    const eq = vi.fn(() => ({ single }));
    const select = vi.fn(() => ({ eq }));
    const from = vi.fn(() => ({ select }));

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
                getSession: vi.fn(() => ({
                    data: { session: { user: mockUser } },
                    error: null
                })),
                onAuthStateChange: vi.fn()
            },
            from,
        },
    };
})