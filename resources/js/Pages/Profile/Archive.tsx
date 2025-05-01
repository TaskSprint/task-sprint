import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import UserLayout from '@/Layouts/UserLayout';
import { BreadcrumbItem, Breadcrumbs, Divider } from '@heroui/react';
import { useRouter } from '@/hooks/useRouter';

export default function Archive() {
    const { t } = useLaravelReactI18n();
    const { route } = useRouter();

    const tasks = [
        {
            id: 1,
            title: 'Створити сайт для магазину одягу',
            created_at: '15 квітня 08:35',
            image: 'https://www.colorland.com/sites/default/files/styles/optimized/public/article/A%20man%20wearing%20a%20hat%2C%20taking%20a%20photo%20at%20sunset.jpg?itok=RL_hlVbF',
            price: '2000',
            customer: 'Георгій Ф.',
        },
        {
            id: 2,
            title: 'Редизайн мобільного додатку',
            created_at: '20 травня 20:15',
            image: 'https://www.digitalphoto.de/media/digitalphoto/styles/tec_frontend_large/public/images/2018/09/adobestock_101692534.jpeg?itok=lMmBoMR5',
            price: '1500',
            customer: 'Егором К.',
        },
        {
            id: 3,
            title: 'Лендінг для курсу',
            created_at: '1 червня 21:15',
            image: 'https://www.nationalgeographic.it/upload/ngi-hero/cover-1685960847724-Hero_100.jpg',
            price: '1000',
            customer: 'Георгій Ф.',
        },
    ];

    return (
        <>
            <div className="box-border flex flex-col items-center justify-center gap-[1.56rem] py-[2.5rem]">
                <div className="flex h-[2.75rem] w-full items-center justify-center text-center text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white">
                    {t('task-archive.title')}
                </div>

                <Breadcrumbs className="gap-[1.2rem]">
                    <BreadcrumbItem
                        href={route('profile.in-progress')}
                        className="text-muted text-[1.25rem] leading-[1.688rem] font-medium dark:text-[#A7A7A7]"
                    >
                        {t('task-archive.in_progress')}
                    </BreadcrumbItem>

                    <BreadcrumbItem className="text-[1.25rem] leading-[1.688rem] font-medium text-black dark:text-white">
                        {t('task-archive.task_archive')}
                    </BreadcrumbItem>
                </Breadcrumbs>
            </div>

            <Divider className="bg-muted" />

            <div className="px-9">
                <div className="flex flex-col items-start justify-center gap-[1.875rem] py-[2.5rem]">
                    {tasks.map((task) => (
                        <div
                            className="flex w-full flex-col items-center gap-[1.25rem] sm:flex-row sm:items-start"
                            key={task.id}
                        >
                            <img
                                src={task.image}
                                alt={task.title}
                                className="h-[5rem] w-[5rem] rounded-full"
                            />

                            <div className="flex w-full flex-col items-center gap-2.5 sm:items-start sm:gap-1">
                                <div className="flex w-full flex-col-reverse items-center justify-between gap-2.5 sm:flex-row sm:gap-12">
                                    <div className="text-center text-[1.625rem] leading-[2.25rem] font-semibold sm:text-start">
                                        {task.title}
                                    </div>
                                    <div className="text-[2rem] leading-[2.75rem] font-semibold">
                                        {task.price}
                                    </div>
                                </div>

                                <div className="text-center text-[1.125rem] font-medium break-all sm:text-start">
                                    {t('task-archive.created', { created: task.created_at })}
                                </div>

                                <Button className="bg-primary flex w-full items-center rounded-full text-white sm:ml-auto sm:w-fit sm:py-[1.875rem] sm:text-[1.25rem] sm:font-semibold">
                                    {t('task-archive.repeat-task')}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

Archive.layout = (page: React.ReactNode) => (
    <AppLayout>
        <UserLayout>{page}</UserLayout>
    </AppLayout>
);
