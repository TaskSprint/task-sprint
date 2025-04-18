import { useLaravelReactI18n } from 'laravel-react-i18n';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Shared/Button';
import { Link } from '@heroui/link';

export function TitleLogo() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-col w-[60rem] h-[26rem] justify-self-start gap-41 px-14 py-12
            bg-[url(/images/title-logo.png)] bg-cover bg-center opacity-85 mt-20 ml-56 ">
            <div  className="inline-flex h-9 items-center gap-2.5">
                <ApplicationLogo
                    isFullSize
                    className="aspect-square h-full w-fit text-white"
                />
                <p className="text-2xl font-semibold text-white">TaskSprint</p>
            </div>
            <div className="flex flex-col text-left items-start justify-center gap-4" >
                <div>
                    <h2 className="text-4xl font-bold text-white"
                    >
                        {t('welcome.online_service')}
                    </h2>
                    <h4 className="text text-[1rem] font-medium text-white"
                    >
                        {t('welcome.declaration')}
                    </h4>
                </div>
                <Button
                    as={Link}
                    href="#"
                    className="h-fit rounded-[2.25rem] px-14 py-2.5 text-xl font-semibold text-black bg-white"
                >
                    {t('welcome.how_works')}
                </Button>
            </div>
        </div>
    );
}
