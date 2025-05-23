import React from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import {Breadcrumbs, BreadcrumbItem} from '@heroui/breadcrumbs';
import FavoriteEmployeesSM from '@/Components/FavoriteEmployeesSM';
import SubCategoryModel from '@/types/models/sub-category';
import TaskCard from '@/Components/TaskCard';
import { Divider, Pagination } from '@heroui/react';
import SubCategoryStandalone from '@/Components/SubCategoryListDemo';

export function SubCategory({ subCategory }: { subCategory: SubCategoryModel }) {
    const { t } = useLaravelReactI18n();
    const count = 536;


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
            <div
                className="mx-24 flex h-[3.375rem] w-full max-w-[78.5rem] items-center justify-between bg-[#FFFFFF] px-3 py-1 shadow dark:bg-[#373737] dark:text-gray-500">
                <h3 className="p-3 text-[1rem] font-normal">{t('sub-category.filter')}</h3>
                <h3 className="p-3 text-[1rem] font-normal">{t('sub-category.sort')}</h3>
            </div>
            <div className="bg-surface/50 flex w-full max-w-[76.5rem] flex-row items-center justify-start">
                <div
                    className="flex w-full max-w-[53.25rem] flex-col items-center justify-center gap-8 p-4 dark:border-r-white dark:border-r-1">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <div className="flex items-center justify-center">
                        <Pagination isCompact showControls initialPage={1} total={10} />
                    </div>
                </div>
                <div className="flex h-full w-fit flex-col items-center justify-start gap-3 bg-white pb-32 shadow dark:bg-transparent">
                    <div className="pl-13 pr-3 mt-6 flex flex-col justify-center gap-2.5">
                        <h2 className="mx-auto items-center pl-2 text-center text-xl font-semibold dark:text-white">
                            {t('sub-category.top-specialist')}
                        </h2>
                        <FavoriteEmployeesSM />
                        <FavoriteEmployeesSM />
                        <FavoriteEmployeesSM />
                        <FavoriteEmployeesSM />
                        <FavoriteEmployeesSM />
                        <FavoriteEmployeesSM />
                        <h3 className="href='#' text-center text-xl font-medium text-[#A7A7A7] underline">
                            {t('sub-category.more')}
                        </h3>
                        <hr className="border-gray-700 border-1 w-full min-w-[19.25rem]" />
                    </div>
                    <div>
                        <div className="dark:bg-none flex justify-start items-start size-fit">
                            <SubCategoryStandalone  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubCategory;
