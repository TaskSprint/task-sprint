import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import ReactDOMServer from 'react-dom/server';
// noinspection ES6PreferShortImport
import { route } from '../../vendor/tightenco/ziggy/';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';
import { Providers } from '@/providers';
import { ReactNode } from 'react';
import AppLayout from '@/Layouts/AppLayout';

const appName = import.meta.env.VITE_APP_NAME ?? 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => {
            const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
            let page: any = pages[`./Pages/${name}.tsx`];
            page.default.layout =
                page.default.layout ?? ((page: ReactNode) => <AppLayout>{page}</AppLayout>);
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
