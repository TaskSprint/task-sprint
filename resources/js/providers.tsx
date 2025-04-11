import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { router } from '@inertiajs/react';

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <HeroUIProvider navigate={router.visit}>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </NextThemesProvider>
        </HeroUIProvider>
    );
}
