import { Head } from '@inertiajs/react';

import React from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import Task from "@/Pages/Task";

export default function Main() {
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('main.home')} />

            <div className="bg-surface h-full w-full max-w-[90rem]">
                <Task />

            </div>
        </>
    );
}
