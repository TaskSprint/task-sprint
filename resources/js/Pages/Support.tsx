import React, { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Button from '@/Components/Shared/Button';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import Navigation from '@/Components/Layout/Navigation';

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
            <Navigation />

            <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900">
                <form onSubmit={submit} className="w-full max-w-md space-y-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                    <h1 className="text-xl font-semibold text-center text-black dark:text-white">
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
                            className="w-full h-32 px-4 py-2 text-sm border border-gray-300 rounded-xl dark:bg-white dark:text-black focus:ring-2 focus:ring-indigo-500"
                        />
                        <InputError message={errors.message} className="mt-1" />
                    </div>

                    <Button
                        className="w-full bg-indigo-600 text-white hover:bg-indigo-700 rounded-xl py-2 text-sm"
                        disabled={processing}
                    >
                        {t('support.submit')}
                    </Button>
                </form>
            </div>
        </>
    );
}
