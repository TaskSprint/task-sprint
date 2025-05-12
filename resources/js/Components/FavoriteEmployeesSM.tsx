import Button from '@/Components/Shared/Button';
import { Avatar, Divider, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import HeartCheckbox from '@/Components/HeartCheckbox';

export default function FavoriteEmployeesSM() {
    const { t } = useLaravelReactI18n();
    const absenceTime = '2 години'; /*заглушка на время вместо CurrentTimeStamp - LastVisitTime*/

    return (
        <div className="border-primary dark:color-white relative flex min-h-[15rem] w-[21.25rem] flex-col items-start gap-2.5 rounded-[1.25rem] border-1">
            <div className="mb-5 flex h-[9rem] flex-row">
                <div>
                    <Avatar
                        className="mt-3.5 ml-2.75 size-21.5 content-start justify-start"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        as={Link}
                        href="#"
                    ></Avatar>
                </div>
                <div className="mt-6 ml-3.25 flex h-11.5 w-[10.75rem] flex-col gap-5">
                    <div className="flex h-5 flex-row gap-2.5">
                        <h2>
                            <Link
                                className="text-xl font-bold focus:text-gray-500 dark:text-white"
                                href="#"
                            >
                                Коваль А.
                            </Link>
                        </h2>
                        <p>
                            <HeartCheckbox />
                        </p>
                    </div>
                    <h3 className="h-[1.1875rem] w-[13.3125rem] content-start text-[0.875rem] font-medium text-[#929292] dark:text-[#A7A7A7]">
                        {t('task-creation.last-visit', { absence: absenceTime })}
                    </h3>
                    <div className="flex h-[2.875rem] w-[14rem] flex-row items-center gap-2.5 pl-1.75 font-medium">
                        <div className="flex flex-col">
                            <h2 className="text-[1.25rem] dark:text-white">12456</h2>
                            <h3 className="text-primary text-[0.75rem]">
                                {t('task-creation.reviews')}
                            </h3>
                        </div>
                        <Divider className="bg-primary max-h-11.5" orientation="vertical" />
                        <div className="flex flex-col">
                            <h2 className="text-[1.25rem] dark:text-white">100%</h2>
                            <h3 className="text-[0.75rem] text-gray-500 dark:text-[#A7A7A7]">
                                {t('task-creation.positive')}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <p className="">
                <Button
                    as={Link}
                    href="#"
                    className="bg-primary ml-10.25 flex flex-col rounded-[2.25rem] px-4 py-3 text-xl font-semibold"
                >
                    {t('task-creation.offer')}
                </Button>
            </p>
        </div>
    );
}
