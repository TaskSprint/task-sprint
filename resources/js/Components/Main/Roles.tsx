import Button from '@/Components/Shared/Button';
import { useRouter } from '@/hooks/useRouter';
import { Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Roles() {
    const { t } = useLaravelReactI18n();
    const { route } = useRouter();
    return (
        <div className="flex w-full flex-col items-center justify-center gap-9 px-2 py-9">
            <h2 className="items-center text-center text-[2rem] font-semibold dark:text-white">
                {t('main.roles_question')}
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                <Button
                    as={Link}
                    href={route('employees-page')}
                    className="h-fit rounded-[2.25rem] px-16 py-5 text-xl font-semibold text-white"
                    color="primary"
                >
                    {t('main.specialists')}
                </Button>
                <Button
                    as={Link}
                    href={route('sub-category', { subCategory: 4 })}
                    className="h-fit rounded-[2.25rem] px-16 py-5 text-xl font-semibold text-white"
                    color="primary"
                >
                    {t('main.orders')}
                </Button>
            </div>
        </div>
    );
}
