import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Image } from '@heroui/image';
import React from 'react';
import UserLayout from '@/Layouts/UserLayout';
import AppLayout from '@/Layouts/AppLayout';

export default function TasksInProgress() {
    const { t } = useLaravelReactI18n();

    const tasks = [
        {
            title: 'Створити сайт для магазину одягу',
            deadline: '15 квітня',
            image: 'https://www.colorland.com/sites/default/files/styles/optimized/public/article/A%20man%20wearing%20a%20hat%2C%20taking%20a%20photo%20at%20sunset.jpg?itok=RL_hlVbF',
        },
        {
            title: 'Редизайн мобільного додатку',
            deadline: '20 травня',
            image: 'https://www.digitalphoto.de/media/digitalphoto/styles/tec_frontend_large/public/images/2018/09/adobestock_101692534.jpeg?itok=lMmBoMR5',
        },
        {
            title: 'Лендінг для курсу',
            deadline: '1 червня',
            image: 'https://www.nationalgeographic.it/upload/ngi-hero/cover-1685960847724-Hero_100.jpg',
        },
    ];

    return (
        <div className="px-[6.25rem]">
            <div className="flex flex-col items-start justify-center gap-[1.875rem] py-[2.5rem]">
                {tasks.map((task, index) => (
                    <div key={index} className="flex flex-row items-start gap-[1.25rem]">
                        {task.image.startsWith('http') ? (
                            <Image
                                src={task.image}
                                alt={task.title}
                                className="h-[5rem] w-[5rem] rounded-full bg-cover bg-center"
                            />
                        ) : (
                            <div
                                className="h-[5rem] w-[5rem] rounded-full bg-cover bg-center"
                                dangerouslySetInnerHTML={{ __html: task.image }}
                            />
                        )}

                        <div className="flex flex-col items-start gap-[0.625rem]">
                            <div className="text-[1.625rem] leading-[2.25rem] font-semibold break-all text-black dark:text-white">
                                {task.title}
                            </div>

                            <div className="text-[1.125rem] leading-[1.5rem] font-medium text-black dark:text-white">
                                {t('tasks-in-progress.complete_order_by')} {task.deadline}
                            </div>

                            <Button className="border-primary text-primary h-[4rem] w-[19rem] rounded-[2.25rem] border-2 bg-[0] p-0 text-[1.25rem] leading-[1.6rem] font-semibold">
                                {t('tasks-in-progress.view_task')}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <Button className="py[2.5rem] border-muted text-muted h-[4.3rem] w-full justify-center rounded-[2.25rem] border-2 bg-[0] px-[7.5rem] text-[1.25rem] leading-[1.688rem] font-semibold dark:border-[#A7A7A7] dark:text-[#A7A7A7]">
                {t('tasks-in-progress.archive_orders')}
            </Button>
        </div>
    );
}

TasksInProgress.layout = (page: React.ReactNode) => (
    <AppLayout>
        <UserLayout>{page}</UserLayout>
    </AppLayout>
);
