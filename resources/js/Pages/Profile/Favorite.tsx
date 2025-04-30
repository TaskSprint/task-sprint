import Button from '@/Components/Shared/Button';
import { Link } from '@heroui/link';
import { Avatar } from '@heroui/avatar';
import { Divider } from '@heroui/divider';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ReactNode } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import UserLayout from '@/Layouts/UserLayout';
import HeartCheckbox from '@/Components/Icons/HeartCheckbox';

export default function Favorite() {
    const { t } = useLaravelReactI18n();
    const absenceTime = 2; /*заглушка на время вместо CurrentTimeStamp - LastVisitTime*/

    return (
        <div className="border-muted flex flex-col justify-between gap-3 border-b px-9 py-10 md:flex-row dark:bg-[#2c2c2c]">
            <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
                <Link>
                    <Avatar
                        className="size-max content-start justify-start"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                </Link>
                <div className="flex flex-col items-center gap-5 md:items-start">
                    <div className="flex flex-row gap-2">
                        <Link color="foreground" className="text-2xl font-bold text-black dark:text-white focus:text-gray-500">
                            Коваль А.
                        </Link>
                        <p>
                            <HeartCheckbox />
                        </p>
                    </div>
                    <h3 className="content-start text-base font-medium text-[#929292] dark:text-[#A7A7A7]">
                        {t('fav-employees.last-visit', { absence: absenceTime } )}
                    </h3>
                </div>
            </div>
            <div className="relative flex flex-col-reverse items-center gap-5 md:flex-col">
                <Button
                    as={Link}
                    href="#"
                    variant="bordered"
                    className="h-fit bg-white dark:bg-[#2c2c2c] border-2 border-primary w-full
                    rounded-full text-xl font-semibold md:px-10 md:py-5"
                    color="primary"
                >
                    {t('fav-employees.offer')}
                </Button>
                <div className="flex flex-row items-center gap-2.5 font-medium">
                    <div className="flex flex-col">
                        <h2 className="text-[2rem] dark:text-white">12456</h2>
                        <h3 className="text-primary text-xl">{t('fav-employees.reviews')}</h3>
                    </div>
                    <Divider className="bg-primary h-11" orientation="vertical" />
                    <div className="flex flex-col">
                        <h2 className="text-[2rem] dark:text-white">100%</h2>
                        <h3 className="text-xl text-gray-500 dark:text-[#A7A7A7]">{t('fav-employees.positive')}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

Favorite.layout = (page: ReactNode) => (
    <AppLayout>
        <UserLayout>{page}</UserLayout>
    </AppLayout>
);
