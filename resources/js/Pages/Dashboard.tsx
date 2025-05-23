import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React from 'react';

export default function Dashboard() {
    const { t } = useLaravelReactI18n();

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl leading-tight font-semibold text-gray-800 dark:text-gray-200">
                    {t('dashboard.title')}
                </h2>
            }
        >
            <Head title={t('dashboard.title')} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-2xs sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {t('dashboard.content')}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
Dashboard.layout = (page: React.ReactNode) => page;
