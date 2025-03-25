import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';

export default function SearchBar() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="flex">
            <Input
                type="text"
                className="w-[15.5rem]"
                classNames={{
                    inputWrapper:
                        'px-4 py-2 group-data-[focus=true]:bg-foreground/10 rounded-l-[1.25rem] rounded-r-none border border-black dark:border-white',
                }}
                variant="bordered"
                placeholder={t('navigation.search')}
            />
            <Button className="min-w-fit rounded-l-none rounded-r-[1.25rem] bg-[#C6C6C6] px-6 py-2.5 text-[#131313] dark:bg-white">
                {t('navigation.find')}
            </Button>
        </div>
    );
}
