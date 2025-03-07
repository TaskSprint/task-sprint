import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';
import { HeroUIProvider } from '@heroui/react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }

        createRoot(el).render(
            <LaravelReactI18nProvider
                fallbackLocale={'en'}
                files={import.meta.glob('/lang/*.json')}
            >
                <HeroUIProvider>
                    <App {...props} />
                </HeroUIProvider>
            </LaravelReactI18nProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
