import Button from '@/Components/Shared/Button';
import { useRouter } from '@/hooks/useRouter';
import Task from '@/types/models/task';
import { Link } from '@heroui/react';
import { usePage } from '@inertiajs/react';
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
    const { route } = useRouter();

    return (
        <Button
            as={Link}
            variant="bordered"
            href={route('task.index', { task: id })}
            className="hover:bg-foreground/10 flex h-[11.25rem] min-w-[22rem] flex-col items-start justify-center gap-10 rounded-3xl border-2 px-5"
        >
            {/* Top block with title and category */}
            <div className="flex w-full flex-col items-start gap-2 overflow-hidden">
                <h3 className="w-full truncate text-xl leading-7 font-semibold break-all">
                    {name}
                </h3>
                {subCategory && (
                    <p className="w-full truncate text-sm leading-5 font-semibold break-all">
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
                <p className="text-2xl leading-8 font-semibold whitespace-nowrap">
                    {Intl.NumberFormat(locale?.current, {
                        style: 'currency',
                        currencyDisplay: 'narrowSymbol',
                        currency: currency?.code ?? 'UAH',
                    }).format(price)}
                </p>
            </div>
        </Button>
    );
}
