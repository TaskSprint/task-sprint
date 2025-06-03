import { useRouter } from '@/hooks/useRouter';
import { router, usePage } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function LanguageSwitcher() {
    const { locale } = usePage().props;
    const { localizedRoute } = useRouter();
    const { setLocale } = useLaravelReactI18n();

    const handleLanguageClick = (lang: string) => {
        const newRoute = localizedRoute(lang);
        if (newRoute) {
            router.visit(newRoute, {
                preserveScroll: true,
                preserveState: true,
            });
        }
        setLocale(lang);
    };

    return (
        <ul className="inline-flex gap-[0.2em]">
            {locale?.available.map((lang) => (
                <li key={lang} className="group">
                    {lang === locale?.current ? (
                        <span className="dark:text-foreground uppercase">{lang}</span>
                    ) : (
                        <button
                            onClick={() => handleLanguageClick(lang)}
                            className="cursor-pointer text-[#717171] uppercase transition-colors duration-200 hover:text-[#717171]/75"
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
