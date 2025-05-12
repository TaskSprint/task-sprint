import { FC, useRef } from 'react';
import LastTaskCard from '@/Components/Main/LastTasks/LastTaskCard';
import Task from '@/types/models/task';
import { ScrollShadow } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

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
                    <button
                        onClick={scrollLeft}
                        className="flex size-9 items-center justify-center rounded-full border-2 border-gray-400 text-[#969696] dark:border-[#C6C6C6]"
                    >
                        <svg
                            width="0.5rem"
                            height="0.875rem"
                            viewBox="0 0 7 14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 13L1 7L6 1"
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={scrollRight}
                        className="flex h-[2.19rem] w-[2.19rem] items-center justify-center rounded-full border-2 border-gray-400 text-[#969696] dark:border-[#C6C6C6]"
                    >
                        <svg
                            width="0.5rem"
                            height="0.875rem"
                            viewBox="0 0 7 14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 13L6 7L1 1"
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                            />
                        </svg>
                    </button>
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
