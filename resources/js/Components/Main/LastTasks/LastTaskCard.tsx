import Task from '@/types/models/task';
import { Link, usePage } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function LastTaskCard({
    id,
    name,
    price,
    estimatedDate,
    subCategory,
    currency,
}: Readonly<Task>) {
    const { t } = useLaravelReactI18n();
    const { locale } = usePage().props;

    return (
        <Link
            href={`/task/${id}`}
             className="flex h-[11.25rem] min-w-[22rem] flex-col items-start justify-center gap-10 rounded-3xl border-2 border-gray-400 px-5 dark:border-[#C6C6C6]  hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            {/* Top block with title and category */}
            <div className="flex flex-col items-start gap-2">
                <h3 className="line-clamp-1 text-xl leading-7 font-semibold break-all text-ellipsis text-black dark:text-white">
                    {name}
                </h3>
                {subCategory && (
                    <p className="line-clamp-1 text-sm leading-5 font-semibold break-all text-ellipsis text-black dark:text-white">
                        {subCategory.name.current}
                    </p>
                )}
            </div>

            {/* Bottom block with date and price */}
            <div className="flex flex-col items-start gap-2">
                <p className="text-xs leading-4 font-semibold whitespace-nowrap text-gray-400 dark:text-gray-300">
                    {t('last-tasks.estimation', {
                        estimated: new Date(estimatedDate).toLocaleDateString(locale?.current, {
                            dateStyle: 'full',
                        }),
                    })}
                </p>
                <p className="text-2xl leading-8 font-semibold whitespace-nowrap text-black dark:text-white">
                    {Intl.NumberFormat(locale?.current, {
                        style: 'currency',
                        currencyDisplay: 'narrowSymbol',
                        currency: currency?.code ?? 'UAH',
                    }).format(price)}
                </p>
            </div>
        </Link>
    );
}
