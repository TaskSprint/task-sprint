import React from 'react';

const FullStar = () => (
    <svg viewBox="0 0 24 24" fill="#1FCDFE" width="24" height="24">
        <path
        d="M12 2 L14.5 8 L21 9.3 L16 13.5 L17 20.8 L12 17.5 L7 20.8 L8 13.5 L3 9.3 L9.5 8 Z"
        fill="#1FCDFE" // Цвет голубой заливки
        stroke="#1FCDFE" // Цвет контуров
        strokeWidth="1"
        strokeLinejoin="round"/>
    </svg>
);

const HalfStar = () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
        {/* Левая часть (контур) */}
        <path
            d="M12 2 L14.5 8 L21 9.3 L16 13.5 L17 20.8 L12 17.5 L7 20.8 L8 13.5 L3 9.3 L9.5 8 Z"
            fill="#1FCDFE" // Цвет голубой заливки
            stroke="#1FCDFE" // Цвет контуров
            strokeWidth="1"
            strokeLinejoin="round"/>
        {/* Правая часть (заливка голубым цветом) */}
        <path
            d="M12 2 L14.5 8 L21 9.3 L16 13.5 L17 20.8 L12 17.5 L7 20.8 L8 13.5 L3 9.3 L9.5 8 Z"
            fill="none" // Голубая (закрашенная) часть
            stroke="#1FCDFE" // Цвет контуров
            strokeWidth="1"
            strokeLinejoin="round"
            style={{ clipPath: 'inset(0 0 0 50%)' }} // Скрывает правую половину
        />
    </svg>
);

const EmptyStar = () => (
    <svg viewBox="0 0 24 24" fill="#335E65" width="24" height="24">
        <path
            d="M12 2 L14.5 8 L21 9.3 L16 13.5 L17 20.8 L12 17.5 L7 20.8 L8 13.5 L3 9.3 L9.5 8 Z"
            fill="none" // Голубая (закрашенная) часть
            stroke="#1FCDFE" // Цвет контуров
            strokeWidth="1"
            strokeLinejoin="round"
        />
    </svg>
);

interface StarRatingProps {
    totalReviews: number;
    positiveReviews: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalReviews, positiveReviews }) => {
    const percentage = totalReviews === 0 ? 0 : (positiveReviews / totalReviews) * 100;
    const roundedPercent = Math.round(percentage / 10) * 10;
    const starsToFill = (roundedPercent / 100) * 5;

    return (
        <div className="flex flex-col w-[7.1875rem] items-center gap-1">
            <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => {
                    if (i + 1 <= Math.floor(starsToFill)) {
                        return <FullStar key={i} />;
                    } else if (i + 1 === Math.floor(starsToFill) + 1 && starsToFill % 1 >= 0.1) {
                        return <HalfStar key={i} />;
                    } else {
                        return <EmptyStar key={i} />;
                    }
                })}
            </div>
        </div>
    );
};

export default StarRating;
