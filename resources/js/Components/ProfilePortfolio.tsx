import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Link } from '@heroui/react';

export default function Support() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-col items-center justify-center gap-9 px-2 py-28">
            <h2 className="text-center text-[2rem] font-semibold">{t('main.any_questions')}</h2>
            <h2 className="text-center text-[2rem] font-semibold">{t('main.any_questions')}</h2>


        </div>
    );
}
