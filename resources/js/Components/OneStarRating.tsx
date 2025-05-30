import React from "react";

/* использование в документе -> <OneStarRating totalReviews={100} positiveReviews={56} evaluationType={"service" || "task"} /> */

interface OneStarRatingProps {
    totalReviews: number;
    positiveReviews: number;
    evaluationType: "service" | "task"; // определяет цвет правой звезды
}

const StarIcon = ({ color }: { color: string }) => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill={color}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
         9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const EmptyStar = ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="transparent" stroke={color} width="36" height="36">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
        9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);
const OneStarRating: React.FC<OneStarRatingProps> = ({ totalReviews, positiveReviews, evaluationType }) => {
    let rating;

    if (positiveReviews === 0) {
        rating = 0.0;
    } else if(totalReviews < positiveReviews) {
        rating = 5;
    } else {
        const IntPart = Math.floor((positiveReviews / totalReviews) * 100 / 20);
        const DecimalPart = Math.round(Math.round((positiveReviews / totalReviews) * 100 % 20) / 2) / 10;
        rating = IntPart + DecimalPart;
    }

    const starColor = evaluationType === "task" ? "#FFD600" : "#00CFFF";

    return (
        <div className="flex gap-2 dark:text-white font-semibold text-2xl">
            <div className="flex justify-between items-center">
                <span>{rating}</span>
                { rating === 0.0 ? <EmptyStar color={starColor} /> : <StarIcon color={starColor} /> }
            </div>

        </div>
    );
};

export default OneStarRating;
