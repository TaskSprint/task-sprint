import React from 'react';

/* использование в документе -> <StarRating totalReviews={100} positiveReviews={56} /> */

const FullStar = () => (
    <svg viewBox="0 0 24 24" fill="#1FCDFE" width="24" height="24">
        <path
            d="M12 2 L14.5 8 L21 9.3 L16 13.5 L17 20.8 L12 17.5 L7 20.8 L8 13.5 L3 9.3 L9.5 8 Z"
            fill="#1FCDFE"
            stroke="#1FCDFE"
            strokeWidth="1"
            strokeLinejoin="round"
        />
    </svg>
);

const HalfStar = () => (
    <svg viewBox="0 0 24 24" width="24" height="24">
        {/* Левая часть (контур) */}
        <path
            d="M12 2 L14.5 8 L21 9.3 L16 13.5 L17 20.8 L12 17.5 L7 20.8 L8 13.5 L3 9.3 L9.5 8 Z"
            fill="#1FCDFE"
            stroke="#1FCDFE"
            strokeWidth="1"
            strokeLinejoin="round"
            style={{ clipPath: 'inset(0 50% 0 0)' }}
        />
        <path
            d="M12 2 L14.5 8 L21 9.3 L16 13.5 L17 20.8 L12 17.5 L7 20.8 L8 13.5 L3 9.3 L9.5 8 Z"
            fill="none"
            stroke="#1FCDFE"
            strokeWidth="1"
            strokeLinejoin="round"
            style={{ clipPath: 'inset(0 0 0 50%)' }}
        />
    </svg>
);

const EmptyStar = () => (
    <svg viewBox="0 0 24 24" fill="#335E65" width="24" height="24">
        <path
            d="M12 2 L14.5 8 L21 9.3 L16 13.5 L17 20.8 L12 17.5 L7 20.8 L8 13.5 L3 9.3 L9.5 8 Z"
            fill="none"
            stroke="#1FCDFE"
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
    const percentage = totalReviews === 0 ? 0 : (positiveReviews / totalReviews) * 10;
    const roundedPercent = Math.round(percentage);

    return (
        <div className="flex flex-col items-center gap-1">
            <div className="flex">
                {Array.from({ length: 5 }, (_, i) => {
                    if ((i + 1) * 2 <= roundedPercent) {
                        return <FullStar key={i} />;
                    } else if (
                        (i + 1) * 2 >= roundedPercent &&
                        roundedPercent - (i + 1) * 2 === -1
                    ) {
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
