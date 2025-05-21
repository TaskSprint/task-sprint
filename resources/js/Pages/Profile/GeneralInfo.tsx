import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';
import UserLayout from '@/Layouts/UserLayout';
import AppLayout from '@/Layouts/AppLayout';
import {Checkbox} from "@heroui/react";
import MaterialSymbolsMailOutline from '~icons/material-symbols/mail-outline'
import MaterialSymbolsAccountCircleFull from '~icons/material-symbols/account-circle-full'
import MaterialSymbolsBuild from '~icons/material-symbols/build'
import MaterialSymbolsAd from '~icons/material-symbols/ad'
import MaterialSymbolsDistanceOutline from '~icons/material-symbols/distance-outline'
import MaterialSymbolsCreditCard from '~icons/material-symbols/credit-card'
import MaterialSymbolsNotificationsOutline from '~icons/material-symbols/notifications-outline'
import MaterialSymbolsDeleteOutline from '~icons/material-symbols/delete-outline'

export default function GeneralInfo() {
    const { t } = useLaravelReactI18n();

    const user1 = {
        id: "1",
        avatar: "https://cdn.mos.cms.futurecdn.net/aLt5gVBGkBctmjY6Ed7v7g.png",
        name: "Тiм К.",
        phone: "+380 98 677 78 88",
        email: "email.kyiv@gmail.com",
        city: "Kyiv",
        rating: "4.5",
        birth_date: "11.12.2021",
        certificates: [
            {
                id: "cert-1",
                title: "Frontend Development",
                image: "https://mastera-remonta.com/wp-content/uploads/2019/08/remont-kvartir.jpg"
            },
            {
                id: "cert-2",
                title: "UI/UX Design",
                image: "https://media.licdn.com/dms/image/v2/D5622AQE7byBwiq-nVg/feedshare-shrink_800/feedshare-shrink_800/0/1719756097829?e=2147483647&v=beta&t=ArIwywMFDccQXC0c1TeAhmVdZlS2pHJbRoZ0QUegLmU"
            },
            {
                id: "cert-3",
                title: "React Advanced",
                image: "https://media.licdn.com/dms/image/v2/D5622AQEuVfx6HRVG5w/feedshare-shrink_800/feedshare-shrink_800/0/1721729211619?e=2147483647&v=beta&t=eVyt17cfmmzH75dk2r7IuKleBcs-X1uVYieY0dHAyFA"
            },
            {
                id: "cert-4",
                title: "UI/UX Design",
                image: "https://media.licdn.com/dms/image/v2/D5622AQE7byBwiq-nVg/feedshare-shrink_800/feedshare-shrink_800/0/1719756097829?e=2147483647&v=beta&t=ArIwywMFDccQXC0c1TeAhmVdZlS2pHJbRoZ0QUegLmU"
            },
            {
                id: "cert-5",
                title: "UI/UX Design",
                image: "https://digitallycode.com/wp-content/uploads/2024/09/dg_certificate.webp"
            },
        ]
    }

    return (
        <div className="space-y-4">

            <div className="p-[0.75rem] gap-[0.75rem] flex items-start">

                <MaterialSymbolsMailOutline className="w-[1.5rem] h-[1.5rem]"/>

                <div className="flex gap-[0.75rem] text-[1.25rem] leading-[1.375rem] font-medium">

                    {t('profile.general-info.contact_email')} {user1.email}
                </div>
            </div>

            <div className="p-[0.75rem] gap-[0.75rem] flex items-start">

                <MaterialSymbolsAccountCircleFull className="w-[1.5rem] h-[1.5rem]"/>

                <div className="flex flex-col text-[1.25rem] gap-[0.5rem] leading-[1.375rem]">
                    <div className="">{t('profile.general-info.city')}: {user1.email}</div>
                    <div className="">{t('profile.general-info.birth_date')}: {user1.birth_date}</div>
                    <div className="">{t('profile.general-info.gender')}<span className="text-primary">Додати</span></div>
                    <div className="">{t('profile.general-info.about_me')} <span className="text-primary">Додати</span></div>
                </div>
            </div>


            <div className="p-[0.75rem] gap-[0.75rem] flex items-start">

                <MaterialSymbolsBuild className="w-[1.5rem] h-[1.5rem]"/>

                <div className="flex flex-col gap-[0.75rem]">
                    <div className="text-[1.25rem] leading-[1.375rem] font-medium">{t('profile.general-info.order_categories')}</div>
                    <div className="text-[1.25rem] leading-[1.375rem] text-primary ">{t('profile.general-info.create_ad')}</div>
                </div>
            </div>


            <div className="p-[0.75rem] gap-[0.75rem] flex items-start">

                <MaterialSymbolsAd className="w-[1.5rem] h-[1.5rem]"/>

                <div className="flex flex-col gap-[0.75rem]">
                    <div className="text-[1.25rem] leading-[1.375rem] font-medium">{t('profile.general-info.my_ads')}</div>
                    <div className="text-[1.25rem] leading-[1.375rem] text-primary ">{t('profile.general-info.create_ad')}</div>
                </div>
            </div>


            <div className="p-[0.75rem] gap-[0.75rem] flex items-start">

                <MaterialSymbolsDistanceOutline className="w-[1.5rem] h-[1.5rem]"/>

                <div className="flex flex-col gap-[0.75rem]">
                    <div className="text-[1.25rem] leading-[1.375rem] font-medium">{t('profile.general-info.order_cities')}</div>
                    <Button className="border-1 bg-0 rounded-[0.75rem] w-fit">{user1.city}</Button>
                </div>
            </div>

            <div className="p-[0.75rem] gap-[0.75rem] flex items-start">

                <MaterialSymbolsCreditCard className="w-[1.5rem] h-[1.5rem]"/>

                <div className="flex flex-col gap-[0.75rem]">
                    <div className="text-[1.25rem] leading-[1.375rem] font-medium">{t('profile.general-info.payment_info')}</div>
                    <div className="text-[1.25rem] leading-[1.375rem] text-primary ">{t('profile.general-info.create_ad')}</div>
                </div>
            </div>


            <div className="p-4">
                <div className="flex  items-start gap-[0.75rem]">

                    <MaterialSymbolsNotificationsOutline/>

                    <div className="gap-[0.75rem] flex flex-col">

                            <div className="text-[1.25rem] leading-[1.375rem] font-medium">{t('profile.general-info.notification_settings')}</div>
                            <Checkbox
                                value="1"
                                className="w-full gap-[0.625rem] text-[1.25rem] leading-[1.375rem] font-medium pt-[0.75rem]">
                                {t('profile.general-info.email_status_updates')}
                            </Checkbox>

                            <Checkbox
                                value=""
                                className="w-full gap-[0.625rem] text-[1.25rem] leading-[1.6875rem] font-medium">
                                {t('profile.general-info.email_new_orders')}
                            </Checkbox>

                    </div>

                </div>
            </div>


            <div className="p-[0.75rem] gap-[0.75rem] flex items-start">

                <MaterialSymbolsDeleteOutline className="w-[1.5rem] h-[1.5rem]"/>

                <div className="flex flex-col gap-[0.75rem]">
                    <div className="text-[1.25rem] leading-[1.375rem] font-medium">{t('profile.general-info.delete_profile')}</div>
                    <div className="text-[1.25rem] leading-[1.375rem] text-primary ">{t('profile.general-info.delete')}</div>
                </div>
            </div>






        </div>
    );
}

GeneralInfo.layout = (page: React.ReactNode) => (
    <AppLayout>
        <UserLayout>{page}</UserLayout>
    </AppLayout>
);
