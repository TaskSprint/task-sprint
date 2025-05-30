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
            className="flex items-start h-fit w-fit  min-w-[21rem] min-h-[8.8125rem] gap-3 rounded-xl border border-muted p-4 bg-white dark:bg-[#313131]"
        >
            <Avatar
                size="lg"
                className="rounded-full bg-muted text-white"
                src={photoChip}

            />
            <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                    <h4 className="font-bold text-[1.25rem] dark:text-white">{nameChip}</h4>
                    <div className="flex items-center dark:text-white text-[1rem]">
                        <OneStarRatingSM totalReviews={totalReviewsChip} positiveReviews={positiveReviewsChip} />
                   </div>
                </div>
                <p className="text-muted text-sm"> <AbsenceTime lastVisit={lastVisitChip} /></p>
                <p className="text-sm dark:text-gray-200">
                    {shortTextChip}
                </p>
            </div>
        </div>
    );
};

export default ReviewsChip;

