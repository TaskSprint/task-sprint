import React, {FC} from "react";
import Category from "@/types/models/category";
import {useLaravelReactI18n} from "laravel-react-i18n";


interface CategoriesProps {
    categories: Category[];
}

const CategoriesComponent : FC<CategoriesProps> = ({ categories }) => {

    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-col items-center p-6 gap-6 bg-gray-900 text-white">
            <h2 className="text-2xl font-semibold">{t('categories.popular_categories')}</h2>
            <div className="grid grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center w-48 h-48 bg-primary rounded-2xl p-4 text-center shadow-lg"
                    >
                        <img
                            src={category.name}
                            className="text-5xl"
                        />
                        <span className="text-lg font-bold mt-2">{category.name}</span>
                    </div>
                ))}
            </div>
            <a href="#" className="text-primary underline text-lg">
                {t('categories.all_categories')}
            </a>
        </div>
    );
};

export default CategoriesComponent;
