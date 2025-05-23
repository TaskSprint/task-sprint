import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Link, Textarea } from '@heroui/react';
import React, { useState } from 'react';
import MarkStarRating from '@/Components/MarkStarRating';

export default function EmployeeReviewPopup() {
    const { t } = useLaravelReactI18n();

    const [rating, setRating] = useState<number>(0);

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    return (
        <div className="bg-primary/20 flex flex-col items-center justify-center gap-6.25 border-b px-4 py-10">
            <h2 className="text-center text-[2rem] font-semibold dark:text-white">
                {t('employee-review.feedback')}
            </h2>
            <div className="flex w-full flex-col items-center gap-6.25 text-center">
                <h3>{t('employee-review.explanations')}</h3>
                <Textarea
                    radius="full"
                    minRows={7}
                    fullWidth={true}
                    variant="bordered"
                    className="w-full max-w-lg overscroll-y-auto dark:bg-none dark:text-white"
                />
            </div>
            <div className="flex flex-wrap justify-center gap-x-17.5 gap-y-6">
                <div className="flex flex-col items-center gap-2.5">
                    <h3>{t('employee-review.quality')}</h3>
                    <MarkStarRating maxRating={5} onRatingChange={handleRatingChange} />
                </div>
                <div className="flex flex-col items-center gap-2.5">
                    <h3>{t('employee-review.punctuality')}</h3>
                    <MarkStarRating maxRating={5} onRatingChange={handleRatingChange} />
                </div>
                <div className="flex flex-col items-center gap-2.5">
                    <h3>{t('employee-review.politeness')}</h3>
                    <MarkStarRating maxRating={5} onRatingChange={handleRatingChange} />
                </div>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-4">
                <Button
                    as={Link}
                    href="#"
                    className="h-fit w-full rounded-[2.25rem] px-28 py-2 font-semibold text-white sm:w-fit sm:py-5 sm:text-xl"
                    color="primary"
                >
                    {t('employee-review.send')}
                </Button>
                <Button
                    as={Link}
                    href="#"
                    color="primary"
                    variant="light"
                    className="h-fit w-full content-center rounded-full border-none px-12 py-2 font-semibold sm:w-fit sm:py-5 sm:text-xl"
                >
                    {t('employee-review.cancellation')}
                </Button>
            </div>
        </div>
    );
}
