import Button from '@/Components/Shared/Button';
import { Link } from '@heroui/link';
import { Avatar } from '@heroui/avatar';
import { Divider } from '@heroui/divider';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ReactNode, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import UserLayout from '@/Layouts/UserLayout';

export default function Favorite() {
    const { t } = useLaravelReactI18n();
    const absence = 2; /*заглушка на время вместо CurrentTimeStamp - LastVisitTime*/
    const [checked, setChecked] = useState(false);

    return (
        <div className="border-muted flex flex-col justify-between gap-3 border-b px-9 py-10 md:flex-row">
            <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
                <Link>
                    <Avatar
                        className="size-max content-start justify-start"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    />
                </Link>
                <div className="flex flex-col items-center gap-5 md:items-start">
                    <div className="flex flex-row gap-2">
                        <Link color="foreground" className="text-2xl font-bold">
                            Коваль А.
                        </Link>
                        <div className="relative size-8">
                            <input
                                type="checkbox"
                                checked={checked}
                                className="peer absolute inset-0 z-1 size-full cursor-pointer opacity-0"
                                onChange={() => setChecked(!checked)}
                            />
                            <svg
                                viewBox="0 0 24 24"
                                className="size-full fill-transparent stroke-sky-400 stroke-[3px] transition-all peer-checked:fill-sky-400 peer-active:scale-90"
                            >
                                <path d="M12 21s-6-4.35-9-8.15C-1 6.6 4.8 0 12 6.2 19.2 0 25 6.6 21 12.85 18 16.65 12 21 12 21z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="content-start text-base font-medium text-gray-500">
                        Був(ла) на сайті {absence} години назад
                    </h3>
                </div>
            </div>
            <div className="relative flex flex-col-reverse items-center gap-5 md:flex-col">
                <Button
                    as={Link}
                    href="#"
                    variant="bordered"
                    className="h-fit w-full rounded-full text-xl font-semibold md:px-10 md:py-5"
                    color="primary"
                >
                    Запропонувати роботу
                </Button>
                <div className="flex flex-row items-center gap-2.5 font-medium">
                    <div className="flex flex-col">
                        <h2 className="text-[2rem]">12456</h2>
                        <h3 className="text-primary text-xl">відгуків</h3>
                    </div>
                    <Divider className="bg-primary h-11" orientation="vertical" />
                    <div className="flex flex-col">
                        <h2 className="text-[2rem]">100%</h2>
                        <h3 className="text-xl text-gray-500">позитивних</h3>
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
