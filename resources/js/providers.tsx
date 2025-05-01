import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { router } from '@inertiajs/react';
import { RouterOptions } from '@react-types/shared';
import { ReactNode } from 'react';

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <HeroUIProvider
            navigate={(path: string, options?: RouterOptions) => router.visit(path, options)}
        >
            <ToastProvider />
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </NextThemesProvider>
        </HeroUIProvider>
    );
}
