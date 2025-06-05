import { Image } from '@heroui/image';
import { Chip } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function ProfilePortfolio() {
    const { t } = useLaravelReactI18n();
    const folders = [
        { id: 1, name: 'UI-UX' },
        { id: 2, name: 'web interface' },
        { id: 3, name: 'javascript' },
    ];

    return (
        <div className="flex gap-6 p-4">
            <div className="flex flex-col items-start gap-8 p-4">
                <div className="flex flex-col gap-6">
                    <h2 className="flex flex-col text-start text-[1.5rem] font-bold dark:text-white">
                        {t('profile-portfolio.portfolio-title')}
                    </h2>

                    <div className="flex flex-wrap gap-6">
                        <Image
                            isZoomed
                            alt="HeroUI Fruit Image with Zoom"
                            src="https://heroui.com/images/fruit-1.jpeg"
                            className="h-[11rem] w-[19.5625rem] cursor-pointer !transition"
                        />
                        <Image
                            isZoomed
                            alt="HeroUI Fruit Image with Zoom"
                            src="https://heroui.com/images/fruit-1.jpeg"
                            className="h-[11rem] w-[19.5625rem] cursor-pointer !transition"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="text-[1.5rem] font-bold">
                            {t('profile-portfolio.portfolio-folder')}
                        </h2>

                        <div className="flex flex-wrap gap-6">
                            {folders.map((folder) => (
                                <Chip
                                    key={folder.id}
                                    className="dark:!color-white border-muted cursor-pointer border-1"
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
