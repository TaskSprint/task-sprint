import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useRouter } from '@/hooks/useRouter';
import { useLaravelReactI18n } from 'laravel-react-i18n';

import React from 'react';
import CategoriesComponent from "@/Components/Main/CategoriesComponent";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
    categories
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const { route } = useRouter();
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    const { t } = useLaravelReactI18n();

    return (
        <>

            <div className="">
                <CategoriesComponent />
            </div>

        </>
    );
}
