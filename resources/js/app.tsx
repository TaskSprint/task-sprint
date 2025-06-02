import '../css/app.css';
import './bootstrap';

import AppLayout from '@/Layouts/AppLayout';
import { Providers } from '@/providers';
import { createInertiaApp } from '@inertiajs/react';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ReactNode } from 'react';
import { hydrateRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME ?? 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        );
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        page.then((module: any) => {
            module.default.layout =
                module.default.layout ?? ((page: ReactNode) => <AppLayout>{page}</AppLayout>);
        });
        return page;
    },
    setup({ el, App, props }) {
        hydrateRoot(
            el,
            <LaravelReactI18nProvider
                locale={props.initialPage.props.locale?.current}
                fallbackLocale={'en'}
                files={import.meta.glob('/lang/*.json', { eager: true })}
            >
                <Providers>
                    <App {...props} />
                </Providers>
            </LaravelReactI18nProvider>,
        );
    },
    progress: {
        color: '#00CCFF',
    },
});
