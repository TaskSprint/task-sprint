import { PropsWithChildren } from 'react';
import Navigation from '@/Components/Layout/Navigation';
import { Footer } from '@/Components/Layout/Footer';
import { usePageTransition } from '@/hooks/usePageTransition';
import { cn } from '@heroui/react';

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
    const transitioning = usePageTransition({ segmentIndex: 0 });

    return (
        <div className="grid min-h-dvh w-full grid-cols-1 grid-rows-[auto_1fr_auto]">
            <Navigation />
            <main className="background-gradient min-h-[calc(100dvh-var(--spacing-navbar-height))] max-w-dvw overflow-x-auto">
                <div
                    className={cn(
                        'flex h-full w-full flex-col items-center justify-center',
                        transitioning ? 'animate-page-fade-out' : 'animate-page-fade-in',
                    )}
                >
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
