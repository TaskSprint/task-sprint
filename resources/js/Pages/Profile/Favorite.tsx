import FavoriteEmployees from '@/Components/FavoriteEmployees';
import AppLayout from '@/Layouts/AppLayout';
import DashboardLayout from '@/Layouts/DashboardLayout';
import UserLayout from '@/Layouts/UserLayout';
import { PageProps } from '@/types';
import User from '@/types/models/user';
import { Head } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ReactNode } from 'react';

export default function Favorite({ employees }: PageProps<{ employees: User[] }>) {
    const { t } = useLaravelReactI18n();

    return (
        <>
            <Head title={t('user-layout.favourite_specialists')} />

            <div className="mx-auto flex flex-col gap-8 pb-8">
                {employees.map((employee) => (
                    <FavoriteEmployees key={employee.id} employee={employee} />
                ))}
            </div>
        </>
    );
}

Favorite.layout = (page: ReactNode) => (
    <AppLayout>
        <UserLayout>
            <DashboardLayout>{page}</DashboardLayout>
        </UserLayout>
    </AppLayout>
);
