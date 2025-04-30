import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Link } from '@heroui/link';

export default function SupportButton() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-col items-center justify-center gap-9 px-2 py-28">
            <h2 className="text-center text-[2rem] font-semibold dark:text-white">{t('main.any_questions')}</h2>
            <Button
                as={Link}
                href="#"
                className="h-fit rounded-[2.25rem] px-16 py-5 text-xl font-semibold text-white"
                color="primary"
            >
                {t('main.support')}
            </Button>
        </div>
    );
}
