import { heroui } from '@heroui/theme';
import preset from './vendor/filament/support/tailwind.config.preset';

/** @type {import('tailwindcss').Config} */
export default {
    presets: [preset],
    plugins: [
        heroui({
            themes: {
                light: {
                    colors: {
                        primary: '#00CCFF',
                    },
                },
                dark: {
                    colors: {
                        primary: '#00CCFF',
                    },
                },
            },
        }),
    ],
};
