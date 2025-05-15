import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Button, Input } from '@heroui/react';

export default function SearchBar() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex">
            <Input
                type="text"
                className="w-[15.5rem]"
                classNames={{
                    inputWrapper:
                        'px-4 py-2 group-data-[focus=true]:bg-foreground/10 rounded-l-[1.25rem] rounded-r-none border-1 border-black bg-white dark:bg-black border-[#131313] dark:border-white',
                }}
                placeholder={t('navigation.search')}
            />
            <Button className="min-w-fit rounded-l-none rounded-r-[1.25rem] bg-[#00CCFF] px-6 py-2.5 text-[1rem] font-medium text-[#131313] !transition">
                {t('navigation.find')}
            </Button>
        </div>
    );
}
