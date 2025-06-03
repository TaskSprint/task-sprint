import { Dialog, Transition } from '@headlessui/react';
import { Textarea } from '@heroui/react';
import { Fragment, useEffect, useState } from 'react';
import MaterialSymbolsDeleteOutline from '~icons/material-symbols/delete-outline';
interface DescriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (description: string | string[]) => void;
    title?: string;
    subtitle?: string;
    initialValue?: string;
    placeholder?: string;
    confirmText?: string;
    textInput?: boolean;
    submitDanger?: boolean;

    initialList?: string[];
}

export default function DescriptionModal({
    isOpen,
    onClose,
    onSave,
    title,
    subtitle,
    initialValue = '',
    placeholder = '',
    confirmText = 'Зберегти',
    textInput = true,
    submitDanger = false,
    initialList,
}: DescriptionModalProps) {
    const [description, setDescription] = useState(initialValue);
    const [newItem, setNewItem] = useState('');
    const [list, setList] = useState<string[]>([]);
    const [confirmDeleteIndex, setConfirmDeleteIndex] = useState<number | null>(null);

    useEffect(() => {
        setDescription(initialValue);
        if (initialList) {
            setList(initialList);
        }
    }, [initialValue, initialList]);

    const handleSave = () => {
        try {
            if (initialList) {
                onSave(list);
            } else {
                onSave(description.trim());
                setDescription('');
            }
        } finally {
            onClose();
        }
    };

    const handleAdd = () => {
        const trimmed = newItem.trim();
        if (trimmed.length > 0) {
            setList((prev) => [...prev, trimmed]);
            setNewItem('');
        }
    };

    const handleDelete = (index: number) => {
        setList((prev) => prev.filter((_, i) => i !== index));
        setConfirmDeleteIndex(null);
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-30"
                onClose={() => {
                    if (confirmDeleteIndex === null) {
                        onClose();
                    }
                }}
            >
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
                            <Dialog.Panel className="bg-surface flex w-full max-w-md transform flex-col gap-[1rem] overflow-hidden rounded-xl p-6 text-center align-middle shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-medium dark:text-white">
                                    {title}
                                </Dialog.Title>

                                {subtitle && (
                                    <p className="text-muted-foreground mt-1 text-sm">{subtitle}</p>
                                )}

                                {textInput ? (
                                    <Textarea
                                        rows={2}
                                        variant="bordered"
                                        className="w-full p-2 text-sm"
                                        color="primary"
                                        placeholder={placeholder}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                ) : initialList ? (
                                    <div className="flex flex-col gap-2">
                                        {list.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex w-full justify-between rounded p-1 text-start"
                                            >
                                                <div>{item}</div>
                                                <button
                                                    onClick={() => setConfirmDeleteIndex(index)}
                                                    className="text-danger text-sm"
                                                >
                                                    <MaterialSymbolsDeleteOutline className="h-[1.5rem] w-[1.5rem] min-w-[1.5rem]" />
                                                </button>
                                            </div>
                                        ))}

                                        <div className="mt-2 flex gap-2">
                                            <input
                                                className="w-full rounded border px-3 py-1 text-sm"
                                                value={newItem}
                                                onChange={(e) => setNewItem(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                                                placeholder={placeholder}
                                            />
                                            <button
                                                onClick={handleAdd}
                                                className="text-primary text-sm"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ) : null}

                                <div className="mt-4 flex items-center justify-center gap-10">
                                    {textInput ? (
                                        <button
                                            onClick={onClose}
                                            className="hover:text-primary rounded px-4 py-2 text-sm text-gray-500"
                                        >
                                            Скасувати
                                        </button>
                                    ) : null}

                                    {submitDanger ? (
                                        <button
                                            onClick={handleSave}
                                            className="bg-danger rounded-full px-4 py-2 text-sm text-white"
                                        >
                                            {confirmText}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSave}
                                            className="text-primary rounded px-4 py-2 text-sm hover:text-gray-500"
                                        >
                                            {confirmText}
                                        </button>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>

                {confirmDeleteIndex !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="w-[320px] space-y-4 rounded-xl bg-white p-6 text-center dark:bg-gray-800">
                            <h2 className="text-lg font-semibold">Видалити запис?</h2>
                            <p className="text-muted-foreground text-sm">
                                Ви впевнені, що хочете видалити цей запис?
                            </p>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => handleDelete(confirmDeleteIndex)}
                                    className="bg-danger rounded px-4 py-2 text-white"
                                >
                                    Так, видалити
                                </button>
                                <button
                                    onClick={() => setConfirmDeleteIndex(null)}
                                    className="rounded bg-gray-200 px-4 py-2 text-gray-600"
                                >
                                    Скасувати
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Dialog>
        </Transition>
    );
}
