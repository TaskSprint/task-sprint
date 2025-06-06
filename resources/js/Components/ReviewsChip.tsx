import AbsenceTime from '@/Components/AbsenceTime';
import OneStarRatingSM from '@/Components/OneStarRatingSM';
import { Avatar } from '@heroui/react';
import { Link } from '@inertiajs/react';
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
        <Link
            href={`#`}
            key={item}
            className="border-muted flex w-full max-w-[21rem] items-start gap-3 rounded-xl border bg-white p-4 transition-colors hover:bg-gray-400 dark:bg-[#313131] dark:hover:bg-gray-900"
        >
            <Avatar size="lg" className="bg-muted rounded-full text-white" src={photoChip} />
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
                <p className="text-sm text-gray-800 dark:text-gray-300">{shortTextChip}</p>
            </div>
        </Link>
    );
};

export default ReviewsChip;
