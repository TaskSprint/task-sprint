import { Head, useForm } from '@inertiajs/react';
import React, { FormEventHandler } from 'react';
import { useRouter } from '@/hooks/useRouter';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import Button from '@/Components/Shared/Button';
import LogosGoogleIcon from '~icons/logos/google-icon';
import LogosFacebook from '~icons/logos/facebook';
import { Input, Link } from '@heroui/react';

export default function Register() {
    const { route } = useRouter();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        city: '',
        password: '',
        password_confirmation: '',
    });
    const { t } = useLaravelReactI18n();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title={t('auth.register.title')} />

            <div className="bg-surface/50 mx-auto flex h-full w-full max-w-[60rem] justify-center backdrop-blur">
                <div className="flex h-full w-full max-w-[30rem] flex-col items-center justify-center bg-[#F1F1F1] dark:bg-[#313131]">
                    <form onSubmit={submit} className="flex max-w-64 flex-col items-start gap-5">
                        <h2 className="text-[1.25rem] leading-[1.5rem] text-black dark:text-white">
                            {t('auth.register.title')}
                        </h2>

                        <Input
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            variant="bordered"
                            classNames={{
                                inputWrapper:
                                    'rounded-[1rem] px-5 py-1.5 h-fit min-h-fit border border-[#2D2D2D] text-[#606060] bg-white opacity-75 text-xs hover:opacity-90 group-data-[focus=true]:opacity-100 transition',
                            }}
                            placeholder={t('auth.register.name')}
                            autoComplete="name"
                            autoFocus
                            onChange={(e) => setData('name', e.target.value)}
                            isRequired
                            isInvalid={errors.name ? true : undefined}
                            errorMessage={errors.name}
                        />

                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            variant="bordered"
                            classNames={{
                                inputWrapper:
                                    'rounded-[1rem] px-5 py-1.5 h-fit min-h-fit border border-[#2D2D2D] text-[#606060] bg-white opacity-75 text-xs hover:opacity-90 group-data-[focus=true]:opacity-100 transition',
                            }}
                            placeholder={t('auth.login.email')}
                            autoComplete="username"
                            autoFocus
                            onChange={(e) => setData('email', e.target.value)}
                            isRequired
                            isInvalid={errors.email ? true : undefined}
                            errorMessage={errors.email}
                        />

                        <Input
                            id="phone"
                            type="tel"
                            name="phone"
                            inputMode="tel"
                            value={data.phone}
                            variant="bordered"
                            classNames={{
                                inputWrapper:
                                    'rounded-[1rem] px-5 py-1.5 h-fit min-h-fit border border-[#2D2D2D] text-[#606060] bg-white opacity-75 text-xs hover:opacity-90 group-data-[focus=true]:opacity-100 transition',
                            }}
                            placeholder={t('auth.register.phone')}
                            autoComplete="current-phone"
                            onChange={(e) => setData('phone', e.target.value)}
                            isRequired
                            isInvalid={errors.phone ? true : undefined}
                            errorMessage={errors.phone}
                        />

                        <Input
                            id="city"
                            type="text"
                            name="city"
                            value={data.city}
                            variant="bordered"
                            classNames={{
                                inputWrapper:
                                    'rounded-[1rem] px-5 py-1.5 h-fit min-h-fit border border-[#2D2D2D] text-[#606060] bg-white opacity-75 text-xs hover:opacity-90 group-data-[focus=true]:opacity-100 transition',
                            }}
                            placeholder={t('auth.register.city')}
                            onChange={(e) => setData('city', e.target.value)}
                            isRequired
                            isInvalid={errors.city ? true : undefined}
                            errorMessage={errors.city}
                        />

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            variant="bordered"
                            classNames={{
                                inputWrapper:
                                    'rounded-[1rem] px-5 py-1.5 h-fit min-h-fit border border-[#2D2D2D] text-[#606060] bg-white opacity-75 text-xs hover:opacity-90 group-data-[focus=true]:opacity-100 transition',
                            }}
                            placeholder={t('auth.register.password')}
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                            isRequired
                            isInvalid={errors.password ? true : undefined}
                            errorMessage={errors.password}
                        />

                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            variant="bordered"
                            classNames={{
                                inputWrapper:
                                    'rounded-[1rem] px-5 py-1.5 h-fit min-h-fit border border-[#2D2D2D] text-[#606060] bg-white opacity-75 text-xs hover:opacity-90 group-data-[focus=true]:opacity-100 transition',
                            }}
                            placeholder={t('auth.register.confirm_password')}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            isRequired
                            isInvalid={errors.password_confirmation ? true : undefined}
                            errorMessage={errors.password_confirmation}
                        />

                        <div className="flex w-full flex-col items-start justify-center gap-1">
                            <Button
                                type="submit"
                                className="flex h-[1.875rem] w-full flex-row items-center justify-center gap-[0.625rem] rounded-[0.9375rem] bg-[#4E4E4E] px-[1.25rem] text-[0.75rem] text-white"
                                disabled={processing}
                            >
                                {t('auth.register.button')}
                            </Button>

                            <Link
                                href={route('login')}
                                className="text-[0.75rem] text-black dark:text-white"
                            >
                                {t('auth.register.already_registered')}
                            </Link>
                        </div>

                        <div className="ml-auto flex h-9 w-full justify-end gap-2.5 overflow-hidden">
                            <Link href="#">
                                <LogosGoogleIcon className="aspect-square h-full w-fit" />
                            </Link>

                            <Link href="#">
                                <LogosFacebook className="aspect-square h-full w-fit" />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
