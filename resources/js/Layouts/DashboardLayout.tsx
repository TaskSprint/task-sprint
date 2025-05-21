import React, { PropsWithChildren } from 'react';
import { cn } from '@heroui/react';
import Navigation from '@/Components/Layout/Navigation';
import { Footer } from '@/Components/Layout/Footer';
import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Divider } from '@heroui/divider';
import { Link } from '@inertiajs/react';
import { useRouter } from '@/hooks/useRouter';

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
        <>
            <Navigation />

            <div className="flex">
                    <main className="background-gradient flex w-full flex-col max-w-6xl mx-auto">
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

                        <div className="w-full 2xl:pb-12">{children}</div>
                    </main>




            </div>


            <Footer />
        </>
    );
}
