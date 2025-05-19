import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Divider } from '@heroui/divider';
import { Link } from '@inertiajs/react';
import SolarMoneyBagLinear from '~icons/solar/money-bag-linear';
import TablerReceipt from '~icons/tabler/receipt';
import SolarCardOutline from '~icons/solar/card-outline';
import MynauiShare from '~icons/mynaui/share';
import IconamoonProfileLight from '~icons/iconamoon/profile-light';
import { addToast } from '@heroui/toast';
import React from 'react';
import { useRouter } from '@/hooks/useRouter';
import { cn } from '@heroui/react';

export default function UserLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const { t } = useLaravelReactI18n();
    const { current, route } = useRouter();
    const profileLink = `${window.location.origin}/profile`;



    return (
        <div className="item-center  mx-auto flex h-full w-full gap-[2rem] flex-col text-white 2xl:max-w-[96rem] 2xl:flex-row ">

            <main className="w-full">
                {children}
            </main>


            <div className="flex">
            <Divider className="bg-white 2xl:w-divider 2xl:h-full" />

                <div className="flex flex-col pb-12 2xl:max-w-min px-9 rounded-r-[2rem] bg-surface">
                    <div className="flex w-full max-w-md items-end justify-center py-[1.875rem] 2xl:h-36">
                        <div className="flex w-full items-center justify-between gap-8">
                            <div>
                                <div className="text-[2.5rem] leading-none font-medium text-black dark:text-white">
                                    12456
                                </div>

                                <div className="text-primary text-[1.25rem] leading-none font-medium">
                                    {t('user-layout.reviews')}
                                </div>
                            </div>

                            <Divider orientation="vertical" className="bg-primary h-11" />

                            <div>
                                <div className="text-[2.5rem] leading-none font-medium text-black dark:text-white">
                                    100%
                                </div>

                                <div className="text-muted dark:text[#A7A7A7] text-[1.25rem] leading-none font-medium">
                                    {t('user-layout.positive')}
                                </div>
                            </div>
                        </div>
                    </div>

                        <Divider className="bg-muted" />

                        <div className="flex flex-col gap-[1.875rem] pt-[1.875rem]">
                            <div className="flex flex-col gap-[0.625rem]">
                                <div className="flex h-[2.75rem] gap-[0.625rem]">
                                    <SolarMoneyBagLinear className="text-primary aspect-square size-[2.75rem] min-w-[2.75rem]" />
                                    <div className="text-[2rem] leading-[2.75rem] font-medium text-black dark:text-white">
                                        {t('user-layout.my_balance')}
                                    </div>
                                </div>

                                <div className="flex w-fit gap-[3.125rem]">
                                    <div className="flex flex-1 flex-col gap-2">
                                        <div className="dark:text[#A7A7A7] text-[1.125rem] leading-[1.5rem] font-medium text-[#929292]">
                                            {t('user-layout.specialist')}
                                        </div>
                                        <div className="text-[1.125rem] leading-[1.5rem] font-medium text-black dark:text-white">
                                            1000 грн
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col gap-2">
                                        <div className="dark:text[#A7A7A7] text-[1.125rem] leading-[1.5rem] font-medium text-[#929292]">
                                            {t('user-layout.customer')}
                                        </div>
                                        <div className="text-[1.125rem] leading-[1.5rem] font-medium text-black dark:text-white">
                                            1000 грн
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-[0.625rem]">
                                    <TablerReceipt className="text-primary aspect-square size-[1.5rem]" />
                                    <div className="text-primary text-[1rem] leading-[1.375rem] font-medium">
                                        {t('user-layout.extracts')}
                                    </div>
                                </div>

                                <div className="flex items-center gap-[0.625rem]">
                                    <SolarCardOutline className="text-primary aspect-square size-[1.5rem]" />
                                    <div className="text-primary text-[1rem] leading-[1.375rem] font-medium">
                                        {t('user-layout.withdrawal')}
                                    </div>
                                </div>
                            </div>

                    <Divider className="bg-muted"/>

                    <div className="flex flex-col gap-[0.625rem]">
                        <div className="flex items-start gap-[0.625rem]">
                            <MynauiShare className="text-primary aspect-square size-[2.75rem] min-w-[2.75rem]" />
                            <div className="text-[2rem] leading-[2.75rem] font-medium text-black dark:text-white">
                                {t('user-layout.invite_friends')}
                            </div>
                        </div>

                        <div className="flex gap-[3.125rem]">
                            <div className="text-muted text-[0.875rem] leading-[1.1875rem] font-medium dark:text-[#A7A7A7]">
                                {t('user-layout.invite_friends_text')}
                            </div>
                        </div>
                    </div>

                    <Divider className="bg-muted" />

                    <div className="flex flex-col gap-[0.625rem]">
                        <div className="flex items-start gap-[0.625rem]">
                            <IconamoonProfileLight className="text-primary aspect-square size-[2.75rem] min-w-[2.75rem]" />
                            <div className="flex items-center text-[2rem] leading-[120%] font-medium text-black dark:text-white">
                                {t('user-layout.profile_link')}
                            </div>
                        </div>

                        <div className="flex gap-[3.125rem]">
                            <div className="text-muted text-[0.875rem] leading-[1.1875rem] font-medium dark:text-[#A7A7A7]">
                                {t('user-layout.profile_link_text')}
                            </div>
                        </div>

                        <Button
                            className="border-muted rounded-full border bg-[#] px-[1rem] dark:border-[#A7A7A7]"
                            onPress={(): void => {
                                navigator.clipboard.writeText(profileLink).then(() =>
                                    addToast({
                                        title: t('user-layout.copied'),
                                        color: 'success',
                                        timeout: 2000,
                                        shouldShowTimeoutProgress: true,
                                    }),
                                );
                            }}
                        >
                            <div className="text-muted/50 text-[0.875rem] leading-[1.1875rem]">
                                {profileLink}
                            </div>
                        </Button>

                        <div className="text-muted text-[0.875rem] leading-[1.1875rem] font-medium dark:text-[#A7A7A7]">
                            {t('user-layout.copy_link')}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
