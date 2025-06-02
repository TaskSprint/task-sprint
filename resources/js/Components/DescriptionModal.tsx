import { Dialog, Transition } from '@headlessui/react';
import { Textarea } from '@heroui/react';
import { Fragment, useState } from 'react';

interface DescriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (description: string) => void;
}

export default function DescriptionModal({ isOpen, onClose, onSave }: DescriptionModalProps) {
    const [description, setDescription] = useState('');

    const handleSave = () => {
        onSave(description);
        setDescription('');
        onClose();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-30" onClose={onClose}>
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
                            <Dialog.Panel className="bg-surface w-full max-w-md transform overflow-hidden rounded-xl p-6 text-center align-middle shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-medium dark:text-white">
                                    Додатковий опис
                                </Dialog.Title>
                                <div className="mt-4">
                                    <Textarea
                                        rows={4}
                                        variant="bordered"
                                        className="w-full p-2 text-sm"
                                        color="primary"
                                        placeholder="Введіть додаткову інформацію..."
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                <div className="mt-4 flex items-center justify-center gap-20">
                                    <button
                                        onClick={onClose}
                                        className="hover:text-primary cursor-pointer rounded bg-none px-4 py-2 text-sm text-gray-500"
                                    >
                                        Скасувати
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className="text-primary cursor-pointer rounded px-4 py-2 text-sm hover:text-gray-500 dark:hover:text-white"
                                    >
                                        Зберегти
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
