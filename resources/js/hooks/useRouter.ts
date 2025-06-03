import { usePage } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { useMemo } from 'react';
import { Config, ParameterValue, RouteParams, ValidRouteName } from 'ziggy-js';

export interface LocalizedRoute {
    <T extends ValidRouteName = string>(
        lang: string,
        name?: T,
        params?: RouteParams<T> | undefined,
        absolute?: boolean,
        config?: Config,
    ): string | undefined;

    <T extends ValidRouteName = string>(
        lang: string,
        name?: T,
        params?: ParameterValue | undefined,
        absolute?: boolean,
        config?: Config,
    ): string | undefined;
}

export function useRouter() {
    const { currentLocale } = useLaravelReactI18n();
    const router = route();
    const { locale, ziggy } = usePage().props;

    const routeCallback = (
        name?: string,
        params?: RouteParams<string> | undefined,
        absolute?: boolean,
        config?: Config,
    ) => {
        if (!name) {
            return router;
        }

        const localizedName = `${currentLocale()}.${name}`;
        if (router.has(localizedName)) {
            return route(localizedName, params, absolute, config);
        } else {
            return route(name, params, absolute, config);
        }
    };

    const currentLocation = new URL(ziggy.location);

    const relativeCurrent = useMemo(() => {
        const current = router.current();
        if (!current) {
            return;
        }

        const currentParts = current.split('.');
        if (locale?.available.includes(currentParts[0])) {
            return currentParts.slice(1).join('.');
        }
        return current;
    }, [router, locale?.available]);

    const urlWithoutLocale = (url: string | URL) => {
        const current = new URL(url, ziggy.url);
        const pathSegments = current.pathname.split('/').filter((s) => s);

        if (locale?.available.includes(pathSegments[0])) {
            pathSegments.shift();
        }

        current.pathname = `/${pathSegments.join('/')}`;
        return current.href;
    };

    const localizedRoute = (
        lang: string,
        name?: string,
        params?: RouteParams<string> | undefined,
        absolute?: boolean,
        config?: Config,
    ) => {
        if (!locale?.available.includes(lang)) {
            throw new Error(`Locale ${lang} is not available`);
        }

        let current = name ?? router.current();
        if (!current) {
            const current = currentLocation;
            const pathSegments = current.pathname.split('/').filter((s) => s);

            if (locale?.available.includes(pathSegments[0])) {
                pathSegments[0] = lang;
            } else {
                pathSegments.unshift(lang);
            }

            current.pathname = `/${pathSegments.join('/')}`;

            return current.href;
        }

        const currentParts = current.split('.');

        if (locale?.available.includes(currentParts[0])) {
            current = currentParts.slice(1).join('.');
        }

        const localizedName = `${lang}.${current}`;
        const newName = router.has(localizedName) ? localizedName : current;

        return route(newName, params ?? router.params, absolute, config);
    };

    const current = (name?: string, params?: RouteParams<string> | ParameterValue | undefined) => {
        if (!name) {
            return router.current();
        }

        const localizedName = `${currentLocale()}.${name}`;
        if (router.has(localizedName)) {
            return router.current(localizedName, params);
        } else {
            return router.current(name, params);
        }
    };

    const has = (name: string) => {
        const localizedName = `${currentLocale()}.${name}`;
        return router.has(localizedName) || router.has(name);
    };

    return {
        router,
        urlWithoutLocale,
        currentLocation,
        relativeCurrent,
        route: routeCallback as typeof route,
        localizedRoute: localizedRoute as LocalizedRoute,
        current: current as typeof router.current,
        has: has as typeof router.has,
    };
}
