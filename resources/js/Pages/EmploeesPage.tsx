import React from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import FavoriteEmployeesSM from '@/Components/FavoriteEmployeesSM';
import {  Pagination } from '@heroui/react';
import SubCategoryStandalone from '@/Components/SubCategoryListDemo';
import EmployeeCard from '@/Components/EmployeeCard';
import { BreadcrumbItem, Breadcrumbs } from '@heroui/breadcrumbs';
import SubCategoryModel from '@/types/models/sub-category';

export function EmployeesPage({ subCategory }: { subCategory: SubCategoryModel }) {
    let { t } = useLaravelReactI18n();

    let date1 = new Date('2025-05-26T14:00:00Z')
    let date2 = new Date('2025-03-11T19:00:00Z')
    let date3 = new Date('2025-05-01T09:00:00Z')
    let bannersSM = [
        {
            item: 1,
            name: "Коваль Д.",
            photo: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            totalReviews: 24,
            positiveReviews: 21,
            lastVisit: new Date(date1),
        },
        {
            item: 2,
            name: "Ткач П.",
            photo: "https://avatars.githubusercontent.com/u/30373425?v=4",
            totalReviews: 25,
            positiveReviews: 25,
            lastVisit: new Date(date3),
        },{
            item: 3,
            name: "Коваль Д.",
            photo: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            totalReviews: 24,
            positiveReviews: 21,
            lastVisit: new Date(date2),
        },
        {
            item: 4,
            name: "Ткач П.",
            photo: "https://avatars.githubusercontent.com/u/30373425?v=4",
            totalReviews: 25,
            positiveReviews: 25,
            lastVisit: new Date(date2),
        },{
            item: 5,
            name: "Коваль Д.",
            photo: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            totalReviews: 24,
            positiveReviews: 21,
            lastVisit: new Date(date1),
        },
        {
            item: 6,
            name: "Ткач П.",
            photo: "https://avatars.githubusercontent.com/u/30373425?v=4",
            totalReviews: 25,
            positiveReviews: 25,
            lastVisit: new Date(date3),
        },
    ];


    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="w-full min-h-[3.375rem] h-fit  items-start gap-2.5 bg-[#F8F8F8] px-30 py-4 dark:bg-[#151515]">
               <Breadcrumbs className="px-10 text-[1rem] font-normal">
                    <BreadcrumbItem color="foreground">
                        {subCategory.category?.name.current}
                    </BreadcrumbItem>
                    <BreadcrumbItem color="foreground">{subCategory.name.current}</BreadcrumbItem>
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
