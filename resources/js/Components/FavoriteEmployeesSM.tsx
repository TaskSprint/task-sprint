import Button from '@/Components/Shared/Button';
import { Avatar, Divider, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import HeartCheckbox from '@/Components/HeartCheckbox';
import AbsenceTime from '@/Components/AbsenceTime';
import React from 'react';

interface FavoriteEmployeeSMProps {
    item: number;
    name: string;
    photo?: string;
    totalReviews: number;
    positiveReviews: number;
    lastVisit: string | Date;
}

const FavoriteEmployeeSM: React.FC<FavoriteEmployeeSMProps> = ({
    item,
    name,
    photo,
    totalReviews,
    positiveReviews,
    lastVisit,
}) => {
    const itemId = item;
    const nameBanner = name;
    const photoBanner = photo;
    const totalReviewsBanner = totalReviews;
    const positiveReviewsBanner = positiveReviews;

    const lastVisitBanner = new Date(lastVisit);

    const { t } = useLaravelReactI18n();
    return (
        <div className="border-primary relative flex h-max max-h-[15rem] max-w-[21.25rem] flex-col items-center gap-2.5 overflow-hidden rounded-[1.25rem] border-1 bg-white p-2.5 dark:bg-[#313131]">
            <div className="flex w-full flex-col gap-2.5 sm:flex-row">
                <div>
                    <Avatar
                        className="aspect-square size-21.75 content-start justify-start"
                        src={photoBanner}
                        as={Link}
                        href={'#'}
                    />
                </div>
                <div className="flex w-full flex-col gap-2 pt-1">
                    <div className="flex items-center gap-2.5">
                        <h2>
                            <Link
                                className="text-xl font-bold focus:text-gray-500 dark:text-white"
                                href="#"
                            >
                                <div className="inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap text-black dark:text-white">
                                    {nameBanner}
                                </div>
                            </Link>
                        </h2>
                        <HeartCheckbox />
                    </div>
                    <div className="mb-1 flex min-w-[11rem] flex-row items-start gap-1 text-[0.875rem]">
                        <h3 className="text-muted content-start font-medium">
                            <p>{t('task-creation.last-visit')} </p>
                        </h3>
                        <AbsenceTime lastVisit={lastVisitBanner} />
                    </div>
                    <div className="flex flex-row items-center gap-2.5 font-medium">
                        <div className="flex flex-col">
                            <h2 className="text-[1.25rem] dark:text-white">{totalReviewsBanner}</h2>
                            <h3 className="text-primary text-[0.75rem]">
                                {t('task-creation.reviews')}
                            </h3>
                        </div>
                        <Divider className="bg-primary" orientation="vertical" />
                        <div className="flex flex-col">
                            <h2 className="text-[1.25rem] dark:text-white">
                                {totalReviewsBanner
                                    ? Math.round((positiveReviewsBanner / totalReviewsBanner) * 100)
                                    : 0}
                                %
                            </h2>
                            <h3 className="text-[0.75rem] text-gray-500 dark:text-[#A7A7A7]">
                                {t('task-creation.positive')}
                            </h3>
                        </div>
                        <div className="dadk:text-[#313131] text-[0.02rem] text-white">
                            {itemId}
                        </div>
                    </div>
                </div>
            </div>
            <Button
                as={Link}
                href="#"
                color="primary"
                className="w-full justify-center rounded-[2.25rem] px-4 py-3 text-xl font-semibold text-white dark:text-black"
            >
                <div className="inline-block w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">
                    {t('task-creation.offer')}
                </div>
            </Button>
        </div>
    );
};

export default FavoriteEmployeeSM;
