import Button from '@/Components/Shared/Button';
import Input from '@/Components/Shared/Input';
import Textarea from '@/Components/Shared/Textarea';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { ReactNode, useEffect, useState } from 'react';
import { useUncontrolledProp } from 'uncontrollable';

type ActionValue<T extends boolean | undefined> = T extends true ? string[] : string;

interface DescriptionModalProps<
    T extends string | undefined = undefined,
    TList extends boolean | undefined = undefined,
> {
    name: T;
    list?: TList;
    errorMessage?: ReactNode;
    onClearError?: (name: T) => void;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    onSave?: (value: ActionValue<TList>) => void | Promise<unknown>;
    title?: string;
    subtitle?: string;
    value?: ActionValue<TList>;
    placeholder?: string;
    type?: 'text' | 'textarea';

    confirmText?: string;
    submitDanger?: boolean;
}

export default function ActionModal<
    T extends string | undefined = undefined,
    TList extends boolean | undefined = undefined,
>({
    name,
    list,
    errorMessage,
    onClearError,
    open,
    onOpenChange,
    onSave,
    title,
    subtitle,
    value,
    placeholder = '',
    confirmText,
    submitDanger = false,
    type = 'text',
}: Readonly<DescriptionModalProps<T, TList>>) {
    const defaultValue = (list ? [] : '') as ActionValue<TList>;
    const [controlledValue, setControlledValue] = useState(value ?? defaultValue);
    const [controlledOpen, setControlledOpen] = useUncontrolledProp(open, false, onOpenChange);
    const { t } = useLaravelReactI18n();
    const TypedInput = type === 'textarea' ? Textarea : Input;

    const handleSave = async () => {
        try {
            let result;
            if (list) {
                const value = controlledValue as string[];
                result = onSave?.(value.map((item) => item.trim()) as ActionValue<TList>);
            } else {
                const value = controlledValue as string;
                result = onSave?.(value.trim() as ActionValue<TList>);
            }
            if (result instanceof Promise) {
                await result;
            }
            setControlledOpen(false);
        } catch (error) {
            console.error('Error saving description:', error);
        }
    };

    const handleClose = () => {
        setControlledOpen(false);
        setControlledValue(value ?? defaultValue);
    };

    const handleListChange = (newValue: string, index: number) => {
        setControlledValue(
            (controlledValue as string[]).map((v, i) =>
                i === index ? newValue : v,
            ) as ActionValue<TList>,
        );
    };

    const handleListAdd = () => {
        setControlledValue([...(controlledValue as string[]), ''] as ActionValue<TList>);
    };

    const handleListRemove = (index: number) => {
        setControlledValue(
            (controlledValue as string[]).filter((_, i) => i !== index) as ActionValue<TList>,
        );
    };

    useEffect(() => {
        if (value !== undefined) {
            setControlledValue(value);
        }
    }, [value]);

    return (
        <Modal backdrop="blur" isOpen={controlledOpen} onClose={handleClose}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                        <ModalBody>
                            {subtitle && (
                                <p className="text-muted-foreground mt-1 text-sm">{subtitle}</p>
                            )}
                            {list ? (
                                <>
                                    {errorMessage && (
                                        <p className="text-danger text-sm">{errorMessage}</p>
                                    )}
                                    <div className="flex max-h-[60dvh] flex-col gap-2 overflow-y-auto">
                                        {(controlledValue as string[]).map((item, index) => (
                                            <div key={`${name}-${index}`} className="flex gap-2">
                                                <TypedInput
                                                    name={`${name}[${index}]`}
                                                    onClearError={() => onClearError?.(name)}
                                                    variant="bordered"
                                                    className="mb-2 w-full text-sm"
                                                    color="primary"
                                                    placeholder={placeholder}
                                                    value={item}
                                                    onValueChange={(e) =>
                                                        handleListChange(e, index)
                                                    }
                                                />
                                                <Button
                                                    color="danger"
                                                    variant="bordered"
                                                    className="rounded-medium aspect-square min-w-max px-0"
                                                    onPress={() => handleListRemove(index)}
                                                >
                                                    -
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                    <Button
                                        color="primary"
                                        variant="bordered"
                                        onPress={handleListAdd}
                                    >
                                        +
                                    </Button>
                                </>
                            ) : (
                                <TypedInput
                                    name={name}
                                    errorMessage={errorMessage}
                                    onClearError={onClearError}
                                    variant="bordered"
                                    className="w-full text-sm"
                                    color="primary"
                                    placeholder={placeholder}
                                    value={controlledValue as string}
                                    onValueChange={(e) =>
                                        setControlledValue(e as ActionValue<TList>)
                                    }
                                />
                            )}
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
                            <Button
                                color={submitDanger ? 'danger' : 'primary'}
                                className="text-base"
                                onPress={handleSave}
                            >
                                {confirmText ?? t('Save')}
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
