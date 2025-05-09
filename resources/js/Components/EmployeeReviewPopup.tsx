import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Link, Textarea } from '@heroui/react';

export default function EmployeeReviewPopup() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-col min-w-[57.5625rem] min-h-[34.375rem] items-center justify-center border-b dark:bg-[#00CCFF33]">
            <h2 className="text-center text-[2rem] font-semibold">{t('main.any_questions')}</h2>
            <div className="flex flex-col gap-2">
                <h3></h3>
                <div>
                    <Textarea

                    />
                </div>
            </div>

            <div className="flex gap-2">
                <div> </div>
                <div> </div>
                <div> </div>
            </div>

            <div className="flex justify-between gap-3">
                <Button
                    as={Link}
                    href="#"
                    className="h-fit rounded-[2.25rem] px-16 py-5 text-xl font-semibold text-white"
                    color="primary"
                >
                    {t('main.support')}
                </Button>
                <Button
                    as={Link}
                    href="#"
                    className="h-fit rounded-[2.25rem] px-16 py-5 text-xl font-semibold text-white"
                    color="primary"
                >
                    {t('main.support')}
                </Button>
            </div>



        </div>
    );
}
