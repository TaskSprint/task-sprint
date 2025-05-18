import mitt from 'mitt';
import { useEffect, useState } from 'react';
import {
    renderQueryString,
    type unstable_AdapterOptions as AdapterOptions,
    unstable_createAdapterProvider as createAdapterProvider,
} from 'nuqs/adapters/custom';
import { router } from '@inertiajs/react';

export const inertiaNuqsEmitter = mitt<{ update: URLSearchParams; prevent: undefined }>();

function updateUrl(search: URLSearchParams, options: AdapterOptions) {
    inertiaNuqsEmitter.emit('prevent');

    const url = new URL(location.href);
    let token: { cancel: VoidFunction } | undefined = undefined;

    const handlePrevent = () => {
        token?.cancel();
        token = undefined;
        inertiaNuqsEmitter.off('prevent', handlePrevent);
    };
    url.search = renderQueryString(search);
    router.visit(url, {
        replace: options.history === 'replace',
        preserveScroll: !options.scroll,
        preserveState: options.shallow,
        onCancelToken: (newToken) => {
            token = newToken;
            inertiaNuqsEmitter.on('prevent', handlePrevent);
        },
        onFinish: () => {
            inertiaNuqsEmitter.off('prevent', handlePrevent);
            token = undefined;
        },
    });
    inertiaNuqsEmitter.emit('update', search);
}

function useNuqsInertiaAdapter() {
    const [searchParams, setSearchParams] = useState(() => {
        if (typeof location === 'undefined') {
            return new URLSearchParams();
        }
        return new URLSearchParams(location.search);
    });
    useEffect(() => {
        // Popstate event is only fired when the user navigates
        // via the browser's back/forward buttons.
        const onPopState = () => {
            inertiaNuqsEmitter.emit('prevent');
            setSearchParams(new URLSearchParams(location.search));
        };
        inertiaNuqsEmitter.on('update', setSearchParams);
        window.addEventListener('popstate', onPopState);
        return () => {
            inertiaNuqsEmitter.off('update', setSearchParams);
            window.removeEventListener('popstate', onPopState);
        };
    }, []);
    return {
        searchParams,
        updateUrl,
    };
}

export const InertiaNuqsAdapter = createAdapterProvider(useNuqsInertiaAdapter);
