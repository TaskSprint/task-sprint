import ChevronLeftIcon from '@/Components/ChevronLeftIcon';
import React from 'react';

const mockSubCategory = {
    id: 1,
    name: 'Домашній майстер',
    total: 536,
    categories: [
        {
            title: 'Домашній майстер',
            children: [
                'Сантехнік',
                'Електрик',
                'Чоловік на годину',
                'Столяр',
                'Слюсар',
                'Установка побутової техніки',
                'Інші послуги майстра',
            ],
        },
        'Ремонт техніки',
        'Дизайн',
        'Транспортування',
        'Побутові послуги',
        'Фото і відео',
        'Послуги для тварин',
        'Організація свят',
    ],
    tags: [
        'Монтаж сантехніки',
        'Зробити ключі',
        'Монтаж сушарок для білизни',
        'Провести проводку',
        'Встановити плафон',
        'Ремонт туалету',
    ],
};

export function SubCategoryStandalone() {
    const { total, categories, tags } = mockSubCategory;

    return (
        <aside className="ml-9 w-72 space-y-4 rounded-lg p-4 shadow-md dark:bg-none dark:text-white">
            <div className="flex flex-row items-center gap-2">
                <span className="text-[2.25rem] font-bold text-[#00CCFF]">{total}</span>
                <div className="flex flex-col items-start">
                    <p className="text-[1rem] font-normal dark:text-gray-400">Оголошень</p>
                    <p className="text-[1rem] font-normal dark:text-gray-400"> в цій категорії</p>
                </div>
            </div>
            <hr className="border-gray-700" />

            <div className="space-y-2 text-sm">
                <div className="font-semibold dark:text-white">Категорії</div>
                <ul className="space-y-1">
                    <li className="dark:text-gray-300">Всі послуги</li>
                    {categories.map((cat, idx) =>
                        typeof cat === 'string' ? (
                            <li key={idx} className="flex items-center gap-1 dark:text-gray-300">
                                <ChevronLeftIcon />
                                {cat}
                            </li>
                        ) : (
                            <li key={idx}>
                                <div className="dark:text-white">{cat.title}</div>
                                <ul className="space-y-1 pl-4 dark:text-gray-400">
                                    {cat.children.map((child, i) => (
                                        <li key={i}>{child}</li>
                                    ))}
                                </ul>
                            </li>
                        ),
                    )}
                </ul>
            </div>

            <hr className="border-gray-700" />

            <div>
                <div className="mb-2 text-sm font-semibold dark:text-white">Також шукають</div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="cursor-pointer rounded-md border border-gray-500 px-3 py-1 text-xs hover:bg-gray-300 dark:text-gray-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default SubCategoryStandalone;
