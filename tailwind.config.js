import { heroui } from '@heroui/theme';
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|card|divider|image|input|link|navbar|scroll-shadow|user|ripple|spinner|form|avatar).js"
],

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
