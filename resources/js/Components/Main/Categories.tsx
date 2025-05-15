import React from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Image, Link } from '@heroui/react';
import Button from '@/Components/Shared/Button';
import SafeHtml from '@/Components/SafeHtml';
import isSvg from 'is-svg';
import Category from '@/types/models/category';

const Categories = ({ categories }: { categories: Category[] }) => {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-col items-center gap-6 p-6">
            <h2 className="text-2xl font-semibold">{t('categories.popular_categories')}</h2>
            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
                {categories.map((category) => (
                    <Button
                        key={category.id}
                        color="primary"
                        className="flex aspect-square size-full transform flex-col items-center justify-end gap-2 p-4 text-center text-lg font-bold text-white shadow-lg duration-300 hover:scale-105 active:scale-95"
                    >
                        {category.icon &&
                            (isSvg(category.icon) ? (
                                <SafeHtml
                                    className="aspect-square h-full w-min"
                                    html={category.icon}
                                    classNames={{
                                        content: 'h-full w-fit aspect-square',
                                    }}
                                />
                            ) : (
                                <Image
                                    src={category.icon}
                                    alt={category.name.current}
                                    width=""
                                    height=""
                                    className="aspect-square h-full w-fit object-cover"
                                    classNames={{
                                        wrapper: 'h-full w-min aspect-square',
                                    }}
                                />
                            ))}
                        <div className="w-full">
                            <span className="inline-block min-h-fit w-full overflow-hidden text-ellipsis">
                                {category.name.current}
                            </span>
                        </div>
                    </Button>
                ))}
            </div>
            <Link href="#" className="text-primary text-lg underline">
                {t('categories.all_categories')}
            </Link>
        </div>
    );
};

export default Categories;
