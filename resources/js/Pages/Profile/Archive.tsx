import Button from '@/Components/Shared/Button';
import { useRouter } from '@/hooks/useRouter';
import AppLayout from '@/Layouts/AppLayout';
import DashboardLayout from '@/Layouts/DashboardLayout';
import UserLayout from '@/Layouts/UserLayout';
import { PageProps } from '@/types';
import Task from '@/types/models/task';
import { BreadcrumbItem, Breadcrumbs, Divider, Image, Link } from '@heroui/react';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';

export default function Archive({ tasks, locale }: PageProps<{ tasks: Task[] }>) {
    const { t } = useLaravelReactI18n();
    const { route } = useRouter();

    return (
        <>
            <Head title={t('task-archive.title')} />

            <div className="box-border flex flex-col items-center justify-center gap-[1.56rem] pb-[2.5rem]">
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
                <div className="flex flex-col items-start justify-center gap-[1.875rem] py-[2.5rem] last:pb-0">
                    {tasks.map((task) => (
                        <div
                            className="flex w-full flex-col items-center gap-[1.25rem] sm:flex-row sm:items-start"
                            key={task.id}
                        >
                            <Image
                                src={task.images?.[0]}
                                className="size-[5rem] min-w-[5rem] rounded-full"
                            />

                            <div className="flex w-full flex-col items-center gap-2.5 sm:items-start sm:gap-1">
                                <div className="flex w-full flex-col-reverse items-center justify-between gap-2.5 sm:flex-row sm:gap-12">
                                    <div className="text-muted text-center text-[1.625rem] leading-[2.25rem] font-semibold sm:text-start">
                                        {task.name}
                                    </div>
                                    <div className="text-[2rem] leading-[2.75rem] font-semibold">
                                        {Intl.NumberFormat(locale?.current, {
                                            style: 'currency',
                                            currencyDisplay: 'narrowSymbol',
                                            currency: task.currency?.code ?? 'UAH',
                                        }).format(task.price)}
                                    </div>
                                </div>

                                <div className="text-muted text-center text-[1.125rem] font-medium break-all sm:text-start">
                                    {t('task-archive.created', {
                                        created: new Date(task.createdAt).toLocaleDateString(
                                            locale?.current,
                                            {
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            },
                                        ),
                                    })}
                                </div>

                                <Button
                                    as={Link}
                                    href={route('sub-category.task.create.index', {
                                        subCategory: task.subCategory?.id,
                                        n: task.name,
                                        d: task.description,
                                    })}
                                    className="bg-primary flex w-full items-center rounded-full text-white sm:ml-auto sm:w-fit sm:py-[1.875rem] sm:text-[1.25rem] sm:font-semibold"
                                >
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
        <UserLayout>
            <DashboardLayout>{page}</DashboardLayout>
        </UserLayout>
    </AppLayout>
);
