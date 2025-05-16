import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import {Alert} from "@heroui/react";

interface UploadFileModalProps {
    isOpen: boolean;
    onClose: () => void;
    onUploadSuccess?: (filename: string) => void;
}

export default function UploadFileModal({ isOpen, onClose, onUploadSuccess }: UploadFileModalProps) {
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
    }

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
                    <div className="flex items-center justify-center min-h-full p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-150"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="flex flex-col gap-3 w-full max-w-md transform overflow-hidden rounded-xl bg-surface p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-medium dark:text-white text-center">
                                    {t('task-creation.add-title')}
                                </Dialog.Title>
                                <div className="mt-4 space-y-4">
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 bg-none dark:hover:!text-white text-[#00CCFF] dark:text-[#C7C7C7] cursor-pointer  disabled:opacity-50"
                                    />
                                    <div className="flex gap-2 items-center justify-center">
                                        <button
                                            onClick={onClose}
                                            className="px-4 py-2 text-sm dark:text-[#C7C7C7] cursor-pointer !bg-none rounded hover:!text-[#00CCFF]"
                                        >
                                            {t('task-creation.add-abort')}
                                        </button>
                                        <button
                                            onClick={handleUpload}
                                            disabled={loading}
                                            className="px-4 py-2 text-sm !bg-none dark:text-[#C7C7C7] cursor-pointer rounded hover:!text-[#00CCFF] disabled:opacity-50"
                                        >
                                            {t( 'task-creation.add-download')}
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

