import ApplicationLogo from '@/Components/ApplicationLogo';
import CreateTaskDropdown from '@/Components/Layout/CreateTaskDropdown';
import LanguageSwitcher from '@/Components/Layout/LanguageSwitcher';
import SearchBar from '@/Components/Layout/SearchBar';
import ThemeSwitcher from '@/Components/Layout/ThemeSwitcher';
import Button from '@/Components/Shared/Button';
import { useRouter } from '@/hooks/useRouter';
import { Avatar, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { usePage } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import SolarBellOutline from '~icons/solar/bell-outline';
import SolarChatDotsLinear from '~icons/solar/chat-dots-linear';
import SolarDocumentLinear from '~icons/solar/document-linear';
import SolarKeyMinimalisticSquare3Linear from '~icons/solar/key-minimalistic-square-3-linear';
import SolarLogin2Linear from '~icons/solar/login-2-linear';
import SolarUserCircleLinear from '~icons/solar/user-circle-linear';

export default function Navigation() {
    const { t } = useLaravelReactI18n();
    const { route } = useRouter();
    const {
        auth: { user },
    } = usePage().props;

    return (
        <Navbar
            className="h-navbar-height w-full shadow-md"
            height="var(--spacing-navbar-height)"
            classNames={{
                wrapper: 'max-w-full px-[1.875rem] h-full py-[1.125rem] overflow-x-clip',
            }}
        >
            <NavbarBrand className="h-full py-1">
                <Link
                    color="foreground"
                    href={route('home')}
                    className="font-kreadon inline-flex items-center text-xl font-medium"
                >
                    <ApplicationLogo className="aspect-square h-full w-fit text-white" />
                    TaskSprint
                </Link>
            </NavbarBrand>
            <NavbarContent justify="center" className="flex gap-[3.25rem]">
                <NavbarItem>
                    <CreateTaskDropdown />
                </NavbarItem>
                <NavbarItem className="h-full max-h-full">
                    <SearchBar />
                </NavbarItem>
                <NavbarItem>
                    <LanguageSwitcher />
                </NavbarItem>
                <NavbarItem className="size-6">
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className={user ? 'gap-3.5' : 'gap-7'}>
                {user ? (
                    <>
                        <div className="flex gap-2">
                            <NavbarItem>
                                <Button
                                    variant="light"
                                    className="aspect-square size-11 h-full min-w-fit rounded-full p-0"
                                >
                                    <SolarChatDotsLinear className="size-8" />
                                </Button>
                            </NavbarItem>
                            <NavbarItem>
                                <Button
                                    variant="light"
                                    as={Link}
                                    href={route('profile.in-progress')}
                                    data-transition="user"
                                    className="aspect-square size-11 h-full min-w-fit rounded-full p-0"
                                >
                                    <SolarDocumentLinear className="size-8" />
                                </Button>
                            </NavbarItem>
                            <NavbarItem>
                                <Button
                                    variant="light"
                                    className="aspect-square size-11 h-full min-w-fit rounded-full p-0"
                                >
                                    <SolarBellOutline className="size-8" />
                                </Button>
                            </NavbarItem>
                        </div>
                        <NavbarItem className="flex">
                            <Button
                                variant="light"
                                as={Link}
                                data-transition="user"
                                href={route('profile.general-info')}
                                className="aspect-square size-11 h-full min-w-fit rounded-full p-0"
                            >
                                <Avatar
                                    className="size-11 bg-transparent"
                                    src={user.avatar}
                                    fallback={<SolarUserCircleLinear className="size-11" />}
                                />
                            </Button>
                        </NavbarItem>
                    </>
                ) : (
                    <>
                        <NavbarItem>
                            <Button
                                variant="bordered"
                                className="border-foreground dark:border-primary border text-base font-medium"
                                as={Link}
                                href={route('login')}
                            >
                                <SolarKeyMinimalisticSquare3Linear />
                                {t('navigation.login')}
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button
                                className="dark:bg-primary bg-black text-base font-medium text-white dark:text-black"
                                as={Link}
                                href={route('register')}
                            >
                                <SolarLogin2Linear />
                                {t('navigation.register')}
                            </Button>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
        </Navbar>
    );
}
