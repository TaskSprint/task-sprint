import { ChevronLeftIcon } from '@heroicons/react/24/outline';

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
        <aside className="bg-gray-900 text-white p-4 space-y-6 w-72">
            <div>
                <span className="text-teal-400 text-3xl font-bold">{total}</span>
                <p className="text-xs text-gray-400">Оголошень в цій категорії</p>
            </div>
            <hr className="border-gray-700" />

            <div className="space-y-2 text-sm">
                <div className="font-semibold text-white">Категорії</div>
                <ul className="space-y-1">
                    <li className="text-gray-300">Всі послуги</li>
                    {categories.map((cat, idx) =>
                        typeof cat === "string" ? (
                            <li key={idx} className="flex items-center gap-1 text-gray-300">
                                <ChevronLeftIcon className="w-4 h-4" />
                                {cat}
                            </li>
                        ) : (
                            <li key={idx}>
                                <div className="text-white">{cat.title}</div>
                                <ul className="pl-4 space-y-1 text-gray-400">
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
                <div className="font-semibold text-white mb-2 text-sm">Також шукають</div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="border border-gray-500 rounded-full px-3 py-1 text-xs text-gray-200 hover:bg-gray-800 cursor-pointer"
                        >
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </aside>
    );
}
