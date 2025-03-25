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
        <div className="absolute w-full h-[307px] flex flex-col items-start p-[30px_35px] gap-[15px] bg-white">
            {/* Верхняя строка с заголовком и стрелочками */}
            <div className="flex justify-between items-center w-full h-[53px]">
                <h2 className="text-black font-semibold text-[24px] leading-[33px]">
                    Останні замовлення
                </h2>
                {/* Блок стрелочек */}
                <div className="flex items-center gap-[15px]">
                    <button
                        onClick={scrollLeft}
                        className="w-[35px] h-[35px] flex items-center justify-center bg-white border-2 border-gray-400 rounded-full"
                    >
                        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 13L1 7L6 1" stroke="#969696" strokeWidth="2"/>
                        </svg>
                    </button>
                    <button
                        onClick={scrollRight}
                        className="w-[35px] h-[35px] flex items-center justify-center bg-white border-2 border-gray-400 rounded-full"
                    >
                        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13L6 7L1 1" stroke="#969696" strokeWidth="2"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Список задач с прокруткой */}
            <div
                ref={scrollRef}
                className="w-full flex gap-[41px] overflow-hidden scroll-smooth"
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
