import { forwardRef } from 'react';
import { Button as HeroUiButton, ButtonProps } from '@heroui/button';
import { twMerge } from 'tailwind-merge';

const Button = forwardRef<typeof HeroUiButton, ButtonProps>(
    ({ as: Component = HeroUiButton, className, ...props }, ref) => {
        return (
            <Component
                {...props}
                className={twMerge(
                    (props.variant === 'bordered'
                        ? 'border-2 border-[#C6C6C6] dark:border-white '
                        : '') + 'rounded-[1.25rem] px-6 py-2.5 text-xl font-semibold',
                    className,
                )}
                ref={ref}
            />
        );
    },
);

export default Button;
