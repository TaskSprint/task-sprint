import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';
import { Providers } from '@/providers';
import AppLayout from '@/Layouts/AppLayout';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ReactNode } from 'react';

const appName = import.meta.env.VITE_APP_NAME ?? 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        );
        page.then((module: any) => {
            module.default.layout =
                module.default.layout ?? ((page: ReactNode) => <AppLayout>{page}</AppLayout>);
        });
        return page;
    },
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }

        createRoot(el).render(
            <LaravelReactI18nProvider
                locale={props.initialPage.props.locale?.current}
                fallbackLocale={'en'}
                files={import.meta.glob('/lang/*.json')}
            >
                <Providers>
                    <App {...props} />
                </Providers>
            </LaravelReactI18nProvider>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});
