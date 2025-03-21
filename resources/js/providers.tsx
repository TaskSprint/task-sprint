import { HeroUIProvider } from '@heroui/system';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <HeroUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </NextThemesProvider>
        </HeroUIProvider>
    );
}
