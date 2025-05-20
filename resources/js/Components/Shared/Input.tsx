import { As, forwardRef, Input as HeroUiInput, InputProps } from '@heroui/react';
import { useDOMRef } from '@heroui/react-utils';
import React, { ReactElement, useEffect, useState } from 'react';

const Input = forwardRef<
    typeof HeroUiInput,
    InputProps & {
        onClearError?: (name?: string) => void;
    }
>(({ name, errorMessage, isInvalid, onValueChange, onClearError, onBlur, ...props }, ref) => {
    const Component: As = HeroUiInput;
    const domRef = useDOMRef<HTMLInputElement>(ref);
    const [errorValue, setErrorValue] = useState<string>();

    const handleValueChange = (value: string) => {
        onValueChange?.(value);
    };

    const handleBlur: React.FocusEventHandler<HTMLInputElement> &
        ((e: React.FocusEvent<HTMLInputElement>) => void) = (...props) => {
        onBlur?.(...props);
        if (errorValue && errorValue !== domRef.current?.value) {
            onClearError?.(name);
        }
    };

    useEffect(() => {
        if (domRef.current && errorMessage) {
            setErrorValue(domRef.current.value);
        } else {
            setErrorValue(undefined);
        }
    }, [domRef.current, errorMessage]);

    return (
        <Component
            {...props}
            name={name}
            onValueChange={handleValueChange}
            onBlur={handleBlur}
            errorMessage={errorMessage}
            isInvalid={isInvalid ?? (errorMessage ? true : undefined)}
            ref={domRef}
        />
    );
}) as <T extends string | undefined = undefined>(
    p: InputProps & {
        name: T;
        onClearError?: (name: T) => void;
    },
) => ReactElement;

export default Input;
