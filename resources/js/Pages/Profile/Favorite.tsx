
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ReactNode } from 'react';
import AppLayout from '@/Layouts/AppLayout';
import UserLayout from '@/Layouts/UserLayout';
import FavoriteEmployees from '@/Components/FavoriteEmployees';

export default function Favorite() {

    return (
        <div className="flex flex-col">
            <FavoriteEmployees />
            <FavoriteEmployees />
        </div>
    );
}

Favorite.layout = (page: ReactNode) => (
    <AppLayout>
        <UserLayout>{page}</UserLayout>
    </AppLayout>
);
