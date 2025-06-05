import Button from '@/Components/Shared/Button';
import { cn, Radio, RadioGroup } from '@heroui/react';
import { usePage } from '@inertiajs/react';
import { addDays, set, startOfDay } from 'date-fns';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { useEffect, useMemo, useState } from 'react';
import { useUncontrolledProp } from 'uncontrollable';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './Shared/Carousel';

interface DateSelectorProps<T extends string | undefined = undefined> {
    name: T;
    errorMessage?: string;
    onClearError?: (name: T) => void;
    value?: Date;
    onValueChange?: (value: Date) => void;
}

export default function DateSelector<T extends string | undefined = undefined>({
    name,
    errorMessage,
    onClearError,
    value,
    onValueChange,
}: Readonly<DateSelectorProps<T>>) {
    const { t } = useLaravelReactI18n();
    const [offset, setOffset] = useState(0);
    const [controlledValue, setControlledValue] = useUncontrolledProp(
        value,
        startOfDay(addDays(new Date(), 1)),
        onValueChange,
    );
    const [api, setApi] = useState<CarouselApi>();
    const { locale } = usePage().props;

    const days = Array.from({ length: (offset + 1) * 30 }, (_, i) =>
        startOfDay(addDays(new Date(), i)),
    );

    const time = useMemo(() => {
        if (controlledValue.getHours() >= 8 && controlledValue.getHours() < 12) {
            return '1-part';
        }
        if (controlledValue.getHours() >= 12 && controlledValue.getHours() < 16) {
            return '2-part';
        }
        if (controlledValue.getHours() >= 16 && controlledValue.getHours() < 22) {
            return '3-part';
        }
        return 'any-time';
    }, [controlledValue]);

    const handleDateChange = (date: Date) => {
        onClearError?.(name);
        setControlledValue(
            set(date, {
                hours: controlledValue.getHours(),
                minutes: controlledValue.getMinutes(),
                seconds: controlledValue.getSeconds(),
                milliseconds: controlledValue.getMilliseconds(),
            }),
        );
    };

    const handleTimeChange = (value: string) => {
        onClearError?.(name);
        switch (value) {
            case '1-part':
                setControlledValue(set(controlledValue, { hours: 8, minutes: 0 }));
                break;
            case '2-part':
                setControlledValue(set(controlledValue, { hours: 12, minutes: 0 }));
                break;
            case '3-part':
                setControlledValue(set(controlledValue, { hours: 16, minutes: 0 }));
                break;
            default:
                setControlledValue(startOfDay(controlledValue));
                break;
        }
    };

    useEffect(() => {
        if (api) {
            const handleScroll = () => {
                const lastSlide = api.slideNodes().length - 1;
                const isLastSlide = api.slidesInView().indexOf(lastSlide) !== -1;
                if (isLastSlide && offset >= 0) {
                    setOffset(offset + 1);
                }
            };
            api.on('slidesInView', handleScroll);
            return () => {
                api.off('slidesInView', handleScroll);
            };
        }
    }, [api, days, offset]);

    return (
        <>
            <h2 className="text-[2rem] font-semibold">{t('task-creation.fulfill-date')}</h2>
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
                                        onPress={() => handleDateChange(date)}
                                        variant="bordered"
                                        className={cn(
                                            'flex aspect-square h-fit w-full cursor-pointer flex-col items-center justify-center rounded-xl transition',
                                            startOfDay(controlledValue).getTime() ===
                                                date.getTime() &&
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
            <h4 className="text-base font-medium">{t('task-creation.briefly')}</h4>
            <RadioGroup
                value={time}
                onValueChange={handleTimeChange}
                orientation="horizontal"
                defaultValue="3-part"
                color="primary"
                classNames={{ wrapper: 'justify-center gap-6' }}
            >
                <Radio value="any-time">{t('task-creation.any-time')}</Radio>
                <Radio value="1-part">{t('task-creation.1-part')}</Radio>
                <Radio value="2-part">{t('task-creation.2-part')}</Radio>
                <Radio value="3-part">{t('task-creation.3-part')}</Radio>
            </RadioGroup>
            {errorMessage && <p className="text-danger mt-2 text-sm">{errorMessage}</p>}
        </>
    );
}
