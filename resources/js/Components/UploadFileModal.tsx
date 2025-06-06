import Button from '@/Components/Shared/Button';
import { cn, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React, { ReactNode, useEffect, useState } from 'react';
import { useUncontrolledProp } from 'uncontrollable';

interface UploadFileModalProps<T extends string | undefined = undefined> {
    name: T;
    errorMessage?: ReactNode;
    onClearError?: (name: T) => void;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    value?: File[] | null;
    onSave?: (files: File[] | null) => void | Promise<unknown>;
}

export default function UploadFileModal<T extends string | undefined = undefined>({
    name,
    errorMessage,
    onClearError,
    open,
    onOpenChange,
    value,
    onSave,
}: Readonly<UploadFileModalProps<T>>) {
    const { t } = useLaravelReactI18n();
    const [controlledValue, setControlledValue] = useState(value ?? null);
    const [controlledOpen, setControlledOpen] = useUncontrolledProp(open, false, onOpenChange);
    const ref = React.useRef<HTMLInputElement>(null);

    const handleSave = async () => {
        try {
            const result = onSave?.(controlledValue);
            if (result instanceof Promise) {
                await result;
            }
            setControlledOpen(false);
        } catch (error) {
            console.error('Error saving file:', error);
        }
    };

    const handleClose = () => {
        setControlledOpen(false);
        setControlledValue(value ?? null);
    };

    useEffect(() => {
        if (value !== undefined) {
            setControlledValue(value);
        }
    }, [value]);

    useEffect(() => {
        if (ref.current) {
            if (controlledValue) {
                const dt = new DataTransfer();
                controlledValue.forEach((file) => dt.items.add(file));
                ref.current.files = dt.files;
            } else {
                ref.current.value = '';
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [controlledValue, ref.current]);

    return (
        <Modal backdrop="blur" isOpen={controlledOpen} onClose={handleClose}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            {t('task-creation.add-title')}
                        </ModalHeader>
                        <ModalBody>
                            <div
                                className={cn(
                                    'tap-highlight-transparent bg-default-100 hover:bg-default-200 [&_input]:focus:bg-default-100 rounded-medium transition-background [&_input]:focus-visible:ring-focus [&_input]:focus-visible:ring-offset-background relative inline-flex h-10 min-h-10 w-full cursor-pointer flex-row items-center gap-3 px-3 shadow-xs outline-hidden !duration-150 motion-reduce:transition-none [&_input]:focus-visible:z-10 [&_input]:focus-visible:ring-2 [&_input]:focus-visible:ring-offset-2',
                                    errorMessage &&
                                        'bg-danger-100 hover:bg-danger-200 [&_input]:focus:bg-danger-100',
                                )}
                                onClick={() => {
                                    ref.current?.click();
                                }}
                            >
                                <div className="box-border inline-flex h-full w-full items-center">
                                    <input
                                        ref={ref}
                                        className="placeholder:text-foreground-500 text-small w-full cursor-pointer bg-transparent bg-clip-text font-normal !outline-hidden file:cursor-pointer file:border-0 file:bg-transparent autofill:bg-transparent focus-visible:outline-hidden"
                                        multiple
                                        type="file"
                                        name={name}
                                        onChange={(e) => {
                                            const files = e.target.files;
                                            if (files) {
                                                setControlledValue([...files]);
                                            } else {
                                                setControlledValue(null);
                                            }
                                            onClearError?.(name);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="text-danger flex flex-col gap-1">{errorMessage}</div>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                className="text-base"
                                variant="light"
                                onPress={onClose}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button color="primary" className="text-base" onPress={handleSave}>
                                {t('Save')}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
