import React from "react";
import { Avatar } from '@heroui/react';
import OneStarRatingSM from '@/Components/OneStarRatingSM';
import AbsenceTime from '@/Components/AbsenceTime';

interface EmployeeChipProps {
    item: number;
    name: string;
    photo: string;
    totalReviews: number;
    positiveReviews: number;
    shortText: string;
    lastVisit: string | Date;
}

const StarIcon = ({ color }: { color: string }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
         9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const EmptyStar = ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 24" fill="transparent" stroke={color} width="20" height="20">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2
        9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);
const ReviewsChip: React.FC<EmployeeChipProps> = ({ item, name, photo,totalReviews, positiveReviews, shortText, lastVisit}) => {

    const nameChip = name;
    const shortTextChip = shortText;
    const photoChip = photo;
    const totalReviewsChip = totalReviews;
    const positiveReviewsChip = positiveReviews;

    const lastVisitChip = new Date(lastVisit);


        return (
        <div
            key={item}
            className="flex items-start gap-3 rounded-xl border border-muted p-4 bg-white dark:bg-[#313131]"
        >
            <Avatar
                size="sm"
                className="rounded-full bg-muted text-white"
                src={photoChip}

            />
            <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                    <h4 className="font-bold text-[1.25rem] dark:text-white">{nameChip}</h4>
                    <div className="flex items-center dark:text-white text-[1rem]">
                        {/*<OneStarRating totalReviews={100} positiveReviews={56} evaluationType={"service" || "task"} /> 5*/}
                        <OneStarRatingSM totalReviews={totalReviewsChip} positiveReviews={positiveReviewsChip} />

                    </div>
                </div>
                <p className="text-muted text-sm"> <AbsenceTime lastVisit={lastVisitChip} /></p>
                <p className="text-sm text-gray-300">
                    {shortTextChip}
                </p>
            </div>
        </div>
    );
};

export default ReviewsChip;

