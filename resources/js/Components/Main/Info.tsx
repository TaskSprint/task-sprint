import { Image } from '@heroui/image';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export function Info() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-wrap justify-center gap-12 p-9">
            <div className="flex grow basis-40 flex-col items-center">
                <Image alt="Create task" src="/images/create-task.png" className="size-40" />
                <h3 className="text-foreground text-center text-xl font-semibold">
                    {t('info.task.create.title')}
                </h3>
                <p className="text-center text-sm font-medium text-[#7E7E7E]">
                    {t('info.task.create.description')}
                </p>
            </div>
            <div className="flex grow basis-40 flex-col items-center">
                <Image
                    alt="Employee receive"
                    src="/images/employee-receive.png"
                    className="size-40"
                />
                <h3 className="text-foreground text-center text-xl font-semibold">
                    {t('info.employee-receive.title')}
                </h3>
                <p className="text-center text-sm font-medium text-[#7E7E7E]">
                    {t('info.employee-receive.description')}
                </p>
            </div>
            <div className="flex grow basis-40 flex-col items-center">
                <Image alt="Close task" src="/images/close-task.png" className="size-40" />
                <h3 className="text-foreground text-center text-xl font-semibold">
                    {t('info.task.close.title')}
                </h3>
                <p className="text-center text-sm font-medium text-[#7E7E7E]">
                    {t('info.task.close.description')}
                </p>
            </div>
        </div>
    );
}
