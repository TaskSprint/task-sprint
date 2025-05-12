import Button from '@/Components/Shared/Button';
import { Avatar, Divider, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import HeartCheckbox from '@/Components/HeartCheckbox';

export default function FavoriteEmployeesSM() {
    const { t } = useLaravelReactI18n();
    const absenceTime = '2 години'; /*заглушка на время вместо CurrentTimeStamp - LastVisitTime*/

    return (
        <div className="border-primary relative flex w-full flex-col items-center gap-2.5 overflow-hidden rounded-[1.25rem] border-1 p-2.5">
            <div className="flex w-full flex-col gap-2.5 sm:flex-row">
                <div>
                    <Avatar
                        className="aspect-square size-21.5"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        as={Link}
                        href="#"
                    />
                </div>
                <div className="flex flex-col gap-2 pt-1">
                    <div className="flex items-center gap-2.5">
                        <h2>
                            <Link
                                className="text-xl font-bold focus:text-gray-500 dark:text-white"
                                href="#"
                            >
                                <div className="inline-block w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                    Коваль А.
                                </div>
                            </Link>
                        </h2>
                        <HeartCheckbox />
                    </div>
                    <h3 className="text-muted inline-block w-full content-start overflow-hidden text-[0.875rem] font-medium text-nowrap text-ellipsis whitespace-nowrap">
                        {t('task-creation.last-visit', { absence: absenceTime })}
                    </h3>
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
                className="w-full rounded-[2.25rem] px-4 py-3 text-xl font-semibold text-white"
            >
                <div className="inline-block w-full overflow-hidden text-center text-ellipsis whitespace-nowrap">
                    {t('task-creation.offer')}
                </div>
            </Button>
        </div>
    );
}
