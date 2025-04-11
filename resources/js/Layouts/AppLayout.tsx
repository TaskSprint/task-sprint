import { PropsWithChildren } from 'react';
import Navigation from '@/Components/Layout/Navigation';
import { Footer } from '@/Components/Layout/Footer';

export default function AppLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
            <Navigation />
            <main className="background-gradient flex min-h-[calc(100dvh-var(--spacing-navbar-height))] flex-col items-center justify-center">
                {children}
            </main>
            <Footer />
        </div>
    );
}
