import { Head } from '@inertiajs/react';

import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import Categories from '@/Components/Main/Categories';
import { Info } from '@/Components/Main/Info';
import LastTasks from '@/Components/Main/LastTasks/LastTasks';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />

            <AppLayout>
                <div className="bg-surface h-full w-full max-w-[60rem]">
                    <Categories />
                    <Info />
                    <LastTasks tasks={[]} />
                </div>
            </AppLayout>
        </>
    );
}
