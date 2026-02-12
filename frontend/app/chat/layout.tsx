'use client';

import { ChatInput } from '@/components/chat-input';

export default function ChatPageLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { threadId: string };
}) {
    return (
        <div className="relative flex h-full w-full flex-col">
            {children}
            <ChatInput />
        </div>
    );
}