import { useLaravelReactI18n } from 'laravel-react-i18n';
import React, { ReactNode } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import Button from '@/Components/Shared/Button';
import UserLayout from '@/Layouts/UserLayout';
import ProfileLayout from "@/Layouts/ProfileLayout";
import LucidePencil from '~icons/lucide/pencil'
import { Image } from '@heroui/react';
import { Avatar } from '@heroui/react';
import MaterialSymbolsUpload from '~icons/material-symbols/upload'
import MdiEyeOutline from '~icons/mdi/eye-outline'
import BxBxsTrashAlt from '~icons/bx/bxs-trash-alt'
export default function BecomeEmployee() {
    const { t } = useLaravelReactI18n();

    const user1 = {
        id: "1",
        avatar: "https://cdn.mos.cms.futurecdn.net/aLt5gVBGkBctmjY6Ed7v7g.png",
        name: "Тiм К.",
        username: "GreedIsGood",
        phone: "+380 98 677 78 88",
        email: "itstep.kyiv@gmail.com",
        city: "Kyiv",
        rating: "4.5",
        profession: "Хирургия",
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
            }
        ],
        about_me : "Lorem ipsum dolor sit amet, ipsum dconsectetur adipiscing elit. Aenean in fermentum ante. Sed rutrum ac odio eu posuere. Quisque erat urna, semper ac nunc non, iaculis consectetur ligula. Nam tincidunt aliquam felis quis accumsan. ",
        education : [ "Київський професійно-педагогічний коледж імені Антона Макаренка", "It-Step Розробка програмного забезпечення" ]
    }


    return (
        <div className="mx-auto flex flex-col gap-[3.75rem] px-[2rem] py-[1rem]">

            <div className="flex flex-col items-center gap-[1.0625rem] text-[0.9375rem] leading-[1.25rem] text-muted">


                <div className="flex flex-col items-center gap-[1.0625rem] text-[0.9375rem] leading-[1.25rem] text-muted">
                    <div className="relative w-[9.625rem] h-[9.625rem] group cursor-pointer">
                        {/* Аватарка */}
                        <Avatar className="w-full h-full" />

                        {/* Іконка по центру при наведенні */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <MaterialSymbolsUpload className="w-[3.5rem] h-[3.5rem] text-white" />
                        </div>
                    </div>

                    {t('profile.become-employee.set_default')}
                </div>

            </div>


            <div className="flex flex-col items-start gap-[1.25rem] text-[1.5rem] leading-[2.0625rem] font-normal">
                {/* Ім’я користувача та виконавця */}

                <div className="grid grid-cols-[22rem_1fr] gap-y-6 w-full">
                    {/* 1. Ім’я користувача */}
                    <div className="flex items-center gap-[1.5625rem]">
                        <span>{t('profile.become-employee.profile_name')}</span>
                        <LucidePencil/>
                    </div>
                    <div>{user1.name || <span>{t('profile.general-info.add')}</span>}</div>

                    {/* 2. Username */}
                    <div className="flex items-center gap-[1.5625rem]">
                        <span>{t('profile.become-employee.user_name')}</span>
                        <LucidePencil/>
                    </div>
                    <div className="text-primary">
                        {user1.username ? "@" + user1.username : <span>{t('profile.general-info.add')}</span>}
                    </div>

                    {/* 3. Телефон */}
                    <div className="flex items-center gap-[1.5625rem]">
                        <span>{t('profile.become-employee.phone')}</span>
                        <LucidePencil/>
                    </div>
                    <span>+380-XX-XXXXXXX</span>

                    {/* 4. Пошта */}
                    <div className="flex items-center gap-[1.5625rem]">
                        <span>{t('profile.become-employee.email')}</span>
                        <LucidePencil/>
                    </div>
                    <span>{user1.email}</span>

                    {/* 5. Локація */}
                    <div className="flex items-center gap-[1.5625rem]">
                        <span>{t('profile.become-employee.location')}</span>
                        <LucidePencil/>
                    </div>
                    <span>{user1.city}</span>

                    {/* 6. Години */}
                    <div className="flex items-center gap-[1.5625rem]">
                        <span>{t('profile.become-employee.preferred_hours')}</span>
                        <LucidePencil/>
                    </div>
                    <span>Пн-Пт, 9:00 - 18:00</span>

                    {/* 7. Спеціальність */}
                    <div className="flex items-center gap-[1.5625rem]">
                        <span>{t('profile.become-employee.specialization')}</span>
                        <LucidePencil/>
                    </div>
                    <div>{user1.profession}</div>

                    {/* 8. Опис */}
                    <div className="flex items-center gap-[1.5625rem]">
                        <span>{t('profile.become-employee.description')}</span>
                        <LucidePencil/>
                    </div>
                    <p className="text-[1.5rem] leading-[2.0625rem] font-normal">{user1.about_me}</p>

                    {/* 9. Освіта */}
                    <div className="flex items-center gap-[1.5625rem]">
                        <span>{t('profile.become-employee.education')}</span>
                        <LucidePencil/>
                    </div>
                    <div className="space-y-1">
                        {user1.education.map((edu) => (
                            <div key={edu}>
                                <span className="text-primary">{edu}</span>,
                            </div>
                        ))}
                    </div>
                </div>



                    <div className="flex flex-col flex-wrap gap-[1.5rem]">
                        <span>{t('profile.become-employee.certificates')}</span>


                        <div className="flex flex-wrap gap-[1.5rem]">

                            {user1.certificates.map(cert => (
                                <div
                                    key={cert.id}
                                    className="relative group w-[15.938rem] h-[8.813rem] rounded-md shadow-md overflow-hidden"
                                >
                                    <Image
                                        src={cert.image}
                                        alt="Certificate"
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 z-10 flex items-center justify-center gap-[1.5rem] bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <MdiEyeOutline className="w-[3.5rem] h-[3.5rem] text-white" />
                                        <BxBxsTrashAlt className="w-[3.5rem] h-[3.5rem] text-white" />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

            </div>


            <div className="flex flex-col mx-auto gap-[1.5rem] w-full max-w-[25.5625rem]">

                <Button className="px-[1rem] py-[0.875rem] bg-primary text-white rounded-full w-full font-bold text-[1.5rem] leading-[2.0625rem]">
                    {t('profile.become-employee.save_changes')}
                </Button>

                <Button className="px-[1rem] py-[0.875rem] bg-danger text-white rounded-full w-full font-bold text-[1.5rem] leading-[2.0625rem]">
                    {t('profile.become-employee.delete_profile')}
                </Button>

            </div>


        </div>
    );
}

BecomeEmployee.layout = (page: ReactNode) => (
    <AppLayout>
        <UserLayout>
            <ProfileLayout>{page}</ProfileLayout>
        </UserLayout>
    </AppLayout>
);
