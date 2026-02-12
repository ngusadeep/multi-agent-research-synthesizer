'use client';

import { Button } from '@/components/ui';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IconX } from '@tabler/icons-react';

export default function SignUpPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // TODO: Implement your own sign-up logic here
        // For now, redirect to chat
        router.push('/chat');
    };

    return (
        <div className="bg-secondary/95 fixed inset-0 z-[100] flex h-full w-full flex-col items-center justify-center gap-2 backdrop-blur-sm">
            <div className="bg-background relative flex w-[360px] flex-col items-center gap-6 rounded-xl border p-6 shadow-lg">
                <Button
                    onClick={() => router.push('/chat')}
                    variant="ghost"
                    size="icon-sm"
                    className="absolute right-2 top-2"
                >
                    <IconX className="h-4 w-4" />
                </Button>

                <h2 className="text-muted-foreground/70 text-center text-[24px] font-semibold leading-tight">
                    Create an account <br /> for advanced research
                </h2>

                <form onSubmit={handleSignUp} className="flex w-full flex-col gap-3">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="border-border bg-secondary text-foreground placeholder:text-muted-foreground w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="border-border bg-secondary text-foreground placeholder:text-muted-foreground w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        className="border-border bg-secondary text-foreground placeholder:text-muted-foreground w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/30"
                    />

                    {error && <p className="text-center text-xs text-rose-400">{error}</p>}

                    <Button type="submit" variant="default" size="sm" className="w-full">
                        Sign up
                    </Button>
                </form>

                <p className="text-muted-foreground text-center text-sm">
                    Already have an account?{' '}
                    <a href="/sign-in" className="text-foreground underline underline-offset-2">
                        Sign in
                    </a>
                </p>

                <div className="text-muted-foreground/50 w-full text-center text-xs">
                    By using this app, you agree to the{' '}
                    <a href="/terms" className="hover:text-foreground underline">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="hover:text-foreground underline">
                        Privacy Policy
                    </a>
                </div>

                <Button variant="ghost" size="sm" className="w-full" onClick={() => router.push('/chat')}>
                    Close
                </Button>
            </div>
        </div>
    );
}
