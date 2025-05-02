import { PropsWithChildren } from 'react';
import Navigation from '@/Components/Layout/Navigation';
import { Footer } from '@/Components/Layout/Footer';

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <div className="grid min-h-screen w-full grid-cols-1 grid-rows-[auto_1fr_auto]">
            <Navigation />
            <main className="background-gradient flex min-h-[calc(100dvh-var(--spacing-navbar-height))] max-w-screen flex-col items-center justify-center overflow-x-auto">
                {children}
            </main>
            <Footer />
        </div>
    );
}
