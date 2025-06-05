import Button from '@/Components/Shared/Button';
import { useRouter } from '@/hooks/useRouter';
import AppLayout from '@/Layouts/AppLayout';
import DashboardLayout from '@/Layouts/DashboardLayout';
import UserLayout from '@/Layouts/UserLayout';
import { PageProps } from '@/types';
import Task from '@/types/models/task';
import { Divider, Image, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';

export default function InProgress({ tasks, locale }: PageProps<{ tasks: Task[] }>) {
    const { t } = useLaravelReactI18n();
    const { route } = useRouter();

    return (
        <div className="mx-auto flex flex-col gap-8 lg:px-[6.25rem]">
            <div className="flex flex-col justify-center gap-[1.875rem] px-9 2xl:px-0">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="flex w-full flex-col flex-wrap items-center gap-[1.25rem] sm:flex-row sm:flex-nowrap sm:items-start"
                    >
                        <Image
                            src={task.images?.[0]}
                            className="size-[5rem] min-w-[5rem] rounded-full bg-cover bg-center"
                        />

                        <div className="flex w-full flex-col items-center gap-[0.625rem] sm:items-start">
                            <div className="text-center text-[1.625rem] leading-[2.25rem] font-semibold break-all text-black dark:text-white">
                                {task.name}
                            </div>

                            <div className="text-[1.125rem] leading-[1.5rem] font-medium text-black dark:text-white">
                                {t('tasks-in-progress.estimation', {
                                    estimated: new Date(task.estimatedDate).toLocaleDateString(
                                        locale?.current,
                                        {
                                            month: 'long',
                                            day: 'numeric',
                                        },
                                    ),
                                })}
                            </div>

                            <Button
                                className="border-primary text-primary w-full rounded-[2.25rem] border-2 bg-[0] py-6 text-[1.25rem] leading-[1.6rem] font-semibold sm:w-fit sm:p-[2rem]"
                                as={Link}
                                href={route('task.show', task.id)}
                            >
                                {t('tasks-in-progress.view_task')}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <Divider className="bg-muted 2xl:hidden" />

            <div className="px-9 2xl:px-0">
                <Button
                    as={Link}
                    href={route('profile.archive')}
                    className="border-muted text-muted w-full justify-center rounded-[2.25rem] border-2 bg-[0] px-[7.5rem] py-6 text-[1.25rem] leading-[1.688rem] font-semibold sm:h-fit sm:py-5 dark:border-[#A7A7A7] dark:text-[#A7A7A7]"
                >
                    {t('tasks-in-progress.archive_orders')}
                </Button>
            </div>
        </div>
    );
}

InProgress.layout = (page: React.ReactNode) => (
    <AppLayout>
        <UserLayout>
            <DashboardLayout>{page}</DashboardLayout>
        </UserLayout>
    </AppLayout>
);
