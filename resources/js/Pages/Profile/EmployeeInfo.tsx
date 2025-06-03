import UploadFileModal from '@/Components/UploadFileModal';
import AppLayout from '@/Layouts/AppLayout';
import ProfileLayout from '@/Layouts/ProfileLayout';
import UserLayout from '@/Layouts/UserLayout';
import { Image, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React, { ReactNode, useState } from 'react';
import BxBxsTrashAlt from '~icons/bx/bxs-trash-alt';
import IconParkOutlineTime from '~icons/icon-park-outline/time';
import LsiconEducationOutline from '~icons/lsicon/education-outline';
import MaterialSymbolsAdd2 from '~icons/material-symbols/add-2';
import MaterialSymbolsBuild from '~icons/material-symbols/build';
import MaterialSymbolsMailOutline from '~icons/material-symbols/mail-outline';
import MdiEyeOutline from '~icons/mdi/eye-outline';
import MynauiTelephone from '~icons/mynaui/telephone';
import SolarDocumentLinear from '~icons/solar/document-linear';

export default function EmployeeInfo() {
    const { t } = useLaravelReactI18n();
    const [isUploadedFileModalOpen, setUploadedFileModalOpen] = useState(false);

    const user1 = {
        id: '1',
        avatar: '...',
        name: 'Тiм К.',
        username: 'GreedIsGood',
        phone: '+380 98 677 78 88',
        email: 'itstep.kyiv@gmail.com',
        city: 'Kyiv',
        rating: '4.5',
        specialization: 'Хирургия',
        preferred_hours: '10:00 - 16:00',
        birth_date: '11.12.2021',
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
        ],
        about_me:
            'Lorem ipsum dolor sit amet, ipsum dconsectetur adipiscing elit. Aenean in fermentum ante. Sed rutrum ac odio eu posuere. Quisque erat urna, semper ac nunc non, iaculis consectetur ligula. Nam tincidunt aliquam felis quis accumsan. ',
        education: [
            'Київський професійно-педагогічний коледж імені Антона Макаренка',
            'It-Step Розробка програмного забезпечення',
        ],
    };

    return (
        <div className="mx-auto flex flex-col items-start text-[1.5rem] leading-[2.0625rem] font-normal">
            <div className="flex flex-col items-start justify-center gap-3 p-3 text-[1.5rem] leading-[2.0625rem] font-normal">
                <div className="flex items-center gap-3">
                    <MynauiTelephone className="size-[1.5rem] min-w-[1.5rem]" />
                    {t('profile.employee-info.phone')}:
                </div>

                <div>
                    {user1.phone ? (
                        user1.phone
                    ) : (
                        <div className="text-muted">
                            {' '}
                            {t('profile.become-employee.field_missing')}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-3 p-3 text-[1.5rem] leading-[2.0625rem] font-normal">
                <div className="flex items-center gap-3">
                    <MaterialSymbolsMailOutline className="size-[1.5rem] min-w-[1.5rem]" />
                    {t('profile.employee-info.email')}:
                </div>

                <div>
                    {user1.email ? (
                        user1.email
                    ) : (
                        <div className="text-muted">
                            {' '}
                            {t('profile.become-employee.field_missing')}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-3 p-3 text-[1.5rem] leading-[2.0625rem] font-normal">
                <div className="flex items-center gap-3">
                    <IconParkOutlineTime className="size-[1.5rem] min-w-[1.5rem]" />
                    {t('profile.employee-info.preferred_hours')}:
                </div>

                <div>
                    {user1.preferred_hours ? (
                        user1.preferred_hours
                    ) : (
                        <div className="text-muted">
                            {' '}
                            {t('profile.become-employee.field_missing')}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-3 p-3 text-[1.5rem] leading-[2.0625rem] font-normal">
                <div className="flex items-center gap-3">
                    <MaterialSymbolsBuild className="size-[1.5rem] min-w-[1.5rem]" />
                    {t('profile.employee-info.specialization')}:
                </div>

                <div>
                    {user1.specialization ? (
                        user1.specialization
                    ) : (
                        <div className="text-muted">
                            {' '}
                            {t('profile.become-employee.field_missing')}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-3 p-3 text-[1.5rem] leading-[2.0625rem] font-normal">
                <div className="flex items-center gap-3">
                    <SolarDocumentLinear className="size-[1.5rem] min-w-[1.5rem]" />
                    {t('profile.employee-info.about_me')}:
                </div>

                <div>
                    {user1.about_me ? (
                        user1.about_me
                    ) : (
                        <div className="text-muted">
                            {' '}
                            {t('profile.become-employee.field_missing')}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-3 p-3 text-[1.5rem] leading-[2.0625rem] font-normal">
                <div className="flex items-center gap-3">
                    <LsiconEducationOutline className="size-[1.5rem] min-w-[1.5rem]" />
                    {t('profile.employee-info.education')}:
                </div>

                <div>
                    {user1.education ? (
                        <div className="space-y-1">
                            {user1.education?.map((edu) => (
                                <div key={edu}>
                                    <span className="text-primary">{edu}</span>,
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-muted">
                            {' '}
                            {t('profile.become-employee.field_missing')}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-3 p-3 text-[1.5rem] leading-[2.0625rem] font-normal">
                <div className="flex items-center gap-3">
                    {t('profile.employee-info.certificates')}:
                </div>

                <div className="flex flex-wrap gap-[1.5rem]">
                    {user1.certificates?.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative h-[6.563rem] w-[11.875rem] overflow-hidden rounded-md shadow-md"
                        >
                            <Image
                                src={cert.image}
                                alt="Certificate"
                                className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 z-10 flex items-center justify-center gap-[1.5rem] bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <MdiEyeOutline className="size-[2.5rem] min-w-[2.5rem] text-white" />
                                <BxBxsTrashAlt className="size-[2.5rem] min-w-[2.5rem] text-white" />
                            </div>
                        </div>
                    ))}

                    <Link
                        className="group bg-muted/50 relative h-[6.563rem] w-[11.875rem] rounded-md shadow-md"
                        onPress={() => setUploadedFileModalOpen(true)}
                    >
                        <div className="absolute inset-0 z-10 flex items-center justify-center gap-[1.5rem] rounded-md bg-black/50 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                            <MaterialSymbolsAdd2 className="size-[2.5rem] min-w-[2.5rem] text-white" />
                        </div>
                    </Link>
                </div>
            </div>

            <UploadFileModal
                isOpen={isUploadedFileModalOpen}
                onClose={() => setUploadedFileModalOpen(false)}
                onUploadSuccess={(filename: React.SetStateAction<string | null>) =>
                    setUploadedFilename(filename)
                }
            />
        </div>
    );
}

EmployeeInfo.layout = (page: ReactNode) => (
    <AppLayout>
        <UserLayout>
            <ProfileLayout>{page}</ProfileLayout>
        </UserLayout>
    </AppLayout>
);
