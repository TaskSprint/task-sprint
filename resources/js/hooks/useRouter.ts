import {Config, ParameterValue, RouteParams} from "ziggy-js";
import {useLaravelReactI18n} from "laravel-react-i18n";

export function useRouter() {
    const {currentLocale} = useLaravelReactI18n();
    const router = route();

    return {
        route: (name: string, params?: RouteParams<string> | undefined, absolute?: boolean, config?: Config) => {
            const localizedName = `${currentLocale()}.${name}`;
            if (router.has(localizedName)) {
                return route(localizedName, params, absolute, config);
            } else {
                return route(name, params, absolute, config);
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
        }
    }
}
