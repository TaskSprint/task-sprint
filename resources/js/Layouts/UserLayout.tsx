import Button from '@/Components/Shared/Button';
import {useLaravelReactI18n} from "laravel-react-i18n";
import {Divider} from "@heroui/divider";
import SolarMoneyBagLinear from '~icons/solar/money-bag-linear'
import TablerReceipt from '~icons/tabler/receipt'
import SolarCardOutline from '~icons/solar/card-outline'
import MynauiShare from '~icons/mynaui/share'
import IconamoonProfileLight from '~icons/iconamoon/profile-light'
import { addToast } from "@heroui/toast";

export default function UserLayout({ children }: { children: React.ReactNode }) {

    const { t } = useLaravelReactI18n();
    const profileLink = `${window.location.origin}/profile`;



    return (
        <>
            <div className="min-h-screen item-center w-[84rem] mx-auto  text-white flex p-6">

                <main className="flex-1 flex flex-col ml-[1.25rem] mr-[1.25rem] ">

                    <div
                        className="flex items-center gap-[1.5625rem] px-[2.0625rem] pt-[3.75rem] pb-[1.875rem] w-full">

                            <Button
                                className="px-[1.25rem] py-[0.9375rem] h-fit rounded-[1.875rem] text-[1.25rem] font-medium leading-[1.6875rem] text-center text-black dark:text-white">
                                      {t('userlayout.in_progress')}
                            </Button>


                            <Button
                                className="px-[1.25rem] py-[0.9375rem] h-fit rounded-[1.875rem] text-[1.25rem] font-medium leading-[1.6875rem] text-center text-black dark:text-white">
                                    {t('userlayout.new_task')}
                            </Button>


                            <Button
                                className="px-[1.25rem] py-[0.9375rem] h-fit rounded-[1.875rem] text-[1.25rem] font-medium leading-[1.6875rem] text-center text-black dark:text-white">
                                   {t('userlayout.favourite_specialists')}
                            </Button>

                            <Button
                                className="px-[1.25rem] py-[0.9375rem] h-fit rounded-[1.875rem] text-[1.25rem] font-medium leading-[1.6875rem] text-center text-black dark:text-white">
                                    {t('userlayout.search_orders')}
                            </Button>

                    </div>

                    <Divider className="bg-muted"/>

                    <div className="w-full">{children}</div>
                </main>



                <div className="flex flex-col ">

                    <Divider orientation="vertical" className="absolute"/>

                        <div className="flex items-center justify-center gap-[3.125rem] pt-[3.75rem] pb-[1.5rem] pl-[3.125rem] pr-[3.5rem] h-[9.125rem]">



                                <div className="items-start gap-[0.313rem]">

                                    <div className="text-[2.5rem] leading-[3.437rem] font-medium text-black dark:text-white">
                                        12456
                                    </div>

                                    <div
                                        className="text-[1.25rem] leading-[1.687] font-medium text-primary ">
                                        {t('userlayout.reviews')}
                                    </div>
                                </div>



                            <Divider orientation="vertical" className="bg-primary"/>

                                <div className="items-start gap-[0.313rem]">

                                    <div className="text-[2.5rem] leading-[3.437rem] font-medium text-black dark:text-white">
                                        100%
                                    </div>


                                    <div
                                        className="text-[1.25rem] leading-[1.687] font-medium text-muted dark:text[#A7A7A7]">
                                        {t('userlayout.positive')}
                                    </div>

                                </div>

                        </div>

                    <Divider className="mx-[1.25rem] bg-muted"/>



                    <div className="flex flex-col gap-[0.625rem] px-[3.125rem] py-[1.875rem]">

                        <div className="flex gap-[0.625rem]  h-[2.75rem]">
                            <SolarMoneyBagLinear className="w-[2.75rem] h-[2.75rem] text-primary"/>
                            <div className="text-[2rem] leading-[2.75rem] font-medium text-black dark:text-white">{t('userlayout.my_balance')}</div>
                        </div>


                        <div className="flex gap-[3.125rem] w-fit">

                            <div className="flex-1 flex flex-col gap-2">
                                <div className="text-[1.125rem] leading-[1.5rem] font-medium text-[#929292] dark:text[#A7A7A7]">{t('userlayout.specialist')}</div>
                                <div className="text-[1.125rem] leading-[1.5rem] font-medium text-black dark:text-white">1000 грн</div>
                            </div>


                            <div className="flex-1 flex flex-col gap-2">
                                <div className="text-[1.125rem] leading-[1.5rem] font-medium text-[#929292] dark:text[#A7A7A7]">{t('userlayout.customer')}</div>
                                <div className="text-[1.125rem] leading-[1.5rem] font-medium text-black dark:text-white">1000 грн</div>
                            </div>

                        </div>


                        <div className="flex items-center gap-[0.625rem]  ">
                            <TablerReceipt className="w-[1.5rem] h-[1.8rem] text-primary"/>
                            <div className="text-[1rem] leading-[1.375rem] font-medium text-primary">{t('userlayout.extracts')}</div>
                        </div>


                        <div className="flex items-center gap-[0.625rem]">
                            <SolarCardOutline className="w-[1.5rem] h-[1.8rem] text-primary"/>
                            <div className="text-[1rem] leading-[1.375rem] font-medium text-primary"> {t('userlayout.withdrawal')} </div>
                        </div>
                    </div>


                    <Divider className="mx-[1.25rem] bg-muted"/>


                    <div className="flex flex-col gap-[0.625rem] px-[3.125rem] py-[1.875rem]">

                        <div className="flex items-start gap-[0.625rem] ">
                            <MynauiShare className="w-[2.75rem] h-[2.75rem] text-primary"/>
                            <div className="text-[2rem] leading-[2.75rem] font-medium text-black dark:text-white text-nowrap">
                                {t('userlayout.invite_friends')}
                            </div>
                        </div>


                        <div className="flex gap-[3.125rem] ">
                            <div className="text-[0.875rem] leading-[1.1875rem] font-medium text-muted dark:text-[#A7A7A7]  ">
                                {t('userlayout.invite_friends_text')}
                            </div>
                        </div>
                    </div>

                    <Divider className="mx-[1.25rem] bg-muted"/>




                    <div className="flex flex-col gap-[0.625rem] px-[3.125rem] py-[1.875rem]">

                        <div className="flex items-start gap-[0.625rem] ">
                            <IconamoonProfileLight className="w-[2.75rem] h-[2.75rem] text-primary"/>
                            <div className="text-[2rem] leading-[120%] font-medium text-black dark:text-white flex items-center ">
                                {t('userlayout.profile_link')}
                            </div>
                        </div>

                        <div className="flex gap-[3.125rem] ">
                            <div className="text-[0.875rem] leading-[1.1875rem] font-medium text-muted dark:text-[#A7A7A7] ">
                                {t('userlayout.profile_link_text')}
                            </div>
                        </div>

                        <Button className="w-[18.375rem] h-[2.5rem] border border-[#929292] dark:border-[#A7A7A7] bg-[#] rounded-full px-[1rem]"
                                onPress={():void => {
                                    navigator.clipboard.writeText(profileLink).then(() =>
                                        addToast({
                                            title: t('userlayout.copied')
                                        }))
                                }}>
                            <div className="text-[0.875rem] leading-[1.1875rem] text-muted/50">
                                {profileLink}
                            </div>
                        </Button>


                        <div className="text-[0.875rem] leading-[1.1875rem] font-medium text-muted dark:text-[#A7A7A7]">
                            {t('userlayout.copy_link')}

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
