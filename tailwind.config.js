import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
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
                        primary: '#00CCFF',
                    },
                },
            },
        }),
    ],
};
