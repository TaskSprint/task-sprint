import { Head } from '@inertiajs/react';

import React, { useEffect } from 'react';
import Categories from '@/Components/Main/Categories';
import { Info } from '@/Components/Main/Info';
import LastTasks from '@/Components/Main/LastTasks/LastTasks';
import Roles from '@/Components/Main/Roles';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Title } from '@/Components/Main/Title';
import Category from '@/types/models/category';
import { PageProps } from '@/types';
import Task from '@/types/models/task';
import Support from '@/Components/Main/Support';
import { parseAsNumberLiteral, useQueryState } from 'nuqs';
import { addToast } from '@heroui/toast';

const ToastTitle = () => {
    const { t } = useLaravelReactI18n();
    return t('main.verified.title');
};

const ToastDescription = () => {
    const { t } = useLaravelReactI18n();
    return t('main.verified.description');
};

export default function Main({
    categories,
    tasks,
}: PageProps<{
    categories: Category[];
    tasks: Task[];
}>) {
    const { t } = useLaravelReactI18n();
    const [verified, setVerified] = useQueryState(
        'verified',
        parseAsNumberLiteral([0, 1]).withDefault(0).withOptions({
            shallow: true,
            clearOnDefault: true,
        }),
    );

    useEffect(() => {
        if (verified) {
            addToast({
                title: <ToastTitle />,
                description: <ToastDescription />,
                shouldShowTimeoutProgress: true,
                color: 'success',

                motionProps: {
                    onAnimationComplete({ opacity }: { opacity: number }) {
                        if (!opacity) {
                            setVerified(0).then();
                        }
                    },
                },
            });
        }
    }, [verified]);

    return (
        <>
            <Head title={t('main.home')} />

            <div className="bg-surface h-full w-full max-w-[60rem]">
                <Title />
                <Categories categories={categories} />
                <Roles />
                <Info />
                <LastTasks tasks={tasks} />
                <Support />
            </div>
        </>
    );
}
