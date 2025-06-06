import EmployeeCard from '@/Components/EmployeeCard';
import SubCategoryStandalone from '@/Components/SubCategoryListDemo';
import { BreadcrumbItem, Breadcrumbs } from '@heroui/breadcrumbs';
import { Pagination } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export function EmployeesPage() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="h-fit min-h-[3.375rem] w-full items-start gap-2.5 bg-[#F8F8F8] px-30 py-4 dark:bg-[#151515]">
                <Breadcrumbs className="px-10 text-[1rem] font-normal">
                    <BreadcrumbItem color="foreground">
                        {t('sub-category.programming')}
                    </BreadcrumbItem>
                    <BreadcrumbItem color="foreground">
                        {t('sub-category.sites-creation')}
                    </BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div className="mx-24 flex h-fit min-h-[3.375rem] w-full max-w-[78.5rem] items-center justify-between bg-[#FFFFFF] px-3 py-1 shadow dark:bg-[#373737] dark:text-gray-500">
                <h3 className="p-3 text-[1rem] font-normal dark:text-gray-300">
                    {t('sub-category.filter-contractors')}
                </h3>
                <h3 className="p-3 text-[1rem] font-normal dark:text-gray-300">
                    {t('sub-category.sort')}
                </h3>
            </div>

            <div className="bg-surface/50 flex w-full max-w-[76.5rem] flex-row items-center justify-start">
                <div className="flex w-full max-w-[53.25rem] flex-col items-center justify-center gap-5 p-8 dark:border-r-1 dark:border-r-white">
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
                        <div className="flex size-fit items-start justify-start pt-10 dark:bg-none">
                            <SubCategoryStandalone />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeesPage;
