import Button from '@/Components/Shared/Button';
import { useRouter } from '@/hooks/useRouter';
import AppLayout from '@/Layouts/AppLayout';
import { PageProps } from '@/types';
import TaskModel from '@/types/models/task';
import {
    addToast,
    Avatar,
    BreadcrumbItem,
    Breadcrumbs,
    Divider,
    Image,
    Link,
    Radio,
    RadioGroup,
} from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React, { useMemo, useState } from 'react';
import FluentDocument32Regular from '~icons/fluent/document-32-regular';
import HugeiconsTimeHalfPass from '~icons/hugeicons/time-half-pass';
import IconParkOutlineAttention from '~icons/icon-park-outline/attention';
import IconParkOutlineTime from '~icons/icon-park-outline/time';
import IconamoonProfileLight from '~icons/iconamoon/profile-light';
import IonPeopleOutline from '~icons/ion/people-outline';
import MageKey from '~icons/mage/key';
import MdiEyeOutline from '~icons/mdi/eye-outline';
import MynauiShare from '~icons/mynaui/share';
import MynauiTelephone from '~icons/mynaui/telephone';
import ProiconsChat from '~icons/proicons/chat';
import ProiconsDelete from '~icons/proicons/delete';
import SolarMoneyBagLinear from '~icons/solar/money-bag-linear';

export default function Task({ locale, task }: PageProps<{ task: TaskModel }>) {
    const { t } = useLaravelReactI18n();
    const { route } = useRouter();
    const [showContactsCustomer, setShowContactsCustomer] = useState(false);
    const [showContactsPerfomer, setShowContactsPerfomer] = useState(false);

    const statusButtonText = useMemo(
        () => ({
            pending: t('task.confirm_task'),
            pending_for_executor: t('task.start_execution'),
            in_progress: t('task.mark_as_done'),
            completed: t('task.create_similar_task'),
            canceled: t('task.task_cancelled'),
        }),
        [t],
    );

    const staticTask = {
        id: '76457324',
        name: 'Створити сайт для магазину одягу',
        estimated_date: '15 квітня',
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/stray228-profile_image-ceb0393a88eb8286-70x70.jpeg',
        description:
            'Розробити сучасний та зручний інтернет-магазин одягу з адаптивним дизайном, що забезпечить комфортний перегляд і покупки з будь-яких пристроїв. Сайт має включати каталог товарів із фільтрами, кошик для покупок, систему оплати та зворотного зв’язку. Додаткові функції: особистий кабінет користувача, відгуки, інтеграція з соцмережами та можливість підключення аналітики для відстеження продажів.',
        price: '3000',
        status: 'pending_for_executor',
        customer: {
            name: 'Тiм К.',
            avatar: 'https://img01.rl0.ru/afisha/e1200x800i/daily.afisha.ru/uploads/images/2/53/253ce3bf3a76f3c678bc2b9bd3784f42.jpg',
        },
        view: '611',
        performer: {
            id: '1',
            avatar: 'https://cdn.mos.cms.futurecdn.net/aLt5gVBGkBctmjY6Ed7v7g.png',
            name: 'Петрова К.',
            phone: '+380 98 677 78 88',
            email: 'email.kyiv@gmail.com',
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
        },
        createdAt: '1 червня 21:15',
    };

    const similarTasks = [
        {
            id: 1,
            title: 'Створити сайт для магазину одягу',
            estimated_date: '15 квітня',
            image: 'https://www.colorland.com/sites/default/files/styles/optimized/public/article/A%20man%20wearing%20a%20hat%2C%20taking%20a%20photo%20at%20sunset.jpg?itok=RL_hlVbF',
        },
        {
            id: 2,
            title: 'Редизайн мобільного додатку',
            estimated_date: '20 травня',
            image: 'https://www.digitalphoto.de/media/digitalphoto/styles/tec_frontend_large/public/images/2018/09/adobestock_101692534.jpeg?itok=lMmBoMR5',
        },
        {
            id: 3,
            title: 'Лендінг для курсу',
            estimated_date: '1 червня',
            image: 'https://www.nationalgeographic.it/upload/ngi-hero/cover-1685960847724-Hero_100.jpg',
        },
    ];

    const complaints = [
        {
            title: t('task.complain_about_task'),
            subtitle: t('task.select_reason'),
            reasons: [
                t('task.reasons.offensive'),
                t('task.reasons.fake_reviews'),
                t('task.reasons.fraud'),
                t('task.reasons.buy_sell_goods'),
                t('task.reasons.account_trading'),
                t('task.reasons.invalid_format'),
            ],
            note: t('task.other_complaint'),
            buttons: [
                { text: t('task.complain'), type: 'submit' },
                { text: t('task.cancel'), type: 'close' },
            ],
        },
        {
            title: t('task.want_to_change_executor'),
            subtitle: t('task.specify_change_reason'),
            reasons: [
                t('task.change_reasons.no_contact'),
                t('task.change_reasons.cannot_fulfill'),
                t('task.change_reasons.consider_others'),
                t('task.change_reasons.custom_reason'),
            ],
            textareaPlaceholder: t('task.enter_reason'),
            buttons: [
                { text: t('task.change_executor'), type: 'submit' },
                { text: t('task.cancel'), type: 'close' },
            ],
        },
        {
            title: t('task.extend_task_title'),
            subtitle: t('task.extend_task_note'),
            reasons: t('task.days'), // Це масив в усіх мовах
            buttons: [
                { text: t('task.confirm'), type: 'submit' },
                { text: t('task.cancel'), type: 'close' },
            ],
        },
        {
            title: t('task.confirm_deletion'),
            subtitle: t('task.we_can_find_another'),
            buttons: [
                { text: t('task.choose_another_executor'), type: 'submit' },
                { text: t('task.yes_delete'), type: 'close' },
            ],
        },
    ];

    const [visibleBlocks, setVisibleBlocks] = useState<Record<number, boolean>>({});

    const openComplaint = (index: number) => {
        setVisibleBlocks((prev) => ({ ...prev, [index]: true }));
    };

    const closeComplaint = (index: number) => {
        setVisibleBlocks((prev) => ({ ...prev, [index]: false }));
    };

    return (
        <div className="bg-surface mx-auto flex h-full w-full flex-col 2xl:max-w-[96rem] 2xl:flex-row">
            <main className="mr-2 flex w-full flex-col">
                <div className="w-full gap-[0.625rem] py-[2.5rem] 2xl:px-[5.5rem] 2xl:pt-[3.5rem]">
                    <div className="flex w-full justify-between gap-[5rem]">
                        <div className="text-[2rem] leading-[2.75rem] font-semibold">
                            {task.name}
                        </div>
                        <div className="text-primary text-[2rem] leading-[2.75rem] font-semibold">
                            {Intl.NumberFormat(locale?.current, {
                                style: 'currency',
                                currencyDisplay: 'narrowSymbol',
                                currency: task.currency?.code ?? 'UAH',
                            }).format(task.price)}
                        </div>
                    </div>

                    <div className="text-muted flex items-start justify-between pb-[0.625rem] text-[0.875rem] leading-[1.1875rem] font-medium">
                        <div className="flex">
                            <div className="flex gap-[2.2rem]">
                                <div className="flex items-center gap-[0.625rem]">
                                    <MdiEyeOutline />
                                    {t('task.views')} {staticTask.view}
                                </div>

                                <div className="">№ {task.id}</div>
                            </div>
                        </div>

                        <div className="space-y-2 text-right">
                            {task.negotiable && t('task.price_negotiated')}
                            {t('task.cash_payment')}
                        </div>
                    </div>

                    <Breadcrumbs className="gap-[1.2rem] text-[1.25rem] leading-[1.6875rem] font-medium">
                        <BreadcrumbItem className="gap-[0.625rem]">
                            {task.subCategory?.category?.name.current}
                        </BreadcrumbItem>
                        <BreadcrumbItem
                            href={route('sub-category.task.create.index', {
                                subCategory: task.subCategory?.id,
                            })}
                            className="ml-2.5 gap-[0.625rem]"
                        >
                            {task.subCategory?.name.current}
                        </BreadcrumbItem>
                        <BreadcrumbItem className="ml-2.5 gap-[0.625rem]">
                            {task.name}
                        </BreadcrumbItem>
                    </Breadcrumbs>
                </div>

                <Divider className="bg-muted" />

                <div className="flex w-full flex-col gap-[1.25rem] py-[2.5rem] text-[1rem] leading-[1.375rem] 2xl:px-[5.5rem]">
                    <div className="text-muted flex items-start justify-between pb-[0.625rem] font-semibold">
                        <div className="flex">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-[0.625rem]">
                                    <IconParkOutlineTime className="size-[1.5rem] min-w-[1.5rem]" />
                                    {t('task.complete_by')}{' '}
                                    {new Date(task.estimatedDate).toLocaleDateString(
                                        locale?.current,
                                        {
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        },
                                    )}
                                </div>

                                {task.files?.map((file) => (
                                    <Link
                                        key={file.id}
                                        href={file.temporaryUrl}
                                        className="flex items-center gap-[0.625rem]"
                                        download={file.name}
                                    >
                                        <FluentDocument32Regular className="size-[1.5rem] min-w-[1.5rem]" />
                                        {file.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="text-primary text-right">
                            {t(`tasks.${task.status.replace(' ', '_')}`)}
                        </div>
                    </div>

                    <div className="text-muted font-medium">{task.description}</div>

                    <div className="flex items-center gap-[0.625rem]">
                        <MageKey className="size-[1.5rem] min-w-[1.5rem]" />
                        {t('task.confidential_info')}
                    </div>

                    {!showContactsCustomer && (
                        <Button
                            variant="bordered"
                            color="primary"
                            onPress={() => setShowContactsCustomer(!showContactsCustomer)}
                            className="text-primary w-full rounded-[2.25rem] py-6 text-[1.25rem] leading-[1.6rem] font-semibold sm:w-fit sm:p-[2rem]"
                        >
                            <MynauiTelephone className="size-[1.5rem] min-w-[1.5rem]" />
                            {t('task.show_contacts')}
                        </Button>
                    )}

                    {showContactsCustomer && (
                        <div className="text-muted flex flex-col justify-center gap-[0.625rem] text-[1rem] leading-[1.375rem] font-medium">
                            <div className="flex">
                                {t('task.customer_phone')}&nbsp;
                                <div className="text-primary">{task.user?.phone}</div>
                            </div>

                            <div className="flex">
                                {t('task.customer_email')}&nbsp;
                                <div className="text-primary">{task.user?.email}</div>
                            </div>
                        </div>
                    )}
                </div>

                <Divider className="bg-muted" />

                <div className="flex w-full flex-col gap-[1.25rem] py-[2.5rem] text-[1.25rem] leading-[1.375rem] 2xl:px-[5.5rem]">
                    <div className="flex flex-wrap gap-[1.25rem]">
                        <Button
                            color="primary"
                            className="w-full rounded-[2.25rem] py-6 leading-[1.6rem] font-semibold text-white sm:w-fit sm:p-[2rem]"
                        >
                            <SolarMoneyBagLinear className="size-[1.5rem] min-w-[1.5rem]" />
                            {statusButtonText[
                                task.status.replace(' ', '_') as keyof typeof statusButtonText
                            ] ?? 'Невідомий статус'}
                        </Button>

                        <Button
                            variant="light"
                            onPress={() => openComplaint(0)}
                            className="text-muted w-full rounded-[2.25rem] py-6 leading-[1.6rem] font-semibold sm:w-fit sm:p-[2rem]"
                        >
                            <IconParkOutlineAttention className="size-[1.5rem] min-w-[1.5rem]" />
                            {t('task.complain')}
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-[1.25rem] text-[1.25rem] leading-[1rem]">
                        <Button
                            variant="light"
                            color="primary"
                            onPress={() => openComplaint(1)}
                            className="flex items-center gap-[0.625rem] text-nowrap"
                        >
                            <IonPeopleOutline className="text-muted size-[1.5rem] min-w-[1.5rem]" />
                            {t('task.change_executor')}
                        </Button>
                        <Button
                            variant="light"
                            color="primary"
                            onPress={() => openComplaint(2)}
                            className="flex items-center gap-[0.625rem] text-nowrap"
                        >
                            <HugeiconsTimeHalfPass className="text-muted size-[1.5rem] min-w-[1.5rem]" />
                            {t('task.extend_task')}
                        </Button>
                        <Button
                            variant="light"
                            color="primary"
                            onPress={() => openComplaint(3)}
                            className="flex items-center gap-[0.625rem] text-nowrap"
                        >
                            <ProiconsDelete className="text-muted size-[1.5rem] min-w-[1.5rem]" />
                            {t('task.delete_task')}
                        </Button>
                    </div>
                </div>

                <Divider className="bg-muted" />

                {complaints.map((complaint, index) =>
                    visibleBlocks[index] ? (
                        <div
                            key={index}
                            className="flex w-full flex-col gap-[1.25rem] bg-[rgba(0,220,255,0.1)] py-[2.5rem] 2xl:px-[5.5rem]"
                        >
                            <div className="w-full text-[2rem] leading-[2.75rem] font-semibold">
                                {complaint.title}
                            </div>

                            <div className="h-[1.6875rem] w-full max-w-[47.875rem] text-[1.25rem] leading-[1.6875rem] font-semibold">
                                {complaint.subtitle}
                            </div>

                            {complaint.reasons?.length && (
                                <RadioGroup className="w-full gap-4">
                                    {(complaint.reasons as string[]).map((reason, idx) => (
                                        <Radio
                                            value={reason}
                                            key={idx}
                                            className="w-full gap-[0.625rem] text-center text-[1rem] leading-[1.375rem] font-medium"
                                        >
                                            {reason}
                                        </Radio>
                                    ))}
                                </RadioGroup>
                            )}

                            {complaint.textareaPlaceholder && (
                                <textarea
                                    placeholder={complaint.textareaPlaceholder}
                                    className="border-muted h-fit w-[18.375rem] rounded-[1.25rem] border px-[1rem] py-[0.625rem] text-[0.875rem] leading-[1.1875rem] font-normal placeholder:text-[#A7A7A7] placeholder:opacity-50"
                                />
                            )}

                            {complaint.note && (
                                <div className="text-muted w-full text-[1rem] leading-[1.375rem] font-semibold">
                                    {complaint.note.split('support@tasksprint.tech')[0]}
                                    <a
                                        href="mailto:support@tasksprint.tech"
                                        className="text-primary"
                                    >
                                        support@tasksprint.tech
                                    </a>
                                </div>
                            )}

                            <div className="flex w-full items-center gap-[3.125rem]">
                                {complaint.buttons.map((btn, btnIdx) => {
                                    if (btn.type === 'submit') {
                                        if (index === 3 && btn.text === 'Вибрати іншого фахівця') {
                                            return (
                                                <Button
                                                    key={btnIdx}
                                                    className="bg-primary w-full rounded-[2.25rem] py-6 leading-[1.6rem] font-semibold text-white sm:w-fit sm:p-[2rem]"
                                                    onPress={() => openComplaint(1)}
                                                >
                                                    {btn.text}
                                                </Button>
                                            );
                                        }

                                        return (
                                            <Button
                                                key={btnIdx}
                                                className="bg-primary w-full rounded-[2.25rem] py-6 leading-[1.6rem] font-semibold text-white sm:w-fit sm:p-[2rem]"
                                                onPress={() => alert(btn.text)}
                                            >
                                                {btn.text}
                                            </Button>
                                        );
                                    } else {
                                        return (
                                            <Button
                                                key={btnIdx}
                                                variant="light"
                                                className="text-primary cursor-pointer bg-[0] text-[1.25rem] leading-[1.6875rem] font-semibold"
                                                onPress={() => closeComplaint(index)} // закрываем блок
                                            >
                                                {btn.text}
                                            </Button>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    ) : null,
                )}

                <div className="flex w-full flex-col gap-[0.625rem] py-[2.5rem] 2xl:px-[5.5rem]">
                    <div className="text-[2rem] leading-[2.75rem] font-semibold">
                        {t('task.performed_by')}
                    </div>

                    <div className="text-muted text-[0.875rem] leading-[1.1875rem] font-medium">
                        {t('task.executor_block_text')}
                    </div>
                </div>

                {task.order?.employee && (
                    <div className="flex w-full flex-col gap-[2.5rem] bg-[rgba(0,220,255,0.1)] py-[2.5rem] 2xl:px-[5.5rem]">
                        <div className="flex w-full gap-[1.875rem]">
                            <Avatar
                                className="h-[6.5rem] w-[6.5rem] min-w-[6.5rem] rounded-full"
                                src={task.order?.employee?.avatar}
                            ></Avatar>

                            <div className="flex w-full flex-col gap-[0.675rem]">
                                <div className="flex w-full flex-col items-start gap-[0.625rem]">
                                    <div className="flex w-full items-start justify-between gap-[5rem]">
                                        <Link
                                            color="foreground"
                                            className="cursor-pointer text-[1.25rem] leading-[1.6875rem] font-semibold"
                                            href={route('profile.general-info', {
                                                user: task.order?.employee?.id,
                                            })}
                                        >
                                            {task.order?.employee?.name}
                                        </Link>
                                        <div className="text-muted text-center text-[1.25rem] leading-[1.6875rem] font-medium">
                                            {new Date(task.createdAt).toLocaleDateString(
                                                locale?.current,
                                                {
                                                    month: 'long',
                                                    day: 'numeric',
                                                },
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-[3.125rem]">
                                        <div className="f ont-medium text-[1rem] leading-[1.375rem]">
                                            {t('task.reviews')} 134
                                        </div>
                                        <div className="items-center text-[1rem] leading-[1.375rem] font-medium">
                                            {t('task.positive_reviews')} 94%
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-[0.625rem]">
                                        <SolarMoneyBagLinear className="text-primary size-[2rem] min-w-[2rem]" />

                                        <div className="text-muted flex text-[1rem] leading-[1.375rem] font-semibold">
                                            {t('task.cash_to_executor')}&nbsp;
                                            <div className="text-primary">
                                                {Intl.NumberFormat(locale?.current, {
                                                    style: 'currency',
                                                    currencyDisplay: 'narrowSymbol',
                                                    currency: task.currency?.code ?? 'UAH',
                                                }).format(task.price)}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-[1.375rem]">
                                    <Button className="text-primary border-primary w-full rounded-[2.25rem] border-1 bg-[0] py-6 text-[1.25rem] leading-[1.6rem] font-semibold sm:w-fit sm:p-[2rem]">
                                        <ProiconsChat className="size-[2rem] min-w-[2rem]" />
                                        {t('task.write')}
                                    </Button>

                                    {!showContactsPerfomer && (
                                        <Button
                                            onPress={() =>
                                                setShowContactsPerfomer(!showContactsPerfomer)
                                            }
                                            className="border-primary text-primary w-full rounded-[2.25rem] border-2 bg-[0] py-6 text-[1.25rem] leading-[1.6rem] font-semibold sm:w-fit sm:p-[2rem]"
                                        >
                                            <MynauiTelephone className="size-[2rem] min-w-[2rem]" />
                                            {t('task.show_contacts')}
                                        </Button>
                                    )}

                                    {showContactsPerfomer && (
                                        <div className="text-muted flex flex-col justify-center gap-[0.625rem] text-[1rem] leading-[1.375rem] font-medium">
                                            <div className="flex">
                                                {t('task.executor_phone')}&nbsp;
                                                {task.order?.employee?.phone}
                                            </div>

                                            <div className="flex">
                                                {t('task.executor_email')}&nbsp;
                                                {task.order?.employee?.email}
                                            </div>
                                        </div>
                                    )}

                                    <Button
                                        variant="light"
                                        color="primary"
                                        onPress={() => openComplaint(1)}
                                        className="flex gap-[0.625rem]"
                                    >
                                        <IonPeopleOutline className="text-muted size-[1.5rem] min-w-[1.5rem]" />
                                        {t('task.executor_not_suitable')}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <Divider className="bg-muted" />

                        <div className="flex flex-wrap gap-4">
                            {staticTask.performer.certificates.map((cert) => (
                                <Image
                                    key={cert.id}
                                    src={cert.image}
                                    className="h-[6.125rem] w-[9.25rem] overflow-hidden rounded-md shadow-md"
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className="w-full py-[2.5rem] text-center text-[2rem] leading-[2.75rem] font-semibold 2xl:px-[5.5rem]">
                    {t('task.other_tasks_in_category')}
                </div>

                <Divider className="bg-muted" />

                <div className="flex flex-col gap-[2.5rem] py-[2.5rem] pb-[3.75rem] 2xl:px-[5.5rem]">
                    {similarTasks.map((similarTask) => (
                        <div
                            key={similarTask.id}
                            className="flex w-full flex-col flex-wrap items-center gap-[1.25rem] sm:flex-row sm:flex-nowrap sm:items-start"
                        >
                            <img
                                src={similarTask.image}
                                alt={similarTask.title}
                                className="h-[5rem] w-[5rem] rounded-full bg-cover bg-center"
                            />

                            <div className="flex w-full flex-col items-center gap-[0.625rem] sm:items-start">
                                <div className="text-center text-[1.625rem] leading-[2.25rem] font-semibold break-all">
                                    {similarTask.title}
                                </div>

                                <div className="text-[1.125rem] leading-[1.5rem] font-medium">
                                    {t('tasks-in-progress.estimation', {
                                        estimated: similarTask.estimated_date,
                                    })}
                                </div>

                                <Button
                                    as={Link}
                                    className="border-primary text-primary w-full rounded-[2.25rem] border-2 bg-[0] py-6 text-[1.25rem] leading-[1.6rem] font-semibold sm:w-fit sm:p-[2rem]"
                                >
                                    {t('tasks-in-progress.view_task')}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Divider className="bg-muted 2xl:w-divider 2xl:h-full" />

            <div className="flex flex-col pb-12 2xl:max-w-min 2xl:px-5">
                <div className="flex flex-col items-start gap-[0.625] px-[3.125rem] py-[1.875rem]">
                    <div className="flex items-start gap-[1.875rem]">
                        <Avatar
                            src={task.user?.avatar}
                            className="win-w-[5.875rem] h-[5.875rem] w-[5.875rem]"
                        ></Avatar>

                        <div>
                            <div className="text-[2rem] leading-[2.75rem] font-medium">
                                {task.user?.name}
                            </div>

                            <div className="flex items-center gap-[0.625rem]">
                                <div className="flex flex-col items-start gap-1">
                                    <div className="text-[1.25rem] leading-[1.688rem] font-medium">
                                        12
                                    </div>
                                    <div className="text-primary text-[0.75rem] leading-[1rem] font-medium">
                                        {t('user-layout.reviews')}
                                    </div>
                                </div>

                                <Divider orientation="vertical" className="bg-primary h-11" />

                                <div className="flex flex-col items-start gap-1">
                                    <div className="flex items-center text-[1.25rem] leading-[1.688rem] font-medium">
                                        90%
                                    </div>
                                    <div className="text-muted flex items-center text-[0.75rem] leading-[1rem] font-medium">
                                        {t('user-layout.positive')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider className="bg-muted" />

                <div className="flex max-w-sm flex-col gap-[1.875rem] pt-[1.875rem]">
                    <div className="flex-col items-start gap-[0.625rem] px-[3.125rem]">
                        <div className="flex w-full items-center gap-[0.625rem]">
                            <SolarMoneyBagLinear className="h-[1.5rem] w-[1.5rem]"></SolarMoneyBagLinear>

                            <div className="text-muted flex text-[1rem] leading-[1.375rem] font-medium">
                                {t('task.created_at')}&nbsp;
                                {new Date(task.createdAt).toLocaleDateString(locale?.current, {
                                    minute: '2-digit',
                                    hour: '2-digit',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </div>
                        </div>

                        <div className="flex items-center gap-[0.625rem]">
                            <IconamoonProfileLight className="h-[1.5rem] w-[1.5rem]"></IconamoonProfileLight>

                            <div className="text-muted flex text-[1rem] leading-[1.375rem] font-medium">
                                {t('task.signed')}&nbsp;
                                {new Date(task.order?.createdAt ?? new Date()).toLocaleDateString(
                                    locale?.current,
                                    {
                                        minute: '2-digit',
                                        hour: '2-digit',
                                        month: 'long',
                                        day: 'numeric',
                                    },
                                )}
                            </div>
                        </div>
                    </div>

                    <Divider className="bg-muted" />

                    <div className="flex flex-col gap-[0.625rem] px-[3.125rem]">
                        <div className="flex items-start gap-[0.625rem]">
                            <MynauiShare className="text-primary aspect-square size-[2.75rem] min-w-[2.75rem]" />
                            <div className="text-[2rem] leading-[2.75rem] font-medium">
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

                    <div className="flex flex-col gap-[0.625rem] px-[3rem]">
                        <div className="flex items-start gap-[0.625rem]">
                            <IconamoonProfileLight className="text-primary aspect-square size-[2.75rem] min-w-[2.75rem]" />
                            <div className="flex items-center text-[2rem] leading-[120%] font-medium">
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
                                navigator.clipboard
                                    .writeText(
                                        route('profile.general-info', { user: task.user?.id }),
                                    )
                                    .then(() =>
                                        addToast({
                                            title: t('user-layout.copied'),
                                            color: 'success',
                                            timeout: 2000,
                                            shouldShowTimeoutProgress: true,
                                        }),
                                    );
                            }}
                        >
                            <div className="text-muted/50 truncate text-[0.875rem] leading-[1.1875rem]">
                                {route('profile.general-info', { user: task.user?.id })}
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

Task.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
