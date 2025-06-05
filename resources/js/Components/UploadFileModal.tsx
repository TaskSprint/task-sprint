import Button from '@/Components/Shared/Button';
import Input from '@/Components/Shared/Input';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import React, { useEffect, useState } from 'react';
import { useUncontrolledProp } from 'uncontrollable';

interface UploadFileModalProps<T extends string | undefined = undefined> {
    name: T;
    errorMessage?: string;
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
                            <Input
                                ref={ref}
                                name={name}
                                errorMessage={errorMessage}
                                onClearError={onClearError}
                                type="file"
                                multiple
                                onChange={(e) => {
                                    const files = e.target.files;
                                    if (files) {
                                        setControlledValue([...files]);
                                    } else {
                                        setControlledValue(null);
                                    }
                                }}
                            />
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
