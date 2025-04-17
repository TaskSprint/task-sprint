import Button from '@/Components/Shared/Button';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { FormEventHandler } from 'react';
import { useRouter } from '@/hooks/useRouter';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Input } from '@heroui/input';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { route } = useRouter();
    const { t } = useLaravelReactI18n();

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
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

            <div className="bg-surface mx-auto grid h-full w-full max-w-[60rem] grid-cols-2">
                {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

                <div className="flex flex-col items-center justify-center bg-[#F1F1F1] dark:bg-[#313131]">
                    <form onSubmit={submit} className="flex max-w-64 flex-col items-start gap-10">
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
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            variant="bordered"
                            classNames={{
                                inputWrapper:
                                    'rounded-[1rem] px-5 py-1.5 h-fit min-h-fit border border-[#2D2D2D] text-[#606060] bg-white opacity-75 text-xs hover:opacity-90 group-data-[focus=true]:opacity-100 transition',
                            }}
                            placeholder={t('auth.login.password')}
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                            isRequired
                            isInvalid={errors.password ? true : undefined}
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
                                <svg
                                    className="aspect-square h-full w-fit"
                                    viewBox="0 0 36 37"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M33.6598 18.8597C33.6598 17.8063 33.5665 16.8063 33.4065 15.833H18.3398V21.8463H26.9665C26.5798 23.8197 25.4465 25.4863 23.7665 26.6197V30.6197H28.9132C31.9265 27.833 33.6598 23.7263 33.6598 18.8597Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M18.3401 34.5004C22.6601 34.5004 26.2734 33.0604 28.9134 30.6204L23.7667 26.6204C22.3267 27.5804 20.5001 28.167 18.3401 28.167C14.1667 28.167 10.6334 25.3537 9.36673 21.5537H4.06006V25.6737C6.68673 30.9004 12.0867 34.5004 18.3401 34.5004Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M9.36651 21.5538C9.03318 20.5938 8.85984 19.5671 8.85984 18.5005C8.85984 17.4338 9.04651 16.4071 9.36651 15.4471V11.3271H4.05984C2.96651 13.4871 2.33984 15.9138 2.33984 18.5005C2.33984 21.0871 2.96651 23.5138 4.05984 25.6738L9.36651 21.5538Z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M18.3401 8.83333C20.7001 8.83333 22.8067 9.64667 24.4734 11.2333L29.0334 6.67334C26.2734 4.08667 22.6601 2.5 18.3401 2.5C12.0867 2.5 6.68673 6.1 4.06006 11.3267L9.36673 15.4467C10.6334 11.6467 14.1667 8.83333 18.3401 8.83333Z"
                                        fill="#EA4335"
                                    />
                                </svg>
                            </Link>

                            <Link href="#">
                                <svg
                                    className="aspect-square h-full w-fit"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 48 48"
                                >
                                    <path
                                        fill="#039be5"
                                        d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                                    ></path>
                                    <path
                                        fill="#fff"
                                        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
