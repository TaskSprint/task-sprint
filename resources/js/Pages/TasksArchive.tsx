import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';
import { Divider } from '@heroui/divider';
import AppLayout from "@/Layouts/AppLayout";
import UserLayout from "@/Layouts/UserLayout";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";
export default function TasksArchive() {
    const { t } = useLaravelReactI18n();

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
                        href="/profile/in-progress"
                        className="text-[1.25rem] leading-[1.688rem] font-medium text-muted dark:text-[#A7A7A7]">
                        {t('task-archive.in_progress')}
                    </BreadcrumbItem>

                    <BreadcrumbItem className="text-[1.25rem] leading-[1.688rem] font-medium text-black dark:text-white">
                        {t('task-archive.task_archive')}
                    </BreadcrumbItem>

                </Breadcrumbs>

            </div>

            <Divider className="bg-muted" />


            <div className="px-[6.25rem]">
                <div className="flex flex-col items-start justify-center gap-[1.875rem] py-[2.5rem]">
                    {tasks.map((task) => (
                        <div className="flex w-full items-start gap-[1.25rem]"
                             key={task.id}>
                                <img
                                    src={task.image}
                                    alt={task.title}
                                    className="h-[5rem] w-[5rem] rounded-full"
                                />

                            <div className="flex w-full flex-col items-start gap-[0.3125rem]">
                                <div className="flex w-full justify-between gap-[5.75rem]">
                                    <div className="text-[1.625rem] leading-[2.25rem] font-semibold text-black dark:text-white">
                                        {task.title}
                                    </div>
                                    <div className="text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white">
                                        {task.price}
                                    </div>
                                </div>

                                <div className="text-[1.125rem] leading-[1.5625rem] font-medium break-all text-black dark:text-white">
                                    {t('task-archive.created', { created: task.created_at })}
                                </div>

                                <Button className="ml-auto bg-primary flex items-center  rounded-[2.25rem] py-[1.875rem] text-[1.25rem] leading-[1.6875rem] font-semibold text-white">
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

TasksArchive.layout = (page: React.ReactNode) => (
    <AppLayout>
        <UserLayout>{page}</UserLayout>
    </AppLayout>
);
