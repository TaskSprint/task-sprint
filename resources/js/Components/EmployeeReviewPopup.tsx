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
    }

    return (
        <div className="flex flex-col min-w-[57.5625rem] min-h-[34.375rem] items-center justify-center border-b dark:bg-[#00CCFF33] gap-6.25 py-10 px-25">
            <h2 className="text-center text-[2rem] font-semibold dark:text-white">{t('employee-review.feedback')}</h2>
            <div className="flex flex-col min-w-[34.625rem] min-h-[12.1875rem] gap-6.25 text-center">
                <h3>{t('employee-review.explanations')}</h3>
                <div className="min-w-[34.625rem] min-h-[9.5625rem]">
                    <Textarea
                        radius="full"
                        minRows={7}
                        fullWidth={true}
                        variant="bordered"
                        className="min-h-[9.5625rem] overscroll-y-auto dark:text-white dark:bg-none"
                    />
                </div>
            </div>
                <div className="flex min-w-[28.1875rem] gap-17.5">
                    <div className="flex flex-col gap-2.5 items-center">
                        <h3>{t('employee-review.quality')}</h3>
                        <MarkStarRating maxRating={5} onRatingChange={handleRatingChange} />
                    </div>
                    <div className="flex flex-col gap-2.5 items-center">
                        <h3>{t('employee-review.punctuality')}</h3>
                        <MarkStarRating maxRating={5} onRatingChange={handleRatingChange} />
                    </div>
                    <div className="flex flex-col gap-2.5 items-center">
                        <h3>{t('employee-review.politeness')}</h3>
                        <MarkStarRating maxRating={5} onRatingChange={handleRatingChange} />
                    </div>
                </div>
                    <div className="flex justify-between gap-9 items-center">
                        <Button
                            as={Link}
                            href="#"
                            className="h-fit rounded-[2.25rem] px-16 py-5 text-xl font-semibold text-white"
                            color="primary"
                        >
                            {t('employee-review.send')}
                        </Button>
                        <Button
                            as={Link}
                            href="#"
                            className="h-fit px-8 py-5 text-xl border-none rounded-full font-semibold text-primary bg-transparent content-center"
                        >
                            {t('employee-review.cancellation')}
                        </Button>
                    </div>
        </div>
    );
}
