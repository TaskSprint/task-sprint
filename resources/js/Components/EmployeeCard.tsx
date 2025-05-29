import Button from '@/Components/Shared/Button';
import { Avatar, Divider, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import HeartCheckbox from '@/Components/HeartCheckbox';
import ReviewsChip from './ReviewsChip';
import AbsenceTime from '@/Components/AbsenceTime';

export default function EmployeeCard() {
    const { t } = useLaravelReactI18n();
    const lastViz = new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toString();
    const date1 = new Date('2025-05-26T14:00:00Z')
    const date2 = new Date('2025-05-27T19:00:00Z')
    const date3 = new Date('2025-05-01T09:00:00Z')
    const date4 = new Date('2023-05-01T09:00:00Z')
    const nameCard="Ткач П."
    const photoCard="https://avatars.githubusercontent.com/u/30373425?v=4"
    const totalReviewsCard=12456;
    const positiveReviewsCard=12456;
    const reviews = [
        {
            item: 1,
            name: "Коваль Д.",
            photo: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            totalReviews: 24,
            positiveReviews: 21,
            shortText: "Дуже опреративно, квалифіковано та відповідально!!!...",
            lastVisit: new Date(date1),
        },
        {
            item: 2,
            name: "Ткач П.",
            photo: "https://avatars.githubusercontent.com/u/30373425?v=4",
            totalReviews: 25,
            positiveReviews: 25,
            shortText: "Все сподобалось. Гарна робота! 5 зірок!...",
            lastVisit: new Date(date3),
        },
    ];




    return (
        <div className="bg-white dark:bg-[#313131] relative w-fit min-w-[44.25rem] rounded-[1.25rem] p-2.5 gap-2.5 border-1 border-primary flex flex-col shadow-sm">


            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-between items-start gap-4">
                    <div className="flex flex-row items-start gap-5 min-w-[24.28125rem] min-h-[7.25rem]">
                        <Avatar
                            src={photoCard}
                            className="min-w-[5.5rem] min-h-[5.5rem]"
                        />
                        <div className="text-center md:text-left">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <h2 className="text-xl font-semibold">{nameCard}</h2>
                                <HeartCheckbox />
                            </div>
                            <p className="text-muted text-sm"><AbsenceTime lastVisit={date2}/></p>
                            <div className="flex items-center mt-2 gap-6 text-sm text-muted min-w-[rem]">
                                <div className="flex items-center gap-2 text-black dark:text-white">
                                    <span className="text-primary text-2xl font-black">✓ </span><span>На сайті з<br/> 14 березня 2022</span>
                                </div>
                                <div className="flex items-center gap-2 text-black dark:text-white">
                                    <span className="text-primary text-2xl font-[1000]">✓ </span><span>Паспорт<br/> перевірено</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col absolute top-2.5 right-2.5 justify-end gap-2.5 text-center w-full max-w-[19.75rem] font-semibold">
                    <Button
                        as={Link}
                        href="#"
                        variant="solid"
                        color="primary"
                        className="text-white rounded-full px-6 py-3 text-lg font-semibold"
                    >
                        Запропонувати роботу
                    </Button>
                    <div className="flex flex-row justify-end gap-2 font-medium pr-10 pt-2">
                        <div>
                            <div className="text-[1.25rem] font-medium">{totalReviewsCard}</div>
                            <div className="text-[0.75rem] text-primary">{t('fav-employees.reviews')}</div>
                        </div>
                        <Divider orientation="vertical" className="h-12 bg-primary" />
                        <div>
                            <div className="text-[1.25rem] font-medium">{Math.round((positiveReviewsCard/totalReviewsCard)*100)}%</div>
                            <div className="text-[0.75rem] text-muted">{t('fav-employees.positive')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gap-4 flex flexrow justify-between items-center w-full max-w-[44.25rem] h-full overflow-y-auto">
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
