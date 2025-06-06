import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useRouter } from '@/hooks/useRouter';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React, { FormEventHandler } from 'react';

export default function ConfirmPassword() {
    const { route } = useRouter();
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });
    const { t } = useLaravelReactI18n();

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title={t('auth.confirm-password.title')} />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {t('auth.confirm-password.content')}
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value={t('auth.confirm-password.password')} />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        {t('auth.confirm-password.button')}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
ConfirmPassword.layout = (page: React.ReactNode) => page;
