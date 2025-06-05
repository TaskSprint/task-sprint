declare module 'laravel-react-i18n/vite' {
    import type i18n from 'laravel-react-i18n/dist/vite';
    import { PluginOption } from 'vite';
    export default function (props?: Parameters<typeof i18n>[0]): PluginOption;
}
