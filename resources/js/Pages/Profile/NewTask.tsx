import Button from '@/Components/Shared/Button';
import AppLayout from '@/Layouts/AppLayout';
import DashboardLayout from '@/Layouts/DashboardLayout';
import UserLayout from '@/Layouts/UserLayout';
import { Divider, Image } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';

export default function NewTask() {
    const { t } = useLaravelReactI18n();

    const tasks = [
        {
            title: 'Створити сайт для магазину одягу',
            deadline: '15 квітня',
            image: 'https://www.colorland.com/sites/default/files/styles/optimized/public/article/A%20man%20wearing%20a%20hat%2C%20taking%20a%20photo%20at%20sunset.jpg?itok=RL_hlVbF',
            price: '2000',
            customer: 'Георгій Ф.',
        },
        {
            title: 'Редизайн мобільного додатку',
            deadline: '20 травня',
            image: 'https://www.digitalphoto.de/media/digitalphoto/styles/tec_frontend_large/public/images/2018/09/adobestock_101692534.jpeg?itok=lMmBoMR5',
            price: '1500',
            customer: 'Егором К.',
        },
        {
            title: 'Лендінг для курсу',
            deadline: '1 червня',
            image: 'https://www.nationalgeographic.it/upload/ngi-hero/cover-1685960847724-Hero_100.jpg',
            price: '1000',
            customer: 'Георгій Ф.',
        },
    ];

    return (
        <>
            <div className="flex w-full flex-col items-center justify-center gap-[1.56rem] px-9 pb-8 lg:px-[6.25rem]">
                <div className="flex w-full items-center justify-center text-center text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white">
                    {t('new-task.title')}
                </div>

                <div className="text-muted w-full items-center text-center text-[0.875rem] leading-[1.19rem] font-medium dark:text-[#A7A7A7]">
                    {t('new-task.description')}
                </div>

                <Button className="bg-primary items-center justify-center rounded-full py-[2rem] text-center text-[1.25rem] leading-[1.69rem] font-semibold text-white">
                    {t('new-task.create_task_button')}
                </Button>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-[1.56rem] px-9 py-8 lg:px-[6.25rem]">
                <div className="text-center text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white">
                    {t('new-task.popular_tasks')}
                </div>

                <div className="font-manrope text-muted text-center text-[0.875rem] leading-[1.1875rem] font-medium dark:text-[#A7A7A7]">
                    {t('new-task.popular_tasks_description')}
                </div>
            </div>

            <Divider className="bg-muted" />

            <div className="px-9 lg:px-[6.25rem]">
                <div className="flex flex-col items-start justify-center gap-[1.875rem] pt-8">
                    {tasks.map((task) => (
                        <div
                            key={task.title}
                            className="flex w-full flex-col items-center gap-[1.25rem] lg:flex-row lg:items-start"
                        >
                            <Image
                                src={task.image}
                                alt={task.title}
                                className="size-[5rem] min-w-[5rem] rounded-full"
                            />

                            <div className="flex w-full flex-col items-center gap-[0.3125rem] lg:items-start">
                                <div className="flex w-full flex-col-reverse items-center justify-between gap-5 lg:flex-row">
                                    <div className="text-center text-[1.625rem] leading-[2.25rem] font-semibold text-black lg:text-left dark:text-white">
                                        {task.title}
                                    </div>
                                    <div className="text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white">
                                        {task.price}
                                    </div>
                                </div>

                                <div className="text-center text-[1.125rem] leading-[1.5625rem] font-medium break-all text-black lg:text-left dark:text-white">
                                    {t('new-task.completed_today_by', { customer: task.customer })}
                                </div>

                                <div className="flex w-full flex-col items-start gap-[0.625rem] lg:flex-row">
                                    <Button
                                        color="primary"
                                        className="flex w-full items-center justify-center rounded-[2.25rem] text-[1.25rem] leading-[1.6875rem] font-semibold text-white lg:w-fit lg:py-[1.875rem]"
                                    >
                                        {t('new-task.repeat-task')}
                                    </Button>

                                    <Button
                                        variant="bordered"
                                        color="primary"
                                        className="border-primary flex w-full items-center justify-center rounded-[2.25rem] text-[1.25rem] leading-[1.6875rem] font-semibold lg:w-fit lg:py-[1.875rem]"
                                    >
                                        {t('new-task.view-task')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

NewTask.layout = (page: React.ReactNode) => (
    <AppLayout>
        <UserLayout>
            <DashboardLayout>{page}</DashboardLayout>
        </UserLayout>
    </AppLayout>
);
