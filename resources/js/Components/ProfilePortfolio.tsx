import { useLaravelReactI18n } from 'laravel-react-i18n';
import {Image} from "@heroui/image";
import { Chip } from '@heroui/react';
import React from "react";


export default function ProfilePortfolio() {
    const { t } = useLaravelReactI18n();
    const folders = [
        { id: 1, name: "UI-UX" },
        { id: 2, name: "web interface" },
        { id: 3, name: "javascript" },
    ];



    return (
        <div className="flex w-[44.625rem] min-h-[26.5625rem] gap-6 p-4">
            <div className="flex flex-col items-start w-[42.625rem] min-h-[17.0625rem]  p-4 gap-8">
                <div className="flex flex-col w-[40.625rem] h-[11rem] gap-6">

                   <h2 className="flex flex-col text-start text-[1.5rem] font-bold dark:text-white">{t('profile-portfolio.portfolio-title')}</h2>

                    <div className="flex flex-row gap-6">
                        <Image
                            isZoomed
                            alt="HeroUI Fruit Image with Zoom"
                            src="https://heroui.com/images/fruit-1.jpeg"
                            className="w-[19.5625rem] h-[11rem] cursor-pointer"

                       />
                        <Image
                            isZoomed
                            alt="HeroUI Fruit Image with Zoom"
                            src="https://heroui.com/images/fruit-1.jpeg"
                            className="w-[19.5625rem] h-[11rem] cursor-pointer"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="flex flex-row text-start text-[1.5rem] font-bold dark:text-white">{t('profile-portfolio.portfolio-folder')}</h2>

                        <div className="flex flex-row h-[3.1875rem] gap-6 ">
                            {folders.map((folder) => (
                                <Chip
                                    key={folder.id}
                                    className="dark:!color-white cursor-pointer border-1 border-gray-500 dark:!border-gray-400"
                                    variant="bordered"
                                    size="lg"
                                    radius="sm"
                                    id={`folder-${folder.id}`}
                                >
                                    {folder.name}
                                </Chip>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
       </div>
      );
}
