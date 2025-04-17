import { Head } from '@inertiajs/react';

import React from 'react';
import Categories from '@/Components/Main/Categories';
import { Info } from '@/Components/Main/Info';
import LastTasks from '@/Components/Main/LastTasks/LastTasks';
import Support from '@/Components/Main/Support';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />

            <div className="bg-surface h-full w-full max-w-[60rem]">
                <Categories />
                <Info />
                <LastTasks tasks={[]} />
                <Support />
            </div>
        </>
    );
}
