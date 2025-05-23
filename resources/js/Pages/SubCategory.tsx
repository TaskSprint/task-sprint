import React from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";
import FavoriteEmployeesSM from '@/Components/FavoriteEmployeesSM';
import SubCategoryModel from '@/types/models/sub-category';
import TaskCard from '@/Components/TaskCard';
import Favorite from '@/Pages/Profile/Favorite';
import FavoriteEmployees from '@/Components/FavoriteEmployees';


export default function SubCategory({ subCategory }: { subCategory: SubCategoryModel }) {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">

            <div className="w-full items-start gap-2.5 bg-[#F8F8F8] px-30 py-4 dark:bg-[#151515]">
                <Breadcrumbs className="px-10 text-[1rem] font-normal">
                    <BreadcrumbItem color="foreground">
                        {subCategory.category?.name.current}
                    </BreadcrumbItem>
                    <BreadcrumbItem color="foreground">{subCategory.name.current}</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className="mx-24 flex h-[3.375rem] w-full max-w-[78.5rem] items-center justify-between bg-[#FFFFFF] px-3 py-1 shadow dark:bg-[#373737] dark:text-gray-500">
                <h3 className="p-3 text-[1rem] font-normal">{t('sub-category.filter')}</h3>
                <h3 className="p-3 text-[1rem] font-normal">{t('sub-category.sort')}</h3>
            </div>
            <div className="bg-surface/50 flex w-full max-w-[76.5rem] flex-row items-center justify-center">
                <div className="m-4 flex w-full flex-col gap-8 justify-center">
                    <TaskCard />
                    <FavoriteEmployeesSM />
                    <FavoriteEmployees />
                </div>
                <div className="border-l-blue-1 w-[22rem] items-center justify-center gap-6 border-l-1 bg-white pb-32 shadow dark:bg-transparent">
                    <div className="mt-6 mr-3.5 ml-5 flex flex-col justify-center gap-2.5">
                        <h2 className="mx-auto flex flex-row items-center pl-2 text-center text-xl font-semibold dark:text-white">
                            {t('sub-category.top-specialist')}
                        </h2>
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
    );
}
