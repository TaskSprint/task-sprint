import Button from '@/Components/Shared/Button';
import { Avatar, Divider, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import HeartCheckbox from '@/Components/HeartCheckbox';
import React from 'react';
import AbsenceTime from '@/Components/AbsenceTime';



export default function FavoriteEmployees() {
    const { t } = useLaravelReactI18n();
    const lastViz = new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toString();
    const date = new Date('2025-05-19T14:00:00Z')


        return (
            <div className="flex flex-col items-center justify-center min-w-[56.75rem] w-fit h-fit min-h-[15rem]  border-b border-gray-400 px-9 py-10">
                <div className="flex flex-col justify-between w-fit min-w-[44.6875rem] min-h-[10.0625rem] h-fit gap-3 md:flex-row">
                    <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
                        <Link className="cursor-pointer rounded-full">
                            <Avatar
                                className="aspect-square size-[7.0625rem] content-start justify-start"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                as={Link}
                                href="#"
                            />
                        </Link>
                        <div className="flex flex-col items-center gap-5 md:items-start">
                            <div className="flex flex-row gap-2">
                                <Link color="foreground" className="cursor-pointer text-2xl font-bold">
                                    Коваль А.
                                </Link>
                                <HeartCheckbox />
                            </div>
                            <div className="flex flex-row items-start gap-1">
                                <h3 className="text-muted content-start text-base font-medium">
                                    <p>{t('fav-employees.last-visit')} </p>
                                </h3>
                                <AbsenceTime lastVisit={date} />
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col-reverse items-center gap-5 md:flex-col md:items-start">
                        <Button
                            as={Link}
                            href="#"
                            variant="bordered"
                            className="border-primary h-fit w-full rounded-full border-2 text-xl font-semibold md:px-10 md:py-5"
                            color="primary"
                        >
                            {t('fav-employees.offer')}
                        </Button>
                        <div className="flex flex-row items-center gap-2.5 font-medium">
                            <div className="flex flex-col">
                                <h2 className="text-[2rem]">12456</h2>
                                <h3 className="text-primary text-xl">{t('fav-employees.reviews')}</h3>
                            </div>
                            <Divider className="bg-primary h-11" orientation="vertical" />
                            <div className="flex flex-col">
                                <h2 className="text-[2rem]">89%</h2>
                                <h3 className="text-muted text-xl">{t('fav-employees.positive')}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
