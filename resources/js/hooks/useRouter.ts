import { Config, ParameterValue, RouteParams } from 'ziggy-js';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { usePage } from '@inertiajs/react';

export function useRouter() {
    const { currentLocale } = useLaravelReactI18n();
    const router = route();
    const { locale } = usePage().props;

    return {
        route: (
            name: string,
            params?: RouteParams<string> | undefined,
            absolute?: boolean,
            config?: Config,
        ) => {
            const localizedName = `${currentLocale()}.${name}`;
            if (router.has(localizedName)) {
                return route(localizedName, params, absolute, config);
            } else {
                return route(name, params, absolute, config);
            }
        },
        localizedRoute: (
            lang: string,
            name?: string,
            params?: RouteParams<string> | undefined,
            absolute?: boolean,
            config?: Config,
        ) => {
            if (!locale?.available.includes(lang)) {
                throw new Error(`Locale ${lang} is not available`);
            }

            if (!name) {
                const current = new URL(window.location.href);
                const pathSegments = current.pathname.split('/').filter((s) => s);
                if (locale?.available.includes(pathSegments[0])) {
                    pathSegments[0] = lang;
                } else {
                    pathSegments.unshift(lang);
                }

                current.pathname = `/${pathSegments.join('/')}`;
                return current.href;
            } else {
                const localizedName = `${lang}.${name}`;
                return route(localizedName, params, absolute, config);
            }
        },
        current: (name: string, params?: RouteParams<string> | ParameterValue | undefined) => {
            const localizedName = `${currentLocale()}.${name}`;
            if (router.has(localizedName)) {
                return router.current(localizedName, params);
            } else {
                return router.current(name, params);
            }
        },
        has(name: string) {
            const localizedName = `${currentLocale()}.${name}`;
            return router.has(localizedName) || router.has(name);
        },
    };
}
