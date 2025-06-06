import { Head } from '@inertiajs/react';

import Categories from '@/Components/Main/Categories';
import { Info } from '@/Components/Main/Info';
import LastTasks from '@/Components/Main/LastTasks/LastTasks';
import Roles from '@/Components/Main/Roles';
import Support from '@/Components/Main/Support';
import { Title } from '@/Components/Main/Title';
import { PageProps } from '@/types';
import Category from '@/types/models/category';
import Task from '@/types/models/task';
import { addToast } from '@heroui/toast';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { parseAsNumberLiteral, useQueryState } from 'nuqs';
import { useEffect } from 'react';

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
    }, [setVerified, verified]);

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
