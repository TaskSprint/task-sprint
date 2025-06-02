import Button from '@/Components/Shared/Button';
import Input from '@/Components/Shared/Input';
import { useRouter } from '@/hooks/useRouter';
import { Link } from '@heroui/react';
import { Head, useForm } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { FormEventHandler } from 'react';
import LogosFacebook from '~icons/logos/facebook';
import LogosGoogleIcon from '~icons/logos/google-icon';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { route } = useRouter();
    const { t } = useLaravelReactI18n();

    const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
        email: '',
        password: '',
        remember: true,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title={t('auth.login.title_page')} />

            <div className="bg-surface/50 mx-auto grid h-full w-full max-w-[60rem] grid-cols-2 backdrop-blur">
                <div className="flex flex-col items-center justify-center bg-[#F1F1F1] dark:bg-[#313131]">
                    <form onSubmit={submit} className="flex max-w-64 flex-col items-start gap-5">
                        {status && (
                            <div className="text-sm font-medium text-green-600">{status}</div>
                        )}
                        <h2 className="text-[1.25rem] leading-[1.5rem] text-black dark:text-white">
                            {t('auth.login.title')}
                        </h2>

                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            variant="bordered"
                            classNames={{
                                input: 'autofill-color-[#606060] autofill:caret-[#606060]',
                                inputWrapper:
                                    'rounded-[1rem] px-5 py-1.5 h-fit min-h-fit border border-[#2D2D2D] text-black bg-white opacity-75 text-xs hover:opacity-90 group-data-[focus=true]:opacity-100 transition',
                            }}
                            placeholder={t('auth.login.email')}
                            autoComplete="username"
                            autoFocus
                            onClearError={clearErrors}
                            onChange={(e) => setData('email', e.target.value)}
                            isRequired
                            errorMessage={errors.email}
                        />

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            variant="bordered"
                            classNames={{
                                input: 'autofill-color-[#606060] autofill:caret-[#606060]',
                                inputWrapper:
                                    'rounded-[1rem] px-5 py-1.5 h-fit min-h-fit border border-[#2D2D2D] text-[#606060] bg-white opacity-75 text-xs hover:opacity-90 group-data-[focus=true]:opacity-100 transition',
                            }}
                            placeholder={t('auth.login.password')}
                            autoComplete="current-password"
                            onClearError={clearErrors}
                            onChange={(e) => setData('password', e.target.value)}
                            isRequired
                            errorMessage={errors.password}
                        />

                        <div className="flex w-full flex-col items-start justify-center gap-1">
                            <Button
                                type="submit"
                                className="flex h-[1.875rem] w-full flex-row items-center justify-center gap-[0.625rem] rounded-[0.9375rem] bg-[#4E4E4E] px-[1.25rem] text-[0.75rem] text-white"
                                disabled={processing}
                            >
                                {t('auth.login.button')}
                            </Button>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-[0.75rem] text-black dark:text-white"
                                >
                                    {t('auth.login.forgot_password')}
                                </Link>
                            )}
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
                <div className="flex w-full max-w-sm flex-col justify-center">
                    <div className="flex flex-col gap-10 px-4 pt-10 pb-20">
                        <h3 className="text-xl font-medium whitespace-pre-line">
                            {t('auth.login.no-account.title')}
                        </h3>
                        <p className="text-sm font-medium">
                            {t('auth.login.no-account.description')}
                        </p>
                        <Button
                            as={Link}
                            href={route('register')}
                            color="primary"
                            className="h-fit w-fit rounded-full px-11 py-4 text-sm text-black"
                        >
                            {t('auth.register.button')}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
