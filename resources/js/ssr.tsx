import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { route, RouteName } from 'ziggy-js';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';
import { HeroUIProvider } from '@heroui/react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
        setup: ({ App, props }) => {
            /* eslint-disable */
            // @ts-expect-error
            global.route<RouteName> = (name, params, absolute) =>
                route(name, params as any, absolute, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });
            /* eslint-enable */

            return (
                <LaravelReactI18nProvider
                    fallbackLocale={'en'}
                    files={import.meta.glob('/lang/*.json', { eager: true })}
                >
                    <HeroUIProvider>
                        <App {...props} />
                    </HeroUIProvider>
                </LaravelReactI18nProvider>
            );
        },
    }),
);
