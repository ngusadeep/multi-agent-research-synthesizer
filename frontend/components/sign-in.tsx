'use client';

import { Button } from '@/components/ui';
import { IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type CustomSignInProps = {
    redirectUrl?: string;
    onClose?: () => void;
};

export const CustomSignIn = ({ redirectUrl = '/chat', onClose }: CustomSignInProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!email || !password) {
            setError('Please enter both email and password.');
            setIsLoading(false);
            return;
        }

        // TODO: Implement your own sign-in logic here
        // For now, redirect to chat
        router.push(redirectUrl);
        setIsLoading(false);
    };

    return (
        <>
            <Button
                onClick={() => onClose?.()}
                variant="ghost"
                size="icon-sm"
                className="absolute right-2 top-2"
            >
                <IconX className="h-4 w-4" />
            </Button>
            <div className="flex w-[320px] flex-col items-center gap-6">
                <h2 className="text-muted-foreground/70 text-center text-[24px] font-semibold leading-tight">
                    Sign in to unlock <br /> advanced research tools
                </h2>

                <form onSubmit={handleSignIn} className="flex w-full flex-col gap-3">
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

                    {error && <p className="text-center text-xs text-rose-400">{error}</p>}

                    <Button type="submit" variant="default" size="sm" className="w-full" disabled={isLoading}>
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </Button>
                </form>

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
                <Button variant="ghost" size="sm" className="w-full" onClick={onClose}>
                    Close
                </Button>
            </div>
        </>
    );
};
