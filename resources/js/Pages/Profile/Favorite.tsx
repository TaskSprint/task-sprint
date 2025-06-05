import FavoriteEmployees from '@/Components/FavoriteEmployees';
import AppLayout from '@/Layouts/AppLayout';
import DashboardLayout from '@/Layouts/DashboardLayout';
import UserLayout from '@/Layouts/UserLayout';
import { PageProps } from '@/types';
import User from '@/types/models/user';
import { ReactNode } from 'react';

export default function Favorite({ employees }: PageProps<{ employees: User[] }>) {
    return (
        <div className="mx-auto flex flex-col gap-8 pb-8">
            {employees.map((employee) => (
                <FavoriteEmployees key={employee.id} employee={employee} />
            ))}
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
