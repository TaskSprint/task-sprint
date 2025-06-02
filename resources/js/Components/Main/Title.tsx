import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Shared/Button';
import { Image, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export function Title() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="relative flex min-h-[26rem] w-full flex-col justify-between gap-6 px-14 py-12">
            <Image
                alt="Title"
                classNames={{ wrapper: 'size-full absolute inset-0' }}
                src="/images/title.png"
                className="z-0 size-full object-cover"
                radius="none"
                width="100%"
            />
            <div className="relative inline-flex h-9 items-center gap-2.5">
                <ApplicationLogo isFullSize className="aspect-square h-full w-fit text-white" />
                <p className="text-2xl font-semibold text-white">TaskSprint</p>
            </div>
            <div className="relative flex flex-col items-start justify-center gap-4 text-left">
                <div>
                    <h2 className="text-4xl font-bold text-white">{t('main.online_service')}</h2>
                    <h4 className="text text-[1rem] font-medium text-white">
                        {t('main.declaration')}
                    </h4>
                </div>
                <Button
                    as={Link}
                    href="#"
                    className="h-fit rounded-[2.25rem] bg-white px-14 py-2.5 text-xl font-semibold text-black"
                >
                    {t('main.how_works')}
                </Button>
            </div>
        </div>
    );
}
