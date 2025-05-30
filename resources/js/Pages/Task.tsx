import Button from '@/Components/Shared/Button';
import AppLayout from '@/Layouts/AppLayout';
import {
    addToast,
    Avatar,
    BreadcrumbItem,
    Breadcrumbs,
    Divider,
    Image,
    Radio,
    RadioGroup,
} from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import SolarMoneyBagLinear from '~icons/solar/money-bag-linear';
import MynauiShare from '~icons/mynaui/share';
import IconamoonProfileLight from '~icons/iconamoon/profile-light';
import MdiEyeOutline from '~icons/mdi/eye-outline';
import { Link } from '@inertiajs/react';
import MynauiTelephone from '~icons/mynaui/telephone';
import React, { useState } from 'react';
import IconParkOutlineTime from '~icons/icon-park-outline/time';
import FluentDocument32Regular from '~icons/fluent/document-32-regular';
import IconParkOutlineAttention from '~icons/icon-park-outline/attention';
import IonPeopleOutline from '~icons/ion/people-outline';
import ProiconsDelete from '~icons/proicons/delete';
import ProiconsChat from '~icons/proicons/chat';
import MageKey from '~icons/mage/key';
import HugeiconsTimeHalfPass from '~icons/hugeicons/time-half-pass';

export default function Task() {
    const { t } = useLaravelReactI18n();
    const [showContactsCustomer, setContactsCustomer] = useState(false);
    const [showContactsPerfomer, setContactsPerfomer] = useState(false);

    const statusButtonText: Record<string, string> = {
        pending: 'Підтвердити замовлення',
        'pending for executor': 'Розпочати виконання',
        InProgress: 'Закрити як виконане',
        completed: 'Створити схоже завдання',
        cancelled: 'Завдання скасовано',
    };

    const task = {
        id: '76457324',
        title: 'Створити сайт для магазину одягу',
        estimated_date: '15 квітня',
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/stray228-profile_image-ceb0393a88eb8286-70x70.jpeg',
        price: '3000',
        status: 'pending',
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
        created_at: '1 червня 21:15',
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
            title: 'Поскаржитись на замовлення',
            subtitle: 'Виберіть відповідну причину:',
            reasons: [
                'Носить образливий характер',
                'Накрутка відгуків / передплатників',
                'Шахрайство, порушення закону',
                'Купівля / продаж товарів',
                'Купівля / оренда акаунтів',
                'Неправильно оформлено (не та категорія / в описі контакти / це фахівець',
            ],
            note: 'Якщо у вас скарга іншого характеру, напишіть нам на support@tasksprint.tech',
            buttons: [
                { text: 'Поскаржитись', type: 'submit' },
                { text: 'Відміна', type: 'close' },
            ],
        },
        {
            title: 'Бажаєте змінити фахівця?',
            subtitle: 'Будь ласка, вкажіть причину зміни фахівця:',
            reasons: [
                'Не можу зв’язатись',
                'Не може виконати моє замовлення',
                'Хочу розглянути інші пропозиції',
                'Вказати свою причину',
            ],
            textareaPlaceholder: 'Вкажіть причину зміни фахівця',
            buttons: [
                { text: 'Змінити фахівця', type: 'submit' },
                { text: 'Відміна', type: 'close' },
            ],
        },
        {
            title: 'Подовження замовлення',
            subtitle: 'Увага: ви можете продовжити замовлення тільки один раз',
            reasons: ['3 дні', '5 днів', '10 днів', '30 днів'],
            buttons: [
                { text: 'Підтвердити', type: 'submit' },
                { text: 'Відміна', type: 'close' },
            ],
        },
        {
            title: 'Ви дійсно хочете видалити замовлення?',
            subtitle: 'Ми можемо підібрати для вас іншого фахівця для виконання роботи',
            buttons: [
                { text: 'Вибрати іншого фахівця', type: 'submit' },
                { text: 'Так, видалити.', type: 'close' },
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
        <div className="bg-surface mx-auto flex h-full w-full flex-col text-white 2xl:max-w-[96rem] 2xl:flex-row">
            <main className="mr-2 flex w-full flex-col">
                <div className="w-full gap-[0.625rem] py-[2.5rem] 2xl:px-[5.5rem] 2xl:pt-[3.5rem]">
                    <div className="flex w-full justify-between gap-[5rem]">
                        <div className="text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white">
                            {task.title}
                        </div>
                        <div className="text-primary text-[2rem] leading-[2.75rem] font-semibold">
                            {task.price} грн
                        </div>
                    </div>

                    <div className="text-muted flex items-start justify-between pb-[0.625rem] text-[0.875rem] leading-[1.1875rem] font-medium">
                        <div className="flex">
                            <div className="flex gap-[2.2rem]">
                                <div className="flex items-center gap-[0.625rem]">
                                    <MdiEyeOutline />
                                    Перегляди: {task.view}
                                </div>

                                <div className="">№ {task.id}</div>
                            </div>
                        </div>

                        <div className="text-right">
                            Ціна обговорюється
                            <br />
                            Оплата готівкою
                        </div>
                    </div>

                    <Breadcrumbs className="gap-[1.2rem] text-[1.25rem] leading-[1.6875rem] font-medium">
                        <BreadcrumbItem className="gap-[0.625rem]">Всі категорії </BreadcrumbItem>
                        <BreadcrumbItem className="gap-[0.625rem]">Маркетинг </BreadcrumbItem>
                        <BreadcrumbItem className="gap-[0.625rem]">Маркетинг </BreadcrumbItem>
                        <BreadcrumbItem className="gap-[0.625rem]">
                            Розробка сайтів та додатків{' '}
                        </BreadcrumbItem>
                        <BreadcrumbItem className="gap-[0.625rem]">Сайти </BreadcrumbItem>
                    </Breadcrumbs>
                </div>

                <Divider className="bg-muted" />

                <div className="flex w-full flex-col gap-[1.25rem] py-[2.5rem] text-[1rem] leading-[1.375rem] 2xl:px-[5.5rem]">
                    <div className="text-muted flex items-start justify-between pb-[0.625rem] font-semibold">
                        <div className="flex text-black dark:text-white">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-[0.625rem]">
                                    <IconParkOutlineTime />
                                    Виконати до: {task.estimated_date}
                                </div>

                                <div className="flex items-center gap-[0.625rem]">
                                    <FluentDocument32Regular />
                                    файл.pdf
                                </div>
                            </div>
                        </div>

                        <div className="text-primary text-right">{task.status}</div>
                    </div>

                    <div className="text-muted font-medium">
                        Розробити сучасний та зручний інтернет-магазин одягу з адаптивним дизайном,
                        що забезпечить комфортний перегляд і покупки з будь-яких пристроїв. Сайт має
                        включати каталог товарів із фільтрами, кошик для покупок, систему оплати та
                        зворотного зв’язку. Додаткові функції: особистий кабінет користувача,
                        відгуки, інтеграція з соцмережами та можливість підключення аналітики для
                        відстеження продажів.
                    </div>

                    <div className="flex items-center gap-[0.625rem] text-black dark:text-white">
                        <MageKey />
                        Конфіденційна інформація
                    </div>

                    {!showContactsCustomer && (
                        <Button
                            variant="bordered"
                            color="primary"
                            onPress={() => setContactsCustomer(!showContactsCustomer)}
                            className="text-primary w-full rounded-[2.25rem] py-6 text-[1.25rem] leading-[1.6rem] font-semibold sm:w-fit sm:p-[2rem]"
                        >
                            <MynauiTelephone />
                            Показати контакти
                        </Button>
                    )}

                    {showContactsCustomer && (
                        <div className="text-muted flex flex-col justify-center gap-[0.625rem] text-[1rem] leading-[1.375rem] font-medium">
                            <div className="flex">
                                Телефон замовника:
                                <div className="text-primary">{task.performer.phone}</div>
                            </div>

                            <div className="flex">
                                Email замовника:
                                <div className="text-primary">{task.performer.email}</div>
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
                            <SolarMoneyBagLinear />
                            {statusButtonText[task.status] ?? 'Невідомий статус'}
                        </Button>

                        <Button
                            variant="light"
                            onPress={() => openComplaint(0)}
                            className="text-muted w-full rounded-[2.25rem] py-6 leading-[1.6rem] font-semibold sm:w-fit sm:p-[2rem]"
                        >
                            <IconParkOutlineAttention />
                            Поскаржитись
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-[1.25rem] text-[1.25rem] leading-[1rem] text-black dark:text-white">
                        <Button
                            variant="light"
                            color="primary"
                            onPress={() => openComplaint(1)}
                            className="flex items-center gap-[0.625rem] text-nowrap"
                        >
                            <IonPeopleOutline className="min-w-fit text-white" />
                            Змінити фахівця
                        </Button>
                        <Button
                            variant="light"
                            color="primary"
                            onPress={() => openComplaint(2)}
                            className="flex items-center gap-[0.625rem] text-nowrap"
                        >
                            <HugeiconsTimeHalfPass className="min-w-fit text-white" />
                            <div className="text-primary">Подовжити замовлення</div>
                        </Button>
                        <Button
                            variant="light"
                            color="primary"
                            onPress={() => openComplaint(3)}
                            className="flex items-center gap-[0.625rem] text-nowrap"
                        >
                            <ProiconsDelete className="min-w-fit text-white" />
                            <div className="text-primary">Видалити замовлення</div>
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
                            <div className="w-full text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white">
                                {complaint.title}
                            </div>

                            <div className="h-[1.6875rem] w-full max-w-[47.875rem] text-[1.25rem] leading-[1.6875rem] font-semibold text-black dark:text-white">
                                {complaint.subtitle}
                            </div>

                            {complaint.reasons?.length && (
                                <RadioGroup className="w-full gap-4">
                                    {complaint.reasons.map((reason, idx) => (
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
                                            <button
                                                key={btnIdx}
                                                className="text-primary cursor-pointer bg-[0] text-[1.25rem] leading-[1.6875rem] font-semibold"
                                                onClick={() => closeComplaint(index)} // закрываем блок
                                            >
                                                {btn.text}
                                            </button>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    ) : null,
                )}

                <div className="flex w-full flex-col gap-[0.625rem] py-[2.5rem] 2xl:px-[5.5rem]">
                    <div className="text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white">
                        Виконує
                    </div>

                    <div className="text-muted text-[0.875rem] leading-[1.1875rem] font-medium">
                        У цьому блоці відображається фахівець, який виконує ваше замовлення. Ви
                        можете зв’язатись з ним за вказаними контактами або написати особисте
                        повідомлення.
                    </div>
                </div>

                {task.performer && (
                    <div className="flex w-full flex-col gap-[2.5rem] bg-[rgba(0,220,255,0.1)] py-[2.5rem] 2xl:px-[5.5rem]">
                        <div className="flex w-full gap-[1.875rem]">
                            <Avatar
                                className="h-[6.5rem] w-[6.5rem] min-w-[6.5rem] rounded-full"
                                src={task.performer.avatar}
                            ></Avatar>

                            <div className="flex w-full flex-col gap-[0.675rem]">
                                <div className="flex w-full flex-col items-start gap-[0.625rem]">
                                    <div className="flex w-full items-start justify-between gap-[5rem]">
                                        <div className="text-[1.25rem] leading-[1.6875rem] font-semibold text-black dark:text-white">
                                            Коментар... (ціна після постановки задачі) Коментар...
                                            Коментар... Коментар Коментар Коментар Коментар Коментар
                                            Коментар Коментар Коментар Коментар Коментар Коментар
                                            Коментар Коментар Коментар Коментар Коментар Коментар
                                            Коментар
                                        </div>
                                        <div className="text-muted text-[1.25rem] leading-[1.6875rem] font-medium">
                                            Сьогодні 12:27
                                        </div>
                                    </div>

                                    <div className="text-[1rem] leading-[1.375rem] font-semibold text-black dark:text-white">
                                        {task.performer.name}
                                    </div>

                                    <div className="flex items-start gap-[3.125rem] text-black dark:text-white">
                                        <div className="f ont-medium text-[1rem] leading-[1.375rem]">
                                            Відгуків: 134
                                        </div>
                                        <div className="items-center text-[1rem] leading-[1.375rem] font-medium">
                                            Позитивних: 94%
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-[0.625rem]">
                                        <SolarMoneyBagLinear className="text-primary aspect-square size-[2rem] min-w-[2rem]" />

                                        <div className="text-muted flex text-[1rem] leading-[1.375rem] font-semibold">
                                            Оплата в руки фахівця:{' '}
                                            <div className="text-primary"> {task.price}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start gap-[1.375rem]">
                                    <Button className="text-primary border-primary w-full rounded-[2.25rem] border-1 bg-[0] py-6 text-[1.25rem] leading-[1.6rem] font-semibold sm:w-fit sm:p-[2rem]">
                                        <ProiconsChat />
                                        Написати
                                    </Button>

                                    {!showContactsPerfomer && (
                                        <Button
                                            onPress={() =>
                                                setContactsPerfomer(!showContactsPerfomer)
                                            }
                                            className="border-primary text-primary w-full rounded-[2.25rem] border-2 bg-[0] py-6 text-[1.25rem] leading-[1.6rem] font-semibold sm:w-fit sm:p-[2rem]"
                                        >
                                            <MynauiTelephone />
                                            Показати контакти
                                        </Button>
                                    )}

                                    {showContactsPerfomer && (
                                        <div className="text-muted flex flex-col justify-center gap-[0.625rem] text-[1rem] leading-[1.375rem] font-medium">
                                            <div className="flex">
                                                Телефон фахівця:
                                                <div className="text-black dark:text-white">
                                                    {task.performer.phone}
                                                </div>
                                            </div>

                                            <div className="flex">
                                                Email фахівця:
                                                <div className="text-black dark:text-white">
                                                    {task.performer.email}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <Button
                                        variant="light"
                                        color="primary"
                                        onPress={() => openComplaint(1)}
                                        className="flex gap-[0.625rem]"
                                    >
                                        <IonPeopleOutline className="text-muted min-w-fit" />
                                        Фахівець не підійшов
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <Divider className="bg-muted" />

                        <div className="flex flex-wrap gap-4">
                            {task.performer.certificates.map((cert) => (
                                <Image
                                    key={cert.id}
                                    src={cert.image}
                                    className="h-[6.125rem] w-[9.25rem] overflow-hidden rounded-md shadow-md"
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className="w-full py-[2.5rem] text-center text-[2rem] leading-[2.75rem] font-semibold text-black 2xl:px-[5.5rem] dark:text-white">
                    Інші замовлення у цій категорії
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
                                <div className="text-center text-[1.625rem] leading-[2.25rem] font-semibold break-all text-black dark:text-white">
                                    {similarTask.title}
                                </div>

                                <div className="text-[1.125rem] leading-[1.5rem] font-medium text-black dark:text-white">
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
                            src={task.customer.avatar}
                            className="win-w-[5.875rem] h-[5.875rem] w-[5.875rem]"
                        ></Avatar>

                        <div>
                            <div className="text-[2rem] leading-[2.75rem] font-medium text-black dark:text-white">
                                {task.customer.name}
                            </div>

                            <div className="flex items-center gap-[0.625rem]">
                                <div className="flex flex-col items-start gap-1">
                                    <div className="text-[1.25rem] leading-[1.688rem] font-medium text-black dark:text-white">
                                        12
                                    </div>
                                    <div className="text-primary text-[0.75rem] leading-[1rem] font-medium">
                                        відгуків
                                    </div>
                                </div>

                                <Divider orientation="vertical" className="bg-primary h-11" />

                                <div className="flex flex-col items-start gap-1">
                                    <div className="flex items-center text-[1.25rem] leading-[1.688rem] font-medium text-black dark:text-white">
                                        90%
                                    </div>
                                    <div className="text-muted flex items-center text-[0.75rem] leading-[1rem] font-medium">
                                        позитивних
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider className="bg-muted" />

                <div className="flex flex-col gap-[1.875rem] pt-[1.875rem]">
                    <div className="flex-col items-start gap-[0.625rem] px-[3.125rem]">
                        <div className="flex w-full items-center gap-[0.625rem]">
                            <SolarMoneyBagLinear className="h-[1.5rem] w-[1.5rem] text-black dark:text-white"></SolarMoneyBagLinear>

                            <div className="text-muted flex text-[1rem] leading-[1.375rem] font-medium">
                                Створено:{' '}
                                <div className="text-black dark:text-white">{task.created_at}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-[0.625rem]">
                            <IconamoonProfileLight className="h-[1.5rem] w-[1.5rem] text-black dark:text-white"></IconamoonProfileLight>

                            <div className="text-muted flex text-[1rem] leading-[1.375rem] font-medium">
                                Підписано:{' '}
                                <div className="text-black dark:text-white">{task.created_at}</div>
                            </div>
                        </div>
                    </div>

                    <Divider className="bg-muted" />

                    <div className="flex flex-col gap-[0.625rem] px-[3.125rem]">
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

                    <div className="flex flex-col gap-[0.625rem] px-[3rem]">
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
                                navigator.clipboard.writeText('profileLink').then(() =>
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
                                {'profileLink'}
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
