import AbsenceTime from '@/Components/AbsenceTime';
import CreateTaskDropdown from '@/Components/CreateTaskDropdown';
import HeartCheckbox from '@/Components/HeartCheckbox';
import Button from '@/Components/Shared/Button';
import { useRouter } from '@/hooks/useRouter';
import User from '@/types/models/user';
import { Avatar, Divider, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function FavoriteEmployees({ employee }: Readonly<{ employee: User }>) {
    const { t } = useLaravelReactI18n();
    const { route } = useRouter();
    const date = new Date('2025-05-19T14:00:00Z');

    return (
        <div className="border-muted flex flex-col justify-between gap-3 px-9 not-last:border-b not-last:pb-8 md:flex-row lg:px-[6.25rem] 2xl:border-b 2xl:pb-8">
            <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
                <Avatar
                    as={Link}
                    className="aspect-square size-32 cursor-pointer content-start justify-start rounded-full"
                    src={employee.avatar}
                    href={route('profile.general-info', { user: employee.id })}
                />
                <div className="flex flex-col items-center gap-5 md:items-start">
                    <div className="flex flex-row gap-2">
                        <Link
                            href={route('profile.general-info', { user: employee.id })}
                            color="foreground"
                            className="cursor-pointer text-2xl font-bold"
                        >
                            {employee.name}
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
                <CreateTaskDropdown employee={employee.id}>
                    <Button
                        variant="bordered"
                        className="border-primary h-fit w-full rounded-full border-2 text-xl font-semibold md:px-10 md:py-5"
                        color="primary"
                    >
                        {t('fav-employees.offer')}
                    </Button>
                </CreateTaskDropdown>
                <div className="flex flex-row items-center gap-2.5 font-medium">
                    <div className="flex flex-col">
                        <h2 className="text-[2rem]">12456</h2>
                        <h3 className="text-primary text-xl">{t('fav-employees.reviews')}</h3>
                    </div>
                    <Divider className="bg-primary h-11" orientation="vertical" />
                    <div className="flex flex-col">
                        <h2 className="text-[2rem]">100%</h2>
                        <h3 className="text-muted text-xl">{t('fav-employees.positive')}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
