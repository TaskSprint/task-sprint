import { FC, useEffect, useRef } from 'react';
import LastTaskCard from '@/Components/LastTaskCard';
import Task from '@/types/models/task';
import { ScrollShadow } from '@heroui/scroll-shadow';

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

    useEffect(() => {
        setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.dispatchEvent(new Event('scroll'));
            }
        }, 5);
    }, []);

    return (
        <div className="absolute flex h-[19.25rem] w-full flex-col items-start gap-4 bg-white px-9 py-7">
            {/* Top row with title and arrows */}
            <div className="flex h-[3.25rem] w-full items-center justify-between">
                <h2 className="text-2xl font-semibold leading-8 text-black">Останні замовлення</h2>
                {/* Arrow buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={scrollLeft}
                        className="flex size-9 items-center justify-center rounded-full border-2 border-gray-400 bg-white"
                    >
                        <svg
                            width="0.44rem"
                            height="0.88rem"
                            viewBox="0 0 7 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6 13L1 7L6 1" stroke="#969696" strokeWidth="2" />
                        </svg>
                    </button>
                    <button
                        onClick={scrollRight}
                        className="flex h-[2.19rem] w-[2.19rem] items-center justify-center rounded-full border-2 border-gray-400 bg-white"
                    >
                        <svg
                            width="0.44rem"
                            height="0.88rem"
                            viewBox="0 0 7 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1 13L6 7L1 1" stroke="#969696" strokeWidth="2" />
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
                    <p className="text-gray-400">Задачи отсутствуют</p>
                )}
            </ScrollShadow>
        </div>
    );
};

export default LastTasks;
