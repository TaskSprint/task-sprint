import * as React from 'react';
import { useMemo } from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
    As,
    ButtonProps,
    cn,
    forwardRef,
    ScrollShadow,
    ScrollShadowVisibility,
} from '@heroui/react';
import Button from '@/Components/Shared/Button';
import { useDOMRef } from '@heroui/react-utils';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
    const context = React.useContext(CarouselContext);

    if (!context) {
        throw new Error('useCarousel must be used within a <Carousel />');
    }

    return context;
}

const Carousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
        {
            ...opts,
            axis: orientation === 'horizontal' ? 'x' : 'y',
        },
        plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
        if (!api) {
            return;
        }

        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
        api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                scrollNext();
            }
        },
        [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
        if (!api || !setApi) {
            return;
        }

        setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        onSelect(api);
        api.on('reInit', onSelect);
        api.on('select', onSelect);

        return () => {
            api?.off('select', onSelect);
        };
    }, [api, onSelect]);

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api: api,
                opts,
                orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
            }}
        >
            <div
                ref={ref}
                onKeyDownCapture={handleKeyDown}
                className={cn('relative', className)}
                role="region"
                aria-roledescription="carousel"
                {...props}
            >
                {children}
            </div>
        </CarouselContext.Provider>
    );
});
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const { carouselRef, orientation, canScrollPrev, canScrollNext } = useCarousel();
        const visibility = useMemo(() => {
            let visibility: ScrollShadowVisibility = 'none';

            if (canScrollPrev && canScrollNext) {
                visibility = 'both';
            } else if (canScrollPrev) {
                visibility = orientation === 'horizontal' ? 'left' : 'top';
            } else if (canScrollNext) {
                visibility = orientation === 'horizontal' ? 'right' : 'bottom';
            }

            return visibility;
        }, [canScrollPrev, canScrollNext, orientation]);

        return (
            <ScrollShadow
                className="overflow-hidden"
                ref={carouselRef}
                visibility={visibility}
                orientation={orientation ?? 'horizontal'}
            >
                <div
                    ref={ref}
                    className={cn(
                        'flex',
                        orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
                        className,
                    )}
                    {...props}
                />
            </ScrollShadow>
        );
    },
);
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const { orientation } = useCarousel();

        return (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    'min-w-0 shrink-0 grow-0 basis-full',
                    orientation === 'horizontal' ? 'pl-4' : 'pt-4',
                    className,
                )}
                {...props}
            />
        );
    },
);
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = forwardRef<typeof Button, ButtonProps>(
    ({ className, variant = 'bordered', ...props }, ref) => {
        const domRef = useDOMRef(ref);
        const { orientation, scrollPrev, canScrollPrev } = useCarousel();
        const Component: As = Button;

        return (
            <Component
                ref={domRef}
                variant={variant}
                className={cn(
                    'absolute h-8 w-8 min-w-fit rounded-full p-0 disabled:hidden',
                    orientation === 'horizontal'
                        ? 'top-1/2 left-0 -translate-y-1/2'
                        : 'top-0 left-1/2 -translate-x-1/2 rotate-90',
                    className,
                )}
                disabled={!canScrollPrev}
                onPress={scrollPrev}
                {...props}
            >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
            </Component>
        );
    },
);
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = forwardRef<typeof Button, ButtonProps>(
    ({ className, variant = 'bordered', ...props }, ref) => {
        const domRef = useDOMRef(ref);
        const { orientation, scrollNext, canScrollNext } = useCarousel();
        const Component: As = Button;

        return (
            <Component
                ref={domRef}
                variant={variant}
                className={cn(
                    'absolute h-8 w-8 min-w-fit rounded-full p-0 disabled:hidden',
                    orientation === 'horizontal'
                        ? 'top-1/2 right-0 -translate-y-1/2'
                        : 'bottom-0 left-1/2 -translate-x-1/2 rotate-90',
                    className,
                )}
                disabled={!canScrollNext}
                onPress={scrollNext}
                {...props}
            >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
            </Component>
        );
    },
);
CarouselNext.displayName = 'CarouselNext';

export {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
};
