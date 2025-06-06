import AbsenceTime from '@/Components/AbsenceTime';
import HeartCheckbox from '@/Components/HeartCheckbox';
import Button from '@/Components/Shared/Button';
import { Avatar, Divider, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import ReviewsChip from './ReviewsChip';

export default function EmployeeCard() {
    const { t } = useLaravelReactI18n();
    const date1 = new Date('2025-05-26T14:00:00Z');
    const date2 = new Date('2025-05-27T19:00:00Z');
    const date3 = new Date('2025-05-01T09:00:00Z');
    const nameCard = 'Ткач П.';
    const photoCard = 'https://avatars.githubusercontent.com/u/30373425?v=4';
    const totalReviewsCard = 12456;
    const positiveReviewsCard = 12456;
    const reviews = [
        {
            item: 1,
            name: 'Коваль Д.',
            photo: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
            totalReviews: 24,
            positiveReviews: 21,
            shortText: 'Дуже опреративно, квалифіковано та відповідально!!!...',
            lastVisit: new Date(date1),
        },
        {
            item: 2,
            name: 'Ткач П.',
            photo: 'https://avatars.githubusercontent.com/u/30373425?v=4',
            totalReviews: 25,
            positiveReviews: 25,
            shortText: 'Все сподобалось. Гарна робота! 5 зірок!...',
            lastVisit: new Date(date3),
        },
    ];

    return (
        <div className="border-primary relative flex w-fit min-w-[44.25rem] flex-col gap-2.5 rounded-[1.25rem] border-1 bg-white p-2.5 shadow-sm dark:bg-[#313131]">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col items-start justify-between gap-4">
                    <div className="flex min-h-[7.25rem] min-w-[24.28125rem] flex-row items-start gap-5">
                        <Avatar src={photoCard} className="min-h-[5.5rem] min-w-[5.5rem]" />
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center gap-2 md:justify-start">
                                <h2 className="text-xl font-semibold">{nameCard}</h2>
                                <HeartCheckbox />
                            </div>
                            <p className="text-muted text-sm">
                                <AbsenceTime lastVisit={date2} />
                            </p>
                            <div className="text-muted mt-2 flex min-w-[rem] items-center gap-6 text-sm">
                                <div className="flex items-center gap-2 text-black dark:text-white">
                                    <span className="text-primary text-2xl font-black">✓ </span>
                                    <span>
                                        На сайті з<br /> 14 березня 2022
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-black dark:text-white">
                                    <span className="text-primary text-2xl font-[1000]">✓ </span>
                                    <span>
                                        Паспорт
                                        <br /> перевірено
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-2.5 right-2.5 flex w-full max-w-[19.75rem] flex-col justify-end gap-2.5 text-center font-semibold">
                    <Button
                        as={Link}
                        href="#"
                        variant="solid"
                        color="primary"
                        className="rounded-full px-6 py-3 text-lg font-semibold text-white"
                    >
                        Запропонувати роботу
                    </Button>
                    <div className="flex flex-row justify-end gap-2 pt-2 pr-10 font-medium">
                        <div>
                            <div className="text-[1.25rem] font-medium">{totalReviewsCard}</div>
                            <div className="text-primary text-[0.75rem]">
                                {t('fav-employees.reviews')}
                            </div>
                        </div>
                        <Divider orientation="vertical" className="bg-primary h-12" />
                        <div>
                            <div className="text-[1.25rem] font-medium">
                                {Math.round((positiveReviewsCard / totalReviewsCard) * 100)}%
                            </div>
                            <div className="text-muted text-[0.75rem]">
                                {t('fav-employees.positive')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flexrow flex h-full w-full max-w-[44.25rem] items-center justify-between gap-4 overflow-y-auto">
                {/*<ReviewsChip item={1} name={"Коваль Д."} photo={"https://i.pravatar.cc/150?u=a04258114e29026702d"} totalReviews={24} positiveReviews={21} shortText={"Дуже опреративно, квалифіковано та відповідально!!!... "} lastVisit={new Date(date1)} />*/}
                {/*<ReviewsChip item={2} name={"Ткач П."} photo={"https://avatars.githubusercontent.com/u/30373425?v=4"} totalReviews={25} positiveReviews={25}  shortText={"Все сподобалось. Гарна робота! 5 зірок!..."} lastVisit={new Date(date3)} />*/}
                <div className="flex flex-row gap-2.5">
                    {reviews.map((review) => (
                        <ReviewsChip
                            key={review.item}
                            item={review.item}
                            name={review.name}
                            photo={review.photo}
                            totalReviews={review.totalReviews}
                            positiveReviews={review.positiveReviews}
                            shortText={review.shortText}
                            lastVisit={review.lastVisit}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
