import React, { FormEventHandler } from 'react';
import { Head, useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Support() {
    const { t } = useLaravelReactI18n();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('support.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <Head title={t('support.title')} />

            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
                <form
                    onSubmit={submit}
                    className="w-full max-w-md space-y-6 rounded-2xl bg-white p-6 shadow-md dark:bg-gray-800"
                >
                    <h1 className="text-center text-xl font-semibold text-black dark:text-white">
                        {t('support.contact_us')}
                    </h1>

                    <div>
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="w-full"
                            placeholder={t('support.name')}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-1" />
                    </div>

                    <div>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="w-full"
                            placeholder={t('support.email')}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-1" />
                    </div>

                    <div>
                        <textarea
                            id="message"
                            name="message"
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            placeholder={t('support.message')}
                            className="h-32 w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 dark:bg-white dark:text-black"
                        />
                        <InputError message={errors.message} className="mt-1" />
                    </div>

                    <Button
                        className="w-full rounded-xl bg-indigo-600 py-2 text-sm text-white hover:bg-indigo-700"
                        disabled={processing}
                    >
                        {t('support.submit')}
                    </Button>
                </form>
            </div>
        </>
    );
}
