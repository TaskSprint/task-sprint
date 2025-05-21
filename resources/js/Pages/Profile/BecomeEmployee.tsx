import React from 'react';
import UserLayout from '@/Layouts/UserLayout';
import AppLayout from '@/Layouts/AppLayout';

export default function BecomeEmployee() {


    return (
        <div className="text-[3rem]">
            BecomeEmployeePage
        </div>
    );
}

BecomeEmployee.layout = (page: React.ReactNode) => (
    <AppLayout>
        <UserLayout>{page}</UserLayout>
    </AppLayout>
);
