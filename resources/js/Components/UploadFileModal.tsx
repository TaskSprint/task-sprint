import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Alert } from '@heroui/react';

interface UploadFileModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUploadSuccess?: (filename: string) => void;
}

export default function UploadFileModal({
    isOpen,
    onClose,
    onUploadSuccess,
}: UploadFileModalProps) {
    const { t } = useLaravelReactI18n();
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Select file');
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5173/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                if (onUploadSuccess) onUploadSuccess(data.filename);
                onClose();
            } else {
                alert('Error downloading file');
            }
        } catch (err) {
            console.error(err);
            alert('Server error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-20" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-150"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="bg-surface flex w-full max-w-md transform flex-col gap-3 overflow-hidden rounded-xl p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title className="text-center text-lg font-medium dark:text-white">
                                    {t('task-creation.add-title')}
                                </Dialog.Title>
                                <div className="mt-4 space-y-4">
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="w-full cursor-pointer bg-none text-sm file:mr-4 file:rounded file:border-0 file:px-4 file:py-2 hover:!text-gray-500 disabled:opacity-50 dark:text-[#C7C7C7] dark:hover:!text-white"
                                    />
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={onClose}
                                            className="cursor-pointer rounded !bg-none px-4 py-2 text-sm hover:!text-[#00CCFF] dark:text-[#C7C7C7]"
                                        >
                                            {t('task-creation.add-abort')}
                                        </button>
                                        <button
                                            onClick={handleUpload}
                                            disabled={loading}
                                            className="cursor-pointer rounded !bg-none px-4 py-2 text-sm hover:!text-[#00CCFF] disabled:opacity-50 dark:text-[#C7C7C7]"
                                        >
                                            {t('task-creation.add-upload')}
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
