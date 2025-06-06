import AbsenceTime from '@/Components/AbsenceTime';
import OneStarRatingSM from '@/Components/OneStarRatingSM';
import { Avatar } from '@heroui/react';
import React from 'react';

interface EmployeeChipProps {
    item: number;
    name: string;
    photo: string;
    totalReviews: number;
    positiveReviews: number;
    shortText: string;
    lastVisit: string | Date;
}

const ReviewsChip: React.FC<EmployeeChipProps> = ({
    item,
    name,
    photo,
    totalReviews,
    positiveReviews,
    shortText,
    lastVisit,
}) => {
    const nameChip = name;
    const shortTextChip = shortText;
    const photoChip = photo;
    const totalReviewsChip = totalReviews;
    const positiveReviewsChip = positiveReviews;

    const lastVisitChip = new Date(lastVisit);

    return (
        <div
            key={item}
            className="border-muted flex items-start gap-3 rounded-xl border bg-white p-4 dark:bg-[#313131]"
        >
            <Avatar size="sm" className="bg-muted rounded-full text-white" src={photoChip} />
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                    <h4 className="text-[1.25rem] font-bold dark:text-white">{nameChip}</h4>
                    <div className="flex items-center text-[1rem] dark:text-white">
                        <OneStarRatingSM
                            totalReviews={totalReviewsChip}
                            positiveReviews={positiveReviewsChip}
                        />
                    </div>
                </div>
                <p className="text-muted text-sm">
                    {' '}
                    <AbsenceTime lastVisit={lastVisitChip} />
                </p>
                <p className="text-sm text-gray-300">{shortTextChip}</p>
            </div>
        </div>
    );
};

export default ReviewsChip;
