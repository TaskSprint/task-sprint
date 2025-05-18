import React from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";
import {Autocomplete,AutocompleteSection,AutocompleteItem} from "@heroui/autocomplete";
import FavoriteEmployeesSM from '@/Components/FavoriteEmployeesSM';


export default function SubCategory() {
    const { t } = useLaravelReactI18n();

    const animals = [
        {label: "Cat", key: "cat", description: "The second most popular pet in the world"},
        {label: "Dog", key: "dog", description: "The most popular pet in the world"},
        {label: "Elephant", key: "elephant", description: "The largest land animal"},

    ];




    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className="flex flex-col w-[90rem] min-h-[83.25rem] bg-sky-600 items-center">
                <div className="flex w-[90rem] h-[3.375rem] bg-[#F8F8F8] border-b px-30 py-4 gap-2.5">
                    <Breadcrumbs className="px-10 font-normal text-[1rem]">
                        <BreadcrumbItem>{t('sub-category.programming')}</BreadcrumbItem>
                        <BreadcrumbItem>{t('sub-category.sites-creation')}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className="flex flex-row w-[78.5rem] h-[3.375rem] py-1 px-3 bg-white border-b mx-24 justify-between">
                    <h3 className="p-3 text-[1rem] font-normal">{t('sub-category.filter')}</h3>
                    <h3 className="p-3 text-[1rem] font-normal">{t('sub-category.sort')}</h3>
                </div>
                <div className="flex flex-row w-[76.5rem] min-h-[165rem] bg-white">
                    <div className="flex flex-col w-[53.875rem] min-h-[165rem] bg-[#D7F7FF] p-4 gap-8">

                    </div>
                    <div className="w-[22rem] h-[165rem] bg-white justify-start items-center gap-4">
                        <div className="Flex flex-col w-[22rem] min-h-[142.4375rem] items-start justify-center gap-4">
                            <h2 className="text-xl font-semibold">{t('sub-category.top-specialist')}</h2>
                            <FavoriteEmployeesSM />
                            <FavoriteEmployeesSM />
                            <FavoriteEmployeesSM />
                            <FavoriteEmployeesSM />
                            <FavoriteEmployeesSM />
                            <FavoriteEmployeesSM />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
