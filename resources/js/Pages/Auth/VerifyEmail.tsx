import PrimaryButton from '@/Components/PrimaryButton';
import { useRouter } from '@/hooks/useRouter';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React, { FormEventHandler } from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
    const { route } = useRouter();
    const { post, processing } = useForm({});
    const { t } = useLaravelReactI18n();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title={t('auth.verify-email.title')} />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {t('auth.verify-email.content')}
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                    {t('auth.verify-email.resend.sent')}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>
                        {t('auth.verify-email.resend.button')}
                    </PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                    >
                        {t('auth.verify-email.button')}
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
VerifyEmail.layout = (page: React.ReactNode) => page;
