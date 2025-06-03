import LastTaskCard from '@/Components/Main/LastTasks/LastTaskCard';
import Button from '@/Components/Shared/Button';
import Task from '@/types/models/task';
import { ScrollShadow } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { FC, useRef } from 'react';
import IcRoundArrowBackIos from '~icons/ic/round-arrow-back-ios';
import IcRoundArrowForwardIos from '~icons/ic/round-arrow-forward-ios';

interface LastTasksProps {
    tasks: Task[];
}

const LastTasks: FC<LastTasksProps> = ({ tasks }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const { t } = useLaravelReactI18n();

    return (
        <div className="flex h-[19.25rem] w-full flex-col items-start gap-4 bg-white px-9 py-7 dark:bg-[#2C2C2C]">
            {/* Top row with title and arrows */}
            <div className="flex h-[3.25rem] w-full items-center justify-between">
                <h2 className="text-2xl leading-8 font-semibold text-black dark:text-white">
                    {t('last-tasks.last_orders')}
                </h2>

                {/* Arrow buttons */}
                <div className="flex items-center gap-4">
                    <Button
                        onPress={scrollLeft}
                        color="primary"
                        className="size-9 min-w-fit rounded-full p-2 text-white"
                    >
                        <IcRoundArrowBackIos className="size-full" />
                    </Button>
                    <Button
                        onPress={scrollRight}
                        color="primary"
                        className="size-9 min-w-fit rounded-full p-2 text-white"
                    >
                        <IcRoundArrowForwardIos className="size-full" />
                    </Button>
                </div>
            </div>

            {/* Task list with scroll */}
            <ScrollShadow
                orientation="horizontal"
                ref={scrollRef}
                className="flex w-full gap-10 overflow-hidden scroll-smooth"
            >
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => <LastTaskCard key={task.id} {...task} />)
                ) : (
                    <p className="text-gray-400 dark:text-gray-300">{t('last-tasks.no_orders')}</p>
                )}
            </ScrollShadow>
        </div>
    );
};

export default LastTasks;
