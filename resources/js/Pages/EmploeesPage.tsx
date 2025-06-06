import React from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import {  Pagination } from '@heroui/react';
import SubCategoryStandalone from '@/Components/SubCategoryListDemo';
import EmployeeCard from '@/Components/EmployeeCard';
import { BreadcrumbItem, Breadcrumbs } from '@heroui/breadcrumbs';

export function EmployeesPage() {
    const { t } = useLaravelReactI18n();


    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="w-full min-h-[3.375rem] h-fit  items-start gap-2.5 bg-[#F8F8F8] px-30 py-4 dark:bg-[#151515]">
               <Breadcrumbs className="px-10 text-[1rem] font-normal">
                    <BreadcrumbItem color="foreground">
                        {t('sub-category.programming')}
                    </BreadcrumbItem>
                    <BreadcrumbItem color="foreground">{t('sub-category.sites-creation')}</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div
                className="mx-24 flex min-h-[3.375rem] h-fit w-full max-w-[78.5rem] items-center justify-between bg-[#FFFFFF] px-3 py-1 shadow dark:bg-[#373737] dark:text-gray-500">
                <h3 className="p-3 text-[1rem] font-normal dark:text-gray-300">{t('sub-category.filter-contractors')}</h3>
                <h3 className="p-3 text-[1rem] font-normal dark:text-gray-300">{t('sub-category.sort')}</h3>
            </div>

            <div className="bg-surface/50 flex w-full max-w-[76.5rem] flex-row items-center justify-start">
                <div
                    className="flex w-full max-w-[53.25rem] flex-col items-center justify-center gap-5 p-8 dark:border-r-white dark:border-r-1">
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <EmployeeCard />
                    <div className="flex items-center justify-center">
                        <Pagination isCompact showControls initialPage={1} total={5} />
                    </div>
                </div>
                <div className="flex h-full w-fit flex-col items-center justify-start gap-3 bg-white pb-32 shadow dark:bg-transparent">
                    <div>
                        <div className="dark:bg-none flex justify-start items-start size-fit pt-10">
                            <SubCategoryStandalone  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeesPage;
