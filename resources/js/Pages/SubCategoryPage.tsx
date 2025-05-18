import React from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import {Breadcrumbs, BreadcrumbItem} from "@heroui/breadcrumbs";


export default function SubCategoryPage() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col w-full" >
                <Breadcrumbs>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Basome</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <div>

            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
}
