import { As, forwardRef, Input as HeroUiInput, InputProps } from '@heroui/react';
import { useDOMRef } from '@heroui/react-utils';
import React, { ReactElement, useEffect, useState } from 'react';
import { useUncontrolledProp } from 'uncontrollable';

const Input = forwardRef<
    typeof HeroUiInput,
    InputProps & {
        onClearError?: (name?: string) => void;
    }
>(
    (
        {
            name,
            value,
            defaultValue,
            errorMessage,
            isInvalid,
            onValueChange,
            onClearError,
            onBlur,
            ...props
        },
        ref,
    ) => {
        const Component: As = HeroUiInput;
        const domRef = useDOMRef<HTMLInputElement>(ref);
        const [errorValue, setErrorValue] = useState<string>();
        const [controlledValue, setControlledValue] = useUncontrolledProp(
            value,
            defaultValue,
            onValueChange,
        );

        const handleBlur: React.FocusEventHandler<HTMLInputElement> &
            ((e: React.FocusEvent<HTMLInputElement>) => void) = (...props) => {
            onBlur?.(...props);
            if (errorValue && errorValue !== controlledValue) {
                onClearError?.(name);
            }
        };

        useEffect(() => {
            if (errorMessage) {
                setErrorValue(controlledValue);
            } else {
                setErrorValue(undefined);
            }
        }, [errorMessage]);

        return (
            <Component
                {...props}
                name={name}
                value={controlledValue}
                onValueChange={setControlledValue}
                onBlur={handleBlur}
                errorMessage={errorMessage}
                isInvalid={isInvalid ?? (errorMessage ? true : undefined)}
                ref={domRef}
            />
        );
    },
) as <T extends string | undefined = undefined>(
    p: InputProps & {
        name: T;
        onClearError?: (name: T) => void;
    },
) => ReactElement;

export default Input;
