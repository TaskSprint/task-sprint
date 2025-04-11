import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import LanguageSwitcher from '@/Components/Layout/LanguageSwitcher';
import ApplicationLogo from '@/Components/ApplicationLogo';
import SearchBar from '@/Components/Layout/SearchBar';
import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import SolarKeyMinimalisticSquare3Linear from '~icons/solar/key-minimalistic-square-3-linear';
import SolarLogin2Linear from '~icons/solar/login-2-linear';
import ThemeSwitcher from '@/Components/Layout/ThemeSwitcher';
import { Link } from '@inertiajs/react';
import { useRouter } from '@/hooks/useRouter';

export default function Navigation() {
    const { t } = useLaravelReactI18n();
    const { route } = useRouter();

    return (
        <Navbar
            className="h-navbar-height shadow-md"
            height="var(--spacing-navbar-height)"
            classNames={{
                wrapper: 'max-w-full px-[1.875rem] h-full py-[1.125rem]',
            }}
        >
            <NavbarBrand className="h-full py-1">
                <Link
                    href={route('home')}
                    className="font-kreadon inline-flex items-center text-xl font-medium"
                >
                    <ApplicationLogo className="aspect-square h-full w-fit text-white" />
                    TaskSprint
                </Link>
            </NavbarBrand>
            <NavbarContent justify="center" className="flex gap-[3.25rem]">
                <NavbarItem>
                    <Button className="border text-base font-medium" variant="bordered">
                        {t('navigation.create')}
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <SearchBar />
                </NavbarItem>
                <NavbarItem>
                    <LanguageSwitcher />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="gap-8">
                <NavbarItem className="size-6">
                    <ThemeSwitcher />
                </NavbarItem>
                <div className="flex gap-4">
                    <NavbarItem>
                        <Button
                            className="border border-[#131313] text-base font-medium dark:border-white"
                            variant="bordered"
                            as={Link}
                            href={route('login')}
                        >
                            <SolarKeyMinimalisticSquare3Linear />
                            {t('navigation.login')}
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            className="border-0 bg-black text-base font-medium text-white dark:border dark:border-white dark:bg-transparent"
                            variant="bordered"
                            as={Link}
                            href={route('register')}
                        >
                            <SolarLogin2Linear />
                            {t('navigation.register')}
                        </Button>
                    </NavbarItem>
                </div>
            </NavbarContent>
        </Navbar>
    );
}
