import { FC } from "react";
import { Head } from "@inertiajs/react";
import LastTaskCard from "@/Components/LastTaskCard";

type Task = {
    id: number;
    name: string;
    description: string;
    price: string;
    currency_code: string;
    address: Record<string, any>;
    estimated_date: string;
    status: string;
    customer: { id: number; name: string };
};

type LastTasksProps = {
    tasks: Task[];
};

import { useRef } from "react";

const LastTasks: FC<{ tasks: any[] }> = ({ tasks }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="absolute w-full h-[19.19rem] flex flex-col items-start px-9 py-7 gap-4 bg-white">
            {/* Top row with title and arrows */}
            <div className="flex justify-between items-center w-full h-[3.31rem]">
                <h2 className="text-black font-semibold text-[1.5rem] leading-[2.06rem]">
                    Останні замовлення
                </h2>
                {/* Arrow buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={scrollLeft}
                        className="w-[2.19rem] h-[2.19rem] flex items-center justify-center bg-white border-2 border-gray-400 rounded-full"
                    >
                        <svg width="0.44rem" height="0.88rem" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 13L1 7L6 1" stroke="#969696" strokeWidth="2" />
                        </svg>
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-[2.19rem] h-[2.19rem] flex items-center justify-center bg-white border-2 border-gray-400 rounded-full"
                    >
                        <svg width="0.44rem" height="0.88rem" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L6 7L1 1" stroke="#969696" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Task list with scroll */}
            <div
                ref={scrollRef}
                className="w-full flex gap-10 overflow-hidden scroll-smooth"
            >
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => <LastTaskCard key={task.id} id={task.id} {...task} />)
                ) : (
                    <p className="text-gray-400">Задачи отсутствуют</p>
                )}
            </div>
        </div>
    );
};


export default LastTasks;
