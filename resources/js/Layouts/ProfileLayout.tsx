import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';
import { useRouter } from '@/hooks/useRouter';
import { Avatar, cn, Tab, Tabs } from '@heroui/react';
import { Link } from '@inertiajs/react';
import { usePageTransition } from '@/hooks/usePageTransition';
import OneStarRating from "@/Components/OneStarRating";

export default function ProfileLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const { t } = useLaravelReactI18n();
    const { current, route } = useRouter();
    const transitioning = usePageTransition({ segmentIndex: 1 });

    const tabs = [
        {
            title: 'user-layout.general-info-tab',
            link: 'profile.general-info',
        },
        {
            title: 'user-layout.start-earning-tab',
            link: 'profile.become-employee',
        },
        {
            title: 'user-layout.employee-info-tab',
            link: 'profile.employee-info',
        },
    ];

    const user1 = {
        id: '1',
        avatar: 'https://cdn.mos.cms.futurecdn.net/aLt5gVBGkBctmjY6Ed7v7g.png',
        name: 'Iван. ',
        phone: '+380 98 677 78 88',
        email: 'email.kyiv@gmail.com',
        rating: '4.5',
        certificates: [
            {
                id: 'cert-1',
                title: 'Frontend Development',
                image: 'https://mastera-remonta.com/wp-content/uploads/2019/08/remont-kvartir.jpg',
            },
            {
                id: 'cert-2',
                title: 'UI/UX Design',
                image: 'https://media.licdn.com/dms/image/v2/D5622AQE7byBwiq-nVg/feedshare-shrink_800/feedshare-shrink_800/0/1719756097829?e=2147483647&v=beta&t=ArIwywMFDccQXC0c1TeAhmVdZlS2pHJbRoZ0QUegLmU',
            },
            {
                id: 'cert-3',
                title: 'React Advanced',
                image: 'https://media.licdn.com/dms/image/v2/D5622AQEuVfx6HRVG5w/feedshare-shrink_800/feedshare-shrink_800/0/1721729211619?e=2147483647&v=beta&t=eVyt17cfmmzH75dk2r7IuKleBcs-X1uVYieY0dHAyFA',
            },
            {
                id: 'cert-4',
                title: 'UI/UX Design',
                image: 'https://media.licdn.com/dms/image/v2/D5622AQE7byBwiq-nVg/feedshare-shrink_800/feedshare-shrink_800/0/1719756097829?e=2147483647&v=beta&t=ArIwywMFDccQXC0c1TeAhmVdZlS2pHJbRoZ0QUegLmU',
            },
            {
                id: 'cert-5',
                title: 'UI/UX Design',
                image: 'https://digitallycode.com/wp-content/uploads/2024/09/dg_certificate.webp',
            },
        ],
    };

    return (
        <div className="h-full gap-[1.5rem] 2xl:max-w-[96rem] 2xl:flex-row">
            <div className="bg-surface flex h-full w-full flex-col gap-[1.5rem] rounded-l-[2rem] px-[1rem] py-[1rem]">
                <div className="flex items-start gap-[0.938rem]">
                    <Avatar
                        src={user1.avatar}
                        className="win-w-[5.875rem] h-[5.875rem] w-[5.875rem]"
                    ></Avatar>


                    <div className="flex flex-col text-[1.5rem] leading-[2.75rem] font-medium">

                        <div className="flex justify-between gap-[1.25rem]">
                            {user1.name}
                            <OneStarRating totalReviews={user1.rating} positiveReviews={user1.rating-2} evaluationType={"task"} />

                        </div>

                        <div className="flex justify-between gap-[1.25rem]">
                            <div className="text-[1.25rem] text-muted">{user1.email}</div>
                            <OneStarRating totalReviews={user1.rating-1} positiveReviews={user1.rating-2} />
                        </div>


                    </div>

                </div>

                <Tabs
                    classNames={{
                        tabList: 'w-fit p-0 border-b border-divider',
                        cursor: 'w-full',
                        tab: 'max-w-fit px-[0.75rem] ',
                    }}
                    variant="underlined"
                    selectedKey={tabs.find((item) => current(item.link))?.link ?? null}
                >
                    {tabs.map((tab) => (
                        <Tab
                            key={tab.link}
                            title={t(tab.title)}
                            as={Link}
                            href={route(tab.link)}
                            className={cn('text-foreground gap-[1rem] pb-[1rem] text-[1.25rem]')}
                        />
                    ))}
                </Tabs>

                <main
                    className={cn(
                        'w-full',
                        transitioning ? 'animate-page-fade-out' : 'animate-page-fade-in',
                    )}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}
