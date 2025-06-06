import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import MaterialSymbolsArrowForwardIosRounded from '~icons/material-symbols/arrow-forward-ios-rounded';
import MdiFacebook from '~icons/mdi/facebook';
import MdiInstagram from '~icons/mdi/instagram';
import MdiTwitter from '~icons/mdi/twitter';

export function Footer() {
    const { t } = useLaravelReactI18n();

    return (
        <footer className="shadow-footer flex w-full flex-col items-center overflow-x-auto">
            <div className="flex w-full max-w-[90rem] flex-wrap gap-12 px-6 py-[3.25rem] sm:gap-28 sm:px-[6.25rem]">
                <div className="flex w-[26.25rem] flex-col gap-4">
                    <div className="inline-flex h-9 items-center gap-1">
                        <ApplicationLogo
                            isFullSize
                            className="aspect-square h-full w-fit text-white"
                        />
                        <p className="font-kreadon text-xl font-medium">TaskSprint</p>
                    </div>
                    <p className="text-lg font-normal">
                        {t('footer.title')}:{' '}
                        <a className="font-black">{t('footer.spring')}, 2025</a>
                        <br />
                        <br />
                        {t('footer.academy')} <a className="font-black">IT Step KYIV</a>
                        <br />
                        <br />
                    </p>
                    <ul className="flex h-9 gap-6">
                        <li className="flex h-full">
                            <Link
                                color="foreground"
                                className="hover:text-foreground/75 active:text-foreground/50 transition active:scale-95"
                                href="#"
                            >
                                <MdiInstagram className="aspect-square h-full w-fit" />
                            </Link>
                        </li>
                        <li className="flex h-full">
                            <Link
                                color="foreground"
                                className="hover:text-foreground/75 active:text-foreground/50 transition active:scale-95"
                                href="#"
                            >
                                <MdiFacebook className="aspect-square h-full w-fit" />
                            </Link>
                        </li>
                        <li className="flex h-full">
                            <Link
                                color="foreground"
                                className="hover:text-foreground/75 active:text-foreground/50 transition active:scale-95"
                                href="#"
                            >
                                <MdiTwitter className="aspect-square h-full w-fit" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold">{t('footer.about')}</h3>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.about')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.contacts')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.mobile')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.partners')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold">{t('footer.how_it_works')}</h3>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.service')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.specialist')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.find')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.user-page')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold">{t('footer.other')}</h3>
                        <ul className="flex flex-col gap-5">
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.support')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.offer')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.q-a')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    color="foreground"
                                    className="hover:text-foreground/75 active:text-foreground/50 inline-flex items-center gap-2.5 py-2.5 font-semibold transition active:scale-95"
                                    href="#"
                                >
                                    <MaterialSymbolsArrowForwardIosRounded className="text-muted h-4" />
                                    {t('footer.all')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-foreground text-background flex w-full justify-center">
                <div className="w-full max-w-[90rem] px-6 py-2.5 sm:px-[6.25rem]">
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}
