import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ToastProvider } from '@heroui/toast';
import { router } from '@inertiajs/react';
import { useCallback } from 'react';
import { RouterOptions } from '@react-types/shared';

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
    const navigate = useCallback((path: string, options?: RouterOptions) => {
        console.log(path, options);
        router.visit(path, {
            ...options,
            preserveScroll: true,
            preserveState: true,
        });
    }, []);

    return (
        <HeroUIProvider navigate={navigate}>
            <ToastProvider />
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </NextThemesProvider>
        </HeroUIProvider>
    );
}
