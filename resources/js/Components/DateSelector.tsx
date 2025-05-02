import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from '@heroui/theme';

const days = [
    { date: 16, label: "Сьогодні" },
    { date: 17, label: "Завтра" },
    { date: 18, label: "Вівторок" },
    { date: 19, label: "Середа" },
    { date: 20, label: "Четвер" },
    { date: 21, label: "Пʼятниця" },
];

export default function DateScroller() {
    const [selectedDate, setSelectedDate] = useState(17);

    const handleLeftClick = () => {
        // Заготовка под смещение влево
        console.log("Сдвиг влево");
    };

    const handleRightClick = () => {
        // Заготовка под смещение вправо
        console.log("Сдвиг вправо");
    };

    return (
        <div className="flex items-center gap-5">
            <button onClick={handleLeftClick} className="text-white hover:scale-110 transition rounded-[2.5rem] dark:bg-[#00CCFF] mr-5">
                <ChevronLeft size={48} />
            </button>
            {days.map(({ date, label }) => (
                <div
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={cn('flex flex-col items-center justify-center px-5 py-2.5 rounded-xl cursor-pointer transition ', selectedDate === date ? "bg-cyan-400 text-white" : "border text-black dark:text-white")}
                >
                    <span className="text-xs text-gray-500">Березень</span>
                    <span className="text-lg font-bold">{date}</span>
                    <span className="text-sm">{label}</span>
                </div>
            ))}
            <button onClick={handleRightClick} className="text-white hover:scale-110 transition rounded-[2.5rem] dark:bg-[#00CCFF] ml-5">
                <ChevronRight size={48} />
            </button>
        </div>
    );
}
