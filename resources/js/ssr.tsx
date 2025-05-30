import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import ReactDOMServer from 'react-dom/server';
// noinspection ES6PreferShortImport
import { route } from '../../vendor/tightenco/ziggy/';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';
import { Providers } from '@/providers';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import AppLayout from '@/Layouts/AppLayout';
import { ReactNode } from 'react';

const appName = import.meta.env.VITE_APP_NAME ?? 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
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
        setup: ({ App, props }) => {
            /* eslint-disable */
            // @ts-expect-error
            global.route = (name, params, absolute) =>
                route(name, params as any, absolute, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });
            /* eslint-enable */

            return (
                <LaravelReactI18nProvider
                    locale={page.props.locale?.current}
                    fallbackLocale={'en'}
                    files={import.meta.glob('/lang/*.json', { eager: true })}
                >
                    <Providers>
                        <App {...props} />
                    </Providers>
                </LaravelReactI18nProvider>
            );
        },
    }),
);
