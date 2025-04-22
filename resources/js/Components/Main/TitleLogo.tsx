import { useLaravelReactI18n } from 'laravel-react-i18n';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Button from '@/Components/Shared/Button';
import { Link } from '@heroui/link';
import {Image} from "@heroui/image";


export function TitleLogo() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-col relative w-full min-h-[26rem] justify-between gap-6 px-14 py-12
            ">
            <Image
                alt="Title"
                classNames={{wrapper: "size-full absolute -z-1 inset-0"}}
                src="/images/title-logo.png"
                className="size-full object-cover"
                radius="none"
                width="100%"
            />
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


/**
 *
 * import {Image} from "@heroui/react";
 *
 * export default function App() {
 *   return (
 *     <Image
 *       alt="HeroUI hero Image"
 *       src="https://heroui.com/images/hero-card-complete.jpeg"
 *       width={300}
 *     />
 *
 *
 *
 *
 * /**/
