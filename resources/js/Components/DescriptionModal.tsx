import { Dialog, Transition } from '@headlessui/react';
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
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                    Додатковий опис
                                </Dialog.Title>
                                <div className="mt-4">
                  <textarea
                      rows={4}
                      className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring focus:border-blue-500"
                      placeholder="Введіть додаткову інформацію..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                  />
                                </div>

                                <div className="mt-4 flex justify-end gap-2">
                                    <button
                                        onClick={onClose}
                                        className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        Скасувати
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
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
