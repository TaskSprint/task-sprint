import React, { useEffect, useState } from 'react';
import { cn } from '@heroui/react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './Shared/Carousel';
import Button from '@/Components/Shared/Button';
import { addDays, startOfDay } from 'date-fns';
import { usePage } from '@inertiajs/react';

export default function DateSelector() {
    const [offset, setOffset] = useState(0);
    const [selectedDate, setSelectedDate] = useState(startOfDay(addDays(new Date(), 1)));
    const [api, setApi] = useState<CarouselApi>();
    const { locale } = usePage().props;

    const days = Array.from({ length: (offset + 1) * 30 }, (_, i) =>
        startOfDay(addDays(new Date(), i)),
    );

    const changeOffset = (newOffset: number) => {
        if (newOffset >= 0) {
            setOffset(newOffset);
        }
    };

    useEffect(() => {
        if (api) {
            const handleScroll = () => {
                const lastSlide = api.slideNodes().length - 1;
                const isLastSlide = api.slidesInView().indexOf(lastSlide) !== -1;
                if (isLastSlide) {
                    changeOffset(offset + 1);
                }
            };
            api.on('slidesInView', handleScroll);
            return () => {
                api.off('slidesInView', handleScroll);
            };
        }
    }, [api, days, offset, changeOffset]);

    return (
        <div className="@container flex w-full justify-center">
            <div className="w-full max-w-4xl @[52rem]:px-13">
                <Carousel setApi={setApi}>
                    <CarouselContent className="-ml-5">
                        {days.map((date) => (
                            <CarouselItem
                                key={date.getTime()}
                                className="pl-5 @[18rem]:basis-1/2 @sm:basis-1/3 @lg:basis-1/4 @2xl:basis-1/5 @[52rem]:basis-1/6"
                            >
                                <Button
                                    onPress={() => setSelectedDate(date)}
                                    variant="bordered"
                                    className={cn(
                                        'flex aspect-square h-fit w-full cursor-pointer flex-col items-center justify-center rounded-xl transition',
                                        selectedDate.getTime() === date.getTime() &&
                                            'border-none bg-cyan-400 text-white',
                                    )}
                                >
                                    <span className="text-sm leading-none capitalize opacity-60">
                                        {date.toLocaleDateString(locale?.current, {
                                            month: 'long',
                                        })}
                                    </span>
                                    <span className="text-3xl leading-none font-bold">
                                        {date.toLocaleDateString(locale?.current, {
                                            day: 'numeric',
                                        })}
                                    </span>
                                    <span className="text-sm leading-none capitalize">
                                        {date.toLocaleDateString(locale?.current, {
                                            weekday: 'long',
                                        })}
                                    </span>
                                </Button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious
                        className="@[52rem]:-left-12 @[52rem]:disabled:flex"
                        variant="solid"
                        color="primary"
                    />
                    <CarouselNext
                        className="@[52rem]:-right-12 @[52rem]:disabled:flex"
                        variant="solid"
                        color="primary"
                    />
                </Carousel>
            </div>
        </div>
    );
}
