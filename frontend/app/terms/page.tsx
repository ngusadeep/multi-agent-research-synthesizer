import { Footer } from '@/components/footer';
import { MarkdownContent } from '@/components/thread/components/markdown-content';
import { termsMdx } from '@/lib/config';

export default function TermsPage() {
    return (
        <div className="mx-auto flex max-w-screen-md flex-col gap-16 px-4 py-8">
            <MarkdownContent content={termsMdx} />
            <Footer />
        </div>
    );
}
