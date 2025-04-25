import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Divider } from '@heroui/divider';
import SolarMoneyBagLinear from '~icons/solar/money-bag-linear';
import TablerReceipt from '~icons/tabler/receipt';
import SolarCardOutline from '~icons/solar/card-outline';
import MynauiShare from '~icons/mynaui/share';
import IconamoonProfileLight from '~icons/iconamoon/profile-light';
import { addToast } from '@heroui/toast';

export default function UserLayout({ children }: { children: React.ReactNode }) {
    const { t } = useLaravelReactI18n();
    const profileLink = `${window.location.origin}/profile`;

    return (
        <div className="item-center bg-surface mx-auto flex h-full max-w-[84rem] text-white">
            <main className="flex w-full flex-col px-5">
                <div className="flex h-36 w-full flex-wrap items-end gap-6 pb-[1.875rem]">
                    <Button className="h-fit rounded-[1.875rem] px-[1.25rem] py-[0.9375rem] text-center text-[1.25rem] leading-[1.6875rem] font-medium text-black dark:text-white">
                        {t('user-layout.in_progress')}
                    </Button>

                    <Button className="h-fit rounded-[1.875rem] px-[1.25rem] py-[0.9375rem] text-center text-[1.25rem] leading-[1.6875rem] font-medium text-black dark:text-white">
                        {t('user-layout.new_task')}
                    </Button>

                    <Button className="h-fit rounded-[1.875rem] px-[1.25rem] py-[0.9375rem] text-center text-[1.25rem] leading-[1.6875rem] font-medium text-black dark:text-white">
                        {t('user-layout.favourite_specialists')}
                    </Button>

                    <Button className="h-fit rounded-[1.875rem] px-[1.25rem] py-[0.9375rem] text-center text-[1.25rem] leading-[1.6875rem] font-medium text-black dark:text-white">
                        {t('user-layout.search_orders')}
                    </Button>
                </div>

                <Divider className="bg-muted" />

                <div className="w-full pb-12">{children}</div>
            </main>

            <Divider orientation="vertical" className="bg-muted" />

            <div className="flex max-w-min flex-col px-5 pb-12">
                <div className="flex h-36 w-full items-end justify-center px-6 pb-[1.875rem]">
                    <div className="flex w-full items-center justify-between gap-12">
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
                    <div className="flex flex-col gap-[0.625rem] px-6">
                        <div className="flex h-[2.75rem] gap-[0.625rem]">
                            <SolarMoneyBagLinear className="text-primary h-[2.75rem] w-[2.75rem]" />
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
                            <TablerReceipt className="text-primary h-[1.8rem] w-[1.5rem]" />
                            <div className="text-primary text-[1rem] leading-[1.375rem] font-medium">
                                {t('user-layout.extracts')}
                            </div>
                        </div>

                        <div className="flex items-center gap-[0.625rem]">
                            <SolarCardOutline className="text-primary h-[1.8rem] w-[1.5rem]" />
                            <div className="text-primary text-[1rem] leading-[1.375rem] font-medium">
                                {t('user-layout.withdrawal')}
                            </div>
                        </div>
                    </div>

                    <Divider className="bg-muted" />

                    <div className="flex flex-col gap-[0.625rem] px-6">
                        <div className="flex items-start gap-[0.625rem]">
                            <MynauiShare className="text-primary h-[2.75rem] w-[2.75rem]" />
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

                    <div className="flex flex-col gap-[0.625rem] px-6">
                        <div className="flex items-start gap-[0.625rem]">
                            <IconamoonProfileLight className="text-primary h-[2.75rem] w-[2.75rem]" />
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
                            className="h-[2.5rem] w-[18.375rem] rounded-full border border-[#929292] bg-[#] px-[1rem] dark:border-[#A7A7A7]"
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
    );
}
