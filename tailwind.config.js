import defaultTheme from 'tailwindcss/defaultTheme';
import {heroui} from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.{js,ts,jsx,tsx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        fontFamily: {
            kreadon: ['Kreadon', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            fontFamily: {
                sans: ['Manrope', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                muted: '#717171',
            },
        },
    },

    darkMode: 'class',
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
                        primary: '#0090c1',
                    },
                },
            },
        }),
    ],
};
