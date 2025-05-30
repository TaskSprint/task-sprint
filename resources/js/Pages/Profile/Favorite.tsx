import { ReactNode } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import DashboardLayout from '@/Layouts/DashboardLayout';
import UserLayout from '@/Layouts/UserLayout';
import FavoriteEmployees from '@/Components/FavoriteEmployees';

export default function Favorite() {
    return (
        <div className="mx-auto flex flex-col gap-8 pb-8">
            <FavoriteEmployees />
            <FavoriteEmployees />
        </div>
    );
}

Favorite.layout = (page: ReactNode) => (
    <AppLayout>
        <UserLayout>
            <DashboardLayout>{page}</DashboardLayout>
        </UserLayout>
    </AppLayout>
);
