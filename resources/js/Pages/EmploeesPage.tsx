import React from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import FavoriteEmployeesSM from '@/Components/FavoriteEmployeesSM';
import {  Pagination } from '@heroui/react';
import SubCategoryStandalone from '@/Components/SubCategoryListDemo';
import EmployeeCard from '@/Components/EmployeeCard';

export function EmployeesPage() {
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
            <div className="w-full items-start gap-2.5 bg-[#F8F8F8] px-30 py-4 dark:bg-[#151515]">
            </div>
            <div
                className="mx-24 flex h-[3.375rem] w-full max-w-[78.5rem] items-center justify-between bg-[#FFFFFF] px-3 py-1 shadow dark:bg-[#373737] dark:text-gray-500">
                </div>
            <div className="bg-surface/50 flex w-full max-w-[76.5rem] flex-row items-center justify-start">
                <div
                    className="flex w-full max-w-[53.25rem] flex-col items-center justify-center gap-8 p-4 dark:border-r-white dark:border-r-1">
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
                    <div className="pl-13 pr-3 mt-6 flex flex-col justify-center gap-2.5">
                        <h2 className="mx-auto items-center pl-2 text-center text-xl font-semibold dark:text-white">
                            {t('sub-category.top-specialist')}
                        </h2>
                        <div className="flex flex-col gap-2.5">
                            <FavoriteEmployeesSM item={1} photo={"https://avatars.githubusercontent.com/u/30373425?v=4"} lastVisit={ new Date(date3)} name={"Коваль Д."} positiveReviews={12645} totalReviews={ 12032 } />
                            <FavoriteEmployeesSM item={1} photo={"https://i.pravatar.cc/150?u=a04258114e29026702d"} lastVisit={ new Date(date3)} name={"Ткач П."} positiveReviews={2645} totalReviews={ 1727 } />
                            <FavoriteEmployeesSM item={1} photo={"https://avatars.githubusercontent.com/u/30373425?v=4"} lastVisit={ new Date(date3)} name={"Коваль Д."} positiveReviews={12645} totalReviews={ 12032 } />
                            <FavoriteEmployeesSM item={1} photo={"https://i.pravatar.cc/150?u=a04258114e29026702d"} lastVisit={ new Date(date3)} name={"Ткач П."} positiveReviews={2645} totalReviews={ 1727 } />
                            <FavoriteEmployeesSM item={1} photo={"https://avatars.githubusercontent.com/u/30373425?v=4"} lastVisit={ new Date(date3)} name={"Коваль Д."} positiveReviews={12645} totalReviews={ 12032 } />
                            <FavoriteEmployeesSM item={1} photo={"https://i.pravatar.cc/150?u=a04258114e29026702d"} lastVisit={ new Date(date3)} name={"Ткач П."} positiveReviews={2645} totalReviews={ 1727 } />

                        </div>

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

export default EmployeesPage;
