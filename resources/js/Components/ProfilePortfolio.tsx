import { useLaravelReactI18n } from 'laravel-react-i18n';
import {Image} from "@heroui/image";
import { Chip } from '@heroui/react';


export default function ProfilePortfolio() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex flex-col w-[44.625rem] min-h-[28.5625rem] items-start justify-start gap-6 p-4">
            <div className="flex flex-col w-[42.625rem] min-h-[17.0625rem] items-start justify-start p-4 gap-8">
                <h2 className="text-start text-[1.5rem] font-bold dark:text-white">{t('profile-portfolio.portfolio-title')}</h2>
                    <div className="flex flex-row w-[40.625rem] h-[11rem] items-center gap-6">

                        <Image
                            isZoomed
                            alt="HeroUI Fruit Image with Zoom"
                            src="https://heroui.com/images/fruit-1.jpeg"
                            className="w-[19.5625rem] h-[11rem]"
                        />
                        <Image
                            isZoomed
                            alt="HeroUI Fruit Image with Zoom"
                            src="https://heroui.com/images/fruit-1.jpeg"
                            className="w-[19.5625rem] h-[11rem]"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-center text-[1rem] font-semibold">{t('profile-portfolio.portfolio-folder')}</h2>

                        <div className="flex gap-4 size-7">
                            <Chip
                                content={}
                                color="primary"
                                variant="bordered"
                                size="lg"
                                radius="sm"

                                >
                                <span className="text-sm"></span>
                                UI-UX
                            </Chip>
                            <Chip
                                color="primary"
                                variant="bordered"
                                size="lg"
                                radius="sm"
                            <img src="path/to/your/image.bmp" alt="Описание картинки" />

                            >

                                web interface
                            </Chip>
                        </div>
                    </div>
            </div>
        </div>
    );
}
