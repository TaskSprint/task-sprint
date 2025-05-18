import React from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";
import FavoriteEmployeesSM from '@/Components/FavoriteEmployeesSM';


export default function SubCategory() {
    const { t } = useLaravelReactI18n();





    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className="flex flex-col w-[90rem] min-h-[83.25rem] bg-sky-600 dark:bg-[#172F49] items-center">
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
                    <div className="flex flex-col w-[53.875rem] min-h-[165rem] bg-[#D7F7FF] dark:bg-[#172F49]  p-4 gap-8">

                    </div>
                    <div className="w-[23rem] h-[17065rem] bg-white dark:bg-[#172F49] justify-start items-start border-l-blue-50">
                        <div className="flex flex-col w-[22rem] h-[82.125rem] justify-center">
                            <h2 className="flex flex-row text-center text-xl font-semibold dark:text-white">{t('sub-category.top-specialist')}</h2>
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
