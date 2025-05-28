import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const mockSubCategory = {
    id: 1,
    name: "Домашній майстер",
    total: 536,
    categories: [
        {
            title: "Домашній майстер",
            children: [
                "Сантехнік",
                "Електрик",
                "Чоловік на годину",
                "Столяр",
                "Слюсар",
                "Установка побутової техніки",
                "Інші послуги майстра",
            ],
        },
        "Ремонт техніки",
        "Дизайн",
        "Транспортування",
        "Побутові послуги",
        "Фото і відео",
        "Послуги для тварин",
        "Організація свят",
    ],
    tags: [
        "Монтаж сантехніки",
        "Зробити ключі",
        "Монтаж сушарок для білизни",
        "Провести проводку",
        "Встановити плафон",
        "Ремонт туалету",
    ],
};

export function SubCategoryStandalone() {
    const { total, categories, tags } = mockSubCategory;

    return (
        <aside className="dark:bg-none dark:text-white p-4 space-y-4 w-72 rounded-lg shadow-md">
            <div className="flex flex-row items-center gap-2">
                <span className="text-[#00CCFF] text-[2.25rem] font-bold">{total}</span>
                <div className="flex flex-col items-start">
                    <p className=" text-[1rem] font-normal dark:text-gray-400">Оголошень</p>
                    <p className="text-[1rem] font-normal dark:text-gray-400"> в цій категорії</p>
                </div>
            </div>
            <hr className="border-gray-700" />

            <div className="space-y-2 text-sm">
                <div className="font-semibold dark:text-white">Категорії</div>
                <ul className="space-y-1">
                    <li className="dark:text-gray-300">Всі послуги</li>
                    {categories.map((cat, idx) =>
                        typeof cat === "string" ? (
                            <li key={idx} className="flex items-center gap-1 dark:text-gray-300">
                                <ChevronLeftIcon className="w-4 h-4" />
                                {cat}
                            </li>
                        ) : (
                            <li key={idx}>
                                <div className="dark:text-white">{cat.title}</div>
                                <ul className="pl-4 space-y-1 dark:text-gray-400">
                                    {cat.children.map((child, i) => (
                                        <li key={i}>{child}</li>
                                    ))}
                                </ul>
                            </li>
                        )
                    )}
                </ul>
            </div>

            <hr className="border-gray-700" />

            <div>
                <div className="font-semibold dark:text-white mb-2 text-sm">Також шукають</div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="border border-gray-500 rounded-md px-3 py-1 text-xs dark:text-gray-200 hover:bg-gray-800 cursor-pointer"
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
