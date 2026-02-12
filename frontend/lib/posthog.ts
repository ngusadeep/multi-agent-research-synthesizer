// Server-side PostHog removed (backend stripped)

export enum EVENT_TYPES {
    WORKFLOW_SUMMARY = 'workflow_summary',
}

export type PostHogEvent = {
    event: EVENT_TYPES;
    userId: string;
    properties: Record<string, any>;
};

export const posthog = {
    capture: (_event: PostHogEvent) => {
        // no-op: server-side analytics removed
    },
    flush: () => {
        // no-op
    },
};
