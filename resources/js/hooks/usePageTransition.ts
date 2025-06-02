import { useRouter } from '@/hooks/useRouter';
import { router } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';

export function usePageTransition({
    transitionElement,
    segmentIndex,
}: {
    transitionElement?: string;
    segmentIndex?: number;
} = {}) {
    const { urlWithoutLocale } = useRouter();
    const [transitioning, setTransitioning] = useState(false);

    const isItemTransition = useCallback(
        (element?: HTMLElement) =>
            !transitionElement ||
            (element &&
                (element.getAttribute('data-transition') === transitionElement ||
                    element.closest(`[data-transition='${transitionElement}']`))),
        [transitionElement],
    );

    useEffect(() => {
        const startEvent = router.on('start', (event) => {
            const updatedEvent = event as {
                explicitOriginalTarget?: HTMLElement;
            };

            const detailUrl = urlWithoutLocale(event.detail.visit.url);
            const currentUrl = urlWithoutLocale(window.location.href);
            let isTransitioning = detailUrl !== currentUrl;

            if (segmentIndex !== undefined) {
                const current = new URL(currentUrl, window.location.origin);
                const detail = new URL(detailUrl, window.location.origin);
                const currentSegments = current.pathname.split('/').filter((s) => s);
                const detailSegments = detail.pathname.split('/').filter((s) => s);
                let segmentIsTransitioning = false;
                for (let i = 0; i <= segmentIndex; i++) {
                    segmentIsTransitioning ||= currentSegments[i] !== detailSegments[i];
                }
                isTransitioning &&= segmentIsTransitioning;
            }

            if (transitionElement) {
                isTransitioning ||= !!isItemTransition(updatedEvent.explicitOriginalTarget);
            }

            if (
                isTransitioning &&
                urlWithoutLocale(event.detail.visit.url) !== urlWithoutLocale(window.location.href)
            ) {
                setTransitioning(true);
            }
        });
        const finishEvent = router.on('finish', () => setTransitioning(false));

        return () => {
            startEvent();
            finishEvent();
        };
    }, [isItemTransition, segmentIndex, urlWithoutLocale, setTransitioning, transitionElement]);

    return transitioning;
}
