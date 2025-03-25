import { router, usePage } from '@inertiajs/react';
import { useRouter } from '@/hooks/useRouter';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function LanguageSwitcher() {
    const { locale } = usePage().props;
    const { localizedRoute } = useRouter();
    const { setLocale } = useLaravelReactI18n();

    const handleLanguageClick = (lang: string) => {
        router.visit(localizedRoute(lang));
        setLocale(lang);
    };

    return (
        <ul className="inline-flex gap-[0.2em]">
            {locale?.available.map((lang) => (
                <li key={lang} className="group">
                    {lang === locale?.current ? (
                        <span className="uppercase text-[#C6C6C6] dark:text-foreground">
                            {lang}
                        </span>
                    ) : (
                        <button
                            onClick={() => handleLanguageClick(lang)}
                            className="cursor-pointer uppercase text-muted transition-colors duration-200 hover:text-muted/75"
                        >
                            {lang}
                        </button>
                    )}
                    <span className="text-muted group-last:hidden"> |</span>
                </li>
            ))}
        </ul>
    );
}
