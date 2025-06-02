import { InertiaNuqsAdapter } from '@/Components/Adapters/InertiaNuqsAdapter';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { router } from '@inertiajs/react';
import { RouterOptions } from '@react-types/shared';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <InertiaNuqsAdapter>
            <HeroUIProvider
                navigate={(path: string, options?: RouterOptions) => router.visit(path, options)}
            >
                <ToastProvider placement="top-center" toastOffset={80} />
                <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </NextThemesProvider>
            </HeroUIProvider>
        </InertiaNuqsAdapter>
    );
}
