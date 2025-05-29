import Button from '@/Components/Shared/Button';
import { Avatar, Divider, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import HeartCheckbox from '@/Components/HeartCheckbox';
import AbsenceTime from '@/Components/AbsenceTime';
import React from 'react';

export default function FavoriteEmployeesSM() {
    const { t } = useLaravelReactI18n();
    const lastViz = new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toString();
    const lastTimeSpend = new Date(lastViz).getTime().toString();
    const date = new Date('2025-05-19T14:00:00Z')

    return (
        <div className="border-primary relative flex max-w-[21.25rem] max-h-[15rem] h-max flex-col items-center gap-2.5 overflow-hidden rounded-[1.25rem] border-1 p-2.5 bg-white dark:bg-[#313131]">
            <div className="flex w-full flex-col gap-2.5 sm:flex-row">
                <div>
                    <Avatar
                        className="aspect-square size-21.75 content-start justify-start"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        as={Link}
                        href="#"
                    />
                </div>
                <div className="flex flex-col w-full pt-1 gap-2">
                    <div className="flex items-center gap-2.5">
                        <h2>
                            <Link
                                className="text-xl font-bold focus:text-gray-500 dark:text-white"
                                href="#"
                            >
                                <div className="inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap text-black dark:text-white">
                                    Коваль А.
                                </div>
                            </Link>
                        </h2>
                        <HeartCheckbox />
                    </div>
                    <div className="flex flex-row items-start text-[0.875rem] gap-1 mb-1 min-w-[11rem]">
                        <h3 className="text-muted content-start font-medium">
                            <p>{t('task-creation.last-visit')} </p>
                        </h3>
                        <AbsenceTime lastVisit={date} />
                    </div>
                    <div className="flex flex-row items-center gap-2.5 font-medium">
                        <div className="flex flex-col">
                            <h2 className="text-[1.25rem] dark:text-white">12456</h2>
                            <h3 className="text-primary text-[0.75rem]">
                                {t('task-creation.reviews')}
                            </h3>
                        </div>
                        <Divider className="bg-primary" orientation="vertical" />
                        <div className="flex flex-col">
                            <h2 className="text-[1.25rem] dark:text-white">100%</h2>
                            <h3 className="text-[0.75rem] text-gray-500 dark:text-[#A7A7A7]">
                                {t('task-creation.positive')}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <Button
                as={Link}
                href="#"
                color="primary"
                className="w-full rounded-[2.25rem] px-4 py-3 text-xl font-semibold text-white dark:text-black justify-center"
            >
                <div className="inline-block w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">
                    {t('task-creation.offer')}
                </div>
            </Button>
        </div>
    );
}
