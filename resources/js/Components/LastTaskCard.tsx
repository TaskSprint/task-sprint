import { useLaravelReactI18n } from 'laravel-react-i18n';
import Task from '@/types/models/task';

export default function LastTaskCard({ name, price, estimated_date, subCategory }: Readonly<Task>) {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex h-[11.25rem] min-w-[22rem] flex-col items-start justify-center gap-10 rounded-3xl border-2 border-gray-400 bg-white px-5">
            {/* Top block with title and category */}
            <div className="flex flex-col items-start gap-2">
                <h3 className="font-manrope line-clamp-1 overflow-ellipsis break-all text-xl font-semibold leading-7 text-black">
                    {name}
                </h3>
                {subCategory?.category && (
                    <p className="font-manrope line-clamp-1 overflow-ellipsis break-all text-sm font-semibold leading-5 text-black">
                        {subCategory.category.name}
                    </p>
                )}
            </div>

            {/* Bottom block with date and price */}
            <div className="flex flex-col items-start gap-2">
                <p className="font-manrope whitespace-nowrap text-xs font-semibold leading-4 text-gray-400">
                    {t('lastTasks.estimation', { estimated: estimated_date })}
                </p>
                <p className="font-manrope whitespace-nowrap text-2xl font-semibold leading-8 text-black">
                    {price} ₴
                </p>
            </div>
        </div>
    );
}
