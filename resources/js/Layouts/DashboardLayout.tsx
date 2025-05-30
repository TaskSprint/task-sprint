import { Link } from '@inertiajs/react';
import React, { PropsWithChildren } from 'react';
import Button from '@/Components/Shared/Button';
import { cn } from '@heroui/react';
import { Divider } from '@heroui/divider';
import { useRouter } from '@/hooks/useRouter';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function DashboardLayout({ children }: PropsWithChildren) {
    const { t } = useLaravelReactI18n();
    const { current, route } = useRouter();

    const tabs = [
        {
            title: 'user-layout.in_progress',
            link: 'profile.in-progress',
        },
        {
            title: 'user-layout.new_task',
            link: 'profile.new-task',
        },
        {
            title: 'user-layout.favourite_specialists',
            link: 'profile.favorite',
        },
        {
            title: 'user-layout.search_orders',
        },
    ];

    return (
        <main className="flex w-full flex-col">
            <div className="flex w-full flex-col justify-center gap-6 px-9 py-[1.875rem] lg:flex-row lg:flex-wrap lg:items-end 2xl:h-36 2xl:px-0">
                {tabs.map((tab) => (
                    <Button
                        as={Link}
                        key={tab.title}
                        href={tab.link ? route(tab.link) : undefined}
                        className={cn(
                            'h-fit rounded-[1.875rem] px-[1.25rem] text-center font-medium lg:py-[0.9375rem]',
                            tab.link &&
                                current(tab.link) &&
                                'bg-primary text-black dark:text-white',
                        )}
                    >
                        {t(tab.title)}
                    </Button>
                ))}
            </div>

            <Divider className="bg-muted" />

            <div className="w-full pt-8 2xl:pb-12">{children}</div>
        </main>
    );
}
