import Button from "@/Components/Shared/Button";
import {useLaravelReactI18n} from "laravel-react-i18n";
const { t } = useLaravelReactI18n();

export default function App() {
    return (
        <div className="flex p-[4.5rem] gap-6 items-center justify-center flex-col">
            <h2 className="text-[2rem] font-semibold">{t('welcome.any_questions')}</h2>
            <Button className="text-white text-[1.25rem] font-semibold" color="primary">
                {t('welcome.support')}
            </Button>
        </div>
    );
}
