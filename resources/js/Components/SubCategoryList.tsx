import ChevronLeftIcon from '@/Components/ChevronLeftIcon';
//применить => <SubCategoryListDemo subCategory={subCategory} />

type SubCategoryProps = {
    subCategory: {
        id: number;
        name: string;
        total: number;
        categories: (string | { title: string; children: string[] })[];
        tags: string[];
    };
};

export default function SubCategory({ subCategory }: SubCategoryProps) {
    const { total, categories, tags } = subCategory;

    return (
        <aside className="w-72 space-y-6 bg-gray-900 p-4 text-white">
            <div>
                <span className="text-3xl font-bold text-teal-400">{total}</span>
                <p className="text-xs text-gray-400">Оголошень в цій категорії</p>
            </div>
            <hr className="border-gray-700" />

            <div className="space-y-2 text-sm">
                <div className="font-semibold text-white">Категорії</div>
                <ul className="space-y-1">
                    <li className="text-gray-300">Всі послуги</li>
                    {categories.map((cat, idx) =>
                        typeof cat === 'string' ? (
                            <li
                                key={idx}
                                className="flex cursor-pointer items-center gap-1 text-gray-300"
                            >
                                <ChevronLeftIcon />
                                {cat}
                            </li>
                        ) : (
                            <li key={idx}>
                                <div className="text-white">{cat.title}</div>
                                <ul className="space-y-1 pl-4 text-gray-400">
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
                <div className="mb-2 text-sm font-semibold text-white">Також шукають</div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="cursor-pointer rounded-full border border-gray-500 px-3 py-1 text-xs text-gray-200 hover:bg-gray-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
}
