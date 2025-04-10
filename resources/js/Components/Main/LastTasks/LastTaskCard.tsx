import { useLaravelReactI18n } from 'laravel-react-i18n';
import Task from '@/types/models/task';

export default function LastTaskCard({ name, price, estimated_date, subCategory }: Readonly<Task>) {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex h-[11.25rem] min-w-[22rem] flex-col items-start justify-center gap-10 rounded-3xl border-2 border-gray-400 bg-white px-5 dark:border-[#C6C6C6] dark:bg-[#2C2C2C]">
            {/* Top block with title and category */}
            <div className="flex flex-col items-start gap-2">
                <h3 className="line-clamp-1 text-ellipsis break-all text-xl font-semibold leading-7 text-black dark:text-white">
                    {name}
                </h3>
                {subCategory?.category && (
                    <p className="line-clamp-1 text-ellipsis break-all text-sm font-semibold leading-5 text-black dark:text-white">
                        {subCategory.category.name.current}
                    </p>
                )}
            </div>

            {/* Bottom block with date and price */}
            <div className="flex flex-col items-start gap-2">
                <p className="whitespace-nowrap text-xs font-semibold leading-4 text-gray-400 dark:text-gray-300">
                    {t('last-tasks.estimation', { estimated: estimated_date })}
                </p>
                <p className="whitespace-nowrap text-2xl font-semibold leading-8 text-black dark:text-white">
                    {price} ₴
                </p>
            </div>
        </div>
    );
}
