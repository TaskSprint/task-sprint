import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@heroui/react';

const days = [
    { date: 16, label: 'Сьогодні' },
    { date: 17, label: 'Завтра' },
    { date: 18, label: 'Вівторок' },
    { date: 19, label: 'Середа' },
    { date: 20, label: 'Четвер' },
    { date: 21, label: 'Пʼятниця' },
];

export default function DateScroller() {
    const todayDate = 17;
    const [selectedDate, setSelectedDate] = useState(todayDate);

    const handleLeftClick = () => {
        // Заготовка под смещение влево
        console.log('Сдвиг влево');
    };

    const handleRightClick = () => {
        // Заготовка под смещение вправо
        console.log('Сдвиг вправо');
    };

    return (
        <div className="flex items-center gap-5">
            <button
                onClick={handleLeftClick}
                className="flex flex-col items-center justify-center rounded-full border bg-cyan-400 text-white dark:text-white"
            >
                <ChevronLeft size={48} />
            </button>
            {days.map(({ date, label }) => (
                <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={cn(
                        'flex cursor-pointer flex-col items-center justify-center rounded-xl px-5 py-2.5 transition',
                        selectedDate === date
                            ? 'bg-cyan-400 text-white'
                            : 'border text-black dark:text-white',
                    )}
                >
                    <span className="text-sm text-gray-500">Березень</span>
                    <span className="text-lg font-bold">{date}</span>
                    <span className="text-sm">{label}</span>
                </button>
            ))}
            <button
                onClick={handleRightClick}
                className="flex flex-col items-center justify-center rounded-full border bg-cyan-400 text-white dark:text-white"
            >
                <ChevronRight size={48} />
            </button>
        </div>
    );
}
