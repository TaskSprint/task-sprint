import { useLaravelReactI18n } from 'laravel-react-i18n';
import React, { ReactNode, useState } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import Button from '@/Components/Shared/Button';
import UserLayout from '@/Layouts/UserLayout';
import ProfileLayout from '@/Layouts/ProfileLayout';
import LucidePencil from '~icons/lucide/pencil';
import {
    Avatar,
    Image,
    Link,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from '@heroui/react';
import MaterialSymbolsUpload from '~icons/material-symbols/upload';
import MdiEyeOutline from '~icons/mdi/eye-outline';
import BxBxsTrashAlt from '~icons/bx/bxs-trash-alt';
import MaterialSymbolsAdd2 from '~icons/material-symbols/add-2';
import UploadFileModal from '@/Components/UploadFileModal';
import ActionModal from '@/Components/ActionModal';
import { useForm } from '@inertiajs/react';

export default function BecomeEmployee() {
    const { t } = useLaravelReactI18n();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isSaveChangesModalOpen, setIsSaveChangesModalOpen] = useState(false);
    const [, setUploadedFilename] = useState<string | null>(null);
    const [isUploadedFileModalOpen, setIsUploadedFileModalOpen] = useState(false);

    const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

    const { data, setData, errors, clearErrors } = useForm({
        id: '1',
        avatar: '...',
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
    });

    const [editModal, setEditModal] = useState<{
        field: keyof typeof data | null;
        isOpen: boolean;
    }>({ field: null, isOpen: false });

    return (
        <div className="mx-auto flex flex-col gap-[3.75rem] px-[2rem] py-[1rem]">
            <div className="text-muted flex flex-col items-center gap-[1.0625rem] text-[0.9375rem] leading-[1.25rem]">
                <div className="text-muted flex flex-col items-center gap-[1.0625rem] text-[0.9375rem] leading-[1.25rem]">
                    <div className="group relative h-[9.625rem] w-[9.625rem] cursor-pointer">
                        <Avatar className="h-full w-full" />

                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <MaterialSymbolsUpload className="h-[3.5rem] w-[3.5rem] text-white" />
                        </div>
                    </div>

                    {t('profile.become-employee.set_default')}
                </div>
            </div>

            <div className="flex flex-col items-start gap-[1.25rem] text-[1.5rem] leading-[2.0625rem] font-normal">
                <div className="grid w-full grid-cols-[22rem_1fr] gap-[1.25rem]">
                    {/* 1. Ім’я користувача */}
                    <div className="flex items-start gap-[1.5625rem]">
                        <span>{t('profile.become-employee.name')}</span>
                        <Button
                            onPress={() => setEditModal({ field: 'username', isOpen: true })}
                            variant="light"
                        >
                            <LucidePencil />
                        </Button>
                    </div>

                    <div className="text-[1.5rem]">
                        {data.username ? (
                            data.username
                        ) : (
                            <div className="text-muted">
                                {' '}
                                {t('profile.become-employee.field_missing')}
                            </div>
                        )}
                    </div>

                    {/* 2. Username */}
                    <div className="flex items-start gap-[1.5625rem]">
                        <span>{t('profile.become-employee.username')}</span>
                        <Button
                            onPress={() => setEditModal({ field: 'username', isOpen: true })}
                            variant="light"
                        >
                            <LucidePencil />
                        </Button>
                    </div>

                    <div className="text-primary text-[1.5rem]">
                        {data.username ? (
                            <div>@{data.username}</div>
                        ) : (
                            <div className="text-muted">
                                {' '}
                                {t('profile.become-employee.field_missing')}
                            </div>
                        )}
                    </div>

                    {/* 3. Телефон */}
                    <div className="flex items-start gap-[1.5625rem]">
                        <span>{t('profile.become-employee.phone')}</span>
                        <Button
                            onPress={() => setEditModal({ field: 'phone', isOpen: true })}
                            variant="light"
                        >
                            <LucidePencil />
                        </Button>
                    </div>

                    <div className="text-[1.5rem]">
                        {data.phone ? (
                            data.phone
                        ) : (
                            <div className="text-muted">
                                {' '}
                                {t('profile.become-employee.field_missing')}
                            </div>
                        )}
                    </div>

                    {/* 4. Пошта */}
                    <div className="flex items-start gap-[1.5625rem]">
                        <span>{t('profile.become-employee.email')}</span>
                        <Button
                            onPress={() => setEditModal({ field: 'email', isOpen: true })}
                            variant="light"
                        >
                            <LucidePencil />
                        </Button>
                    </div>

                    <div className="text-[1.5rem]">
                        {data.email ? (
                            data.email
                        ) : (
                            <div className="text-muted">
                                {' '}
                                {t('profile.become-employee.field_missing')}
                            </div>
                        )}
                    </div>

                    {/* 5. Локація */}
                    <div className="flex items-start gap-[1.5625rem]">
                        <span>{t('profile.become-employee.city')}</span>
                        <Button
                            onPress={() => setEditModal({ field: 'city', isOpen: true })}
                            variant="light"
                        >
                            <LucidePencil />
                        </Button>
                    </div>

                    <div className="text-[1.5rem]">
                        {data.city ? (
                            data.city
                        ) : (
                            <div className="text-muted">
                                {' '}
                                {t('profile.become-employee.field_missing')}
                            </div>
                        )}
                    </div>

                    {/* 6. Години */}
                    <div className="flex items-start gap-[1.5625rem]">
                        <span>{t('profile.become-employee.preferred_hours')}</span>
                        <Button
                            onPress={() => setEditModal({ field: 'preferred_hours', isOpen: true })}
                            variant="light"
                        >
                            <LucidePencil />
                        </Button>
                    </div>

                    <div className="text-[1.5rem]">
                        {data.preferred_hours ? (
                            data.preferred_hours
                        ) : (
                            <div className="text-muted">
                                {' '}
                                {t('profile.become-employee.field_missing')}
                            </div>
                        )}
                    </div>

                    {/* 7. Спеціальність */}
                    <div className="flex items-start gap-[1.5625rem]">
                        <span>{t('profile.become-employee.specialization')}</span>
                        <Button
                            onPress={() => setEditModal({ field: 'specialization', isOpen: true })}
                            variant="light"
                        >
                            <LucidePencil />
                        </Button>
                    </div>

                    <div className="text-[1.5rem]">
                        {data.specialization ? (
                            data.specialization
                        ) : (
                            <div className="text-muted">
                                {' '}
                                {t('profile.become-employee.field_missing')}
                            </div>
                        )}
                    </div>

                    {/* 8. Опис */}
                    <div className="flex items-start gap-[1.5625rem]">
                        <span>{t('profile.become-employee.about_me')}</span>
                        <Button
                            onPress={() => setEditModal({ field: 'about_me', isOpen: true })}
                            variant="light"
                        >
                            <LucidePencil />
                        </Button>
                    </div>

                    <div className="text-[1.5rem]">
                        {data.about_me ? (
                            <p className="text-[1.5rem] leading-[2.0625rem] font-normal">
                                {data.about_me}
                            </p>
                        ) : (
                            <div className="text-muted">
                                {' '}
                                {t('profile.become-employee.field_missing')}
                            </div>
                        )}
                    </div>

                    {/* 9. Освіта */}
                    <div className="flex items-start gap-[1.5625rem]">
                        <span>{t('profile.become-employee.education')}</span>
                        <Button onPress={() => setIsEducationModalOpen(true)} variant="light">
                            <LucidePencil />
                        </Button>
                    </div>

                    <div className="text-[1.5rem]">
                        {data.education ? (
                            <div className="space-y-1">
                                {data.education?.map((edu) => (
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

                <div className="flex flex-col flex-wrap gap-[1.5rem]">
                    <span>{t('profile.become-employee.certificates')}</span>

                    <div className="flex flex-wrap gap-[1.5rem]">
                        {data.certificates?.map((cert) => (
                            <div
                                key={cert.id}
                                className="group relative h-[8.813rem] w-[15.938rem] overflow-hidden rounded-md shadow-md"
                            >
                                <Image
                                    src={cert.image}
                                    alt="Certificate"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 z-10 flex items-center justify-center gap-[1.5rem] bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <MdiEyeOutline className="h-[3.5rem] w-[3.5rem] text-white" />
                                    <BxBxsTrashAlt className="h-[3.5rem] w-[3.5rem] text-white" />
                                </div>
                            </div>
                        ))}

                        <Link
                            className="group bg-muted/50 relative h-[8.813rem] w-[15.938rem] rounded-md shadow-md"
                            onPress={() => setIsUploadedFileModalOpen(true)}
                        >
                            <div className="absolute inset-0 z-10 flex items-center justify-center gap-[1.5rem] rounded-md bg-black/50 opacity-50 transition-opacity duration-300 group-hover:opacity-100">
                                <MaterialSymbolsAdd2 className="h-[3.5rem] w-[3.5rem] text-white" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-[25.5625rem] flex-col gap-[1.5rem]">
                <Button
                    className="bg-primary w-full rounded-full px-[1rem] py-[0.875rem] text-[1.5rem] leading-[2.0625rem] font-bold text-white"
                    onPress={() => setIsSaveChangesModalOpen(true)}
                >
                    {t('profile.become-employee.save_changes')}
                </Button>

                <Button
                    className="bg-danger w-full rounded-full px-[1rem] py-[0.875rem] text-[1.5rem] leading-[2.0625rem] font-bold text-white"
                    onPress={() => setIsDeleteModalOpen(true)}
                >
                    {t('profile.become-employee.delete_profile')}
                </Button>
            </div>

            <ActionModal
                name="password"
                open={isDeleteModalOpen}
                onOpenChange={setIsDeleteModalOpen}
                onSave={(newValue) => {
                    if (editModal.field) {
                        setData(editModal.field, newValue);
                    }
                }}
                title={t('profile.become-employee.delete_profile_confirmation_title')}
                subtitle={t('profile.become-employee.delete_profile_confirmation_subtitle')}
                confirmText={t('profile.become-employee.delete_profile')}
                submitDanger
                placeholder={t('users.password')}
            />

            <Modal
                backdrop="blur"
                isOpen={isSaveChangesModalOpen}
                onClose={() => setIsSaveChangesModalOpen(false)}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {t('profile.become-employee.save_changes_confirmation_title')}
                            </ModalHeader>
                            <ModalBody>
                                <p className="text-muted-foreground mt-1 text-sm">
                                    {t(
                                        'profile.become-employee.save_changes_confirmation_subtitle',
                                    )}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    className="text-base"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button color="primary" className="text-base">
                                    OK
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <ActionModal
                name={editModal.field ?? ''}
                value={editModal.field ? ((data[editModal.field] as string) ?? '') : ''}
                open={editModal.isOpen}
                onOpenChange={(isOpen) => setEditModal({ field: editModal.field, isOpen })}
                onSave={(newValue) => {
                    if (editModal.field) {
                        setData(editModal.field, newValue);
                    }
                }}
                title={editModal.field ? t(`profile.become-employee.${editModal.field}`) : ''}
                placeholder={t(`profile.become-employee.${editModal.field}`)}
            />

            <UploadFileModal
                name="certificates"
                open={isUploadedFileModalOpen}
                onOpenChange={() => setIsUploadedFileModalOpen(false)}
                onSave={(file) => setUploadedFilename(file?.[0]?.name ?? null)}
            />

            <ActionModal
                name="education"
                value={data.education ?? []}
                open={isEducationModalOpen}
                onOpenChange={setIsEducationModalOpen}
                onSave={(updatedEducation) => {
                    setData('education', updatedEducation);
                }}
                title="Редагувати освіту"
                confirmText="Зберегти"
                placeholder={t(`profile.become-employee.education`)}
                list
            />
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
