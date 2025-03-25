import SolarSunBold from '~icons/solar/sun-bold';
import SolarMoonLinear from '~icons/solar/moon-linear';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const handleThemeChange = () => {
        if (theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setTheme(mediaQuery.matches ? 'light' : 'dark');
        } else {
            setTheme(theme === 'dark' ? 'light' : 'dark');
        }
    };

    return (
        <button
            onClick={handleThemeChange}
            className="hover:text-muted h-full cursor-pointer transition-colors duration-200"
        >
            <SolarSunBold className="hidden size-full dark:block" />
            <SolarMoonLinear className="size-full dark:hidden" />
        </button>
    );
}
