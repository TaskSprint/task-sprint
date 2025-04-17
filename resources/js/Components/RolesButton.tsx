import Button from "@/Components/Shared/Button";
import {Link} from '@heroui/link';
import { useLaravelReactI18n } from 'laravel-react-i18n';


export default function Roles() {
    const { t } = useLaravelReactI18n();
    return (
        <div className="flex w-[959px] h-[220px] py-[11px] ml-[20px] mt-[20px] gap-[36px] items-center justify-center flex-col">
            <h2 className="text-[2rem] font-semibold items-center">{t('welcome.roles_question')}</h2>
            <div className="flex justify-center w-[640px] h-[69px] gap-8">
                    <Button as={Link} href="#" className="text-white text-[1.25rem] font-semibold" color="primary">
                        {t('welcome.specialists')}
                    </Button>
                    <Button as={Link} href="#" className="text-white text-[1.25rem] font-semibold" color="primary">
                        {t('welcome.orders')}
                    </Button>
            </div>
        </div>
    );
}
