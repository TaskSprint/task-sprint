import CreateTaskDropdown from '@/Components/CreateTaskDropdown';
import Button from '@/Components/Shared/Button';
import { useRouter } from '@/hooks/useRouter';
import AppLayout from '@/Layouts/AppLayout';
import DashboardLayout from '@/Layouts/DashboardLayout';
import UserLayout from '@/Layouts/UserLayout';
import { PageProps } from '@/types';
import Task from '@/types/models/task';
import { Divider, Image, Link } from '@heroui/react';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';

export default function NewTask({ tasks, locale }: PageProps<{ tasks: Task[] }>) {
    const { route } = useRouter();
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('user-layout.new_task')} />

            <div className="flex w-full flex-col items-center justify-center gap-[1.56rem] px-9 pb-8 lg:px-[6.25rem]">
                <div className="flex w-full items-center justify-center text-center text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white">
                    {t('new-task.title')}
                </div>

                <div className="text-muted w-full items-center text-center text-[0.875rem] leading-[1.19rem] font-medium dark:text-[#A7A7A7]">
                    {t('new-task.description')}
                </div>

                <CreateTaskDropdown>
                    <Button className="bg-primary items-center justify-center rounded-full py-[2rem] text-center text-[1.25rem] leading-[1.69rem] font-semibold text-white">
                        {t('new-task.create_task_button')}
                    </Button>
                </CreateTaskDropdown>
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
                            key={task.id}
                            className="flex w-full flex-col items-center gap-[1.25rem] lg:flex-row lg:items-start"
                        >
                            <Image
                                src={task.images?.[0]}
                                className="size-[5rem] min-w-[5rem] rounded-full"
                            />

                            <div className="flex w-full flex-col items-center gap-[0.3125rem] lg:items-start">
                                <div className="flex w-full flex-col-reverse items-center justify-between gap-5 lg:flex-row">
                                    <div className="text-center text-[1.625rem] leading-[2.25rem] font-semibold text-black lg:text-left dark:text-white">
                                        {task.name}
                                    </div>
                                    <div className="text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white">
                                        {Intl.NumberFormat(locale?.current, {
                                            style: 'currency',
                                            currencyDisplay: 'narrowSymbol',
                                            currency: task.currency?.code ?? 'UAH',
                                        }).format(task.price)}
                                    </div>
                                </div>

                                <div className="text-center text-[1.125rem] leading-[1.5625rem] font-medium break-all text-black lg:text-left dark:text-white">
                                    {t('new-task.completed_by', {
                                        date: new Date(
                                            task.order?.updatedAt ?? new Date(),
                                        ).toLocaleDateString(locale?.current, {
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        }),
                                        customer: task.order?.employee?.name ?? '',
                                    })}
                                </div>

                                <div className="flex w-full flex-col items-start gap-[0.625rem] lg:flex-row">
                                    <Button
                                        as={Link}
                                        href={route('sub-category.task.create.index', {
                                            subCategory: task.subCategory?.id,
                                            n: task.name,
                                            d: task.description,
                                        })}
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
