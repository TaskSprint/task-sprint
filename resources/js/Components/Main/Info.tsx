import { Image } from '@heroui/image';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export function Info() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-wrap justify-center gap-12 p-9">
            <div className="flex flex-col items-center">
                <Image alt="Create task" src="/images/create-task.png" className="size-40" />
                <h3 className="text-center text-xl font-semibold text-foreground">
                    {t('info.task.create.title')}
                </h3>
                <p className="text-center text-sm font-medium text-[#7E7E7E]">
                    {t('info.task.create.description')}
                </p>
            </div>
            <div className="flex flex-col items-center">
                <Image alt="Find task" src="/images/employee-receive.png" className="size-40" />
                <h3 className="text-center text-xl font-semibold text-foreground">
                    {t('info.employee-receive.title')}
                </h3>
                <p className="text-center text-sm font-medium text-[#7E7E7E]">
                    {t('info.employee-receive.description')}
                </p>
            </div>
            <div className="flex flex-col items-center">
                <Image alt="Create task" src="/images/close-task.png" className="size-40" />
                <h3 className="text-center text-xl font-semibold text-foreground">
                    {t('info.task.close.title')}
                </h3>
                <p className="text-center text-sm font-medium text-[#7E7E7E]">
                    {t('info.task.close.description')}
                </p>
            </div>
        </div>
    );
}
