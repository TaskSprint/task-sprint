import {heroui} from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
export default {
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
