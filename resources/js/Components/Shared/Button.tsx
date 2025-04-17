import { Button as HeroUiButton, ButtonProps } from '@heroui/button';
import { As, forwardRef } from '@heroui/system';
import { cn } from '@heroui/theme';
import { useDOMRef } from '@heroui/react-utils';

const Button = forwardRef<typeof HeroUiButton, ButtonProps>(({ className, ...props }, ref) => {
    const Component: As = HeroUiButton;
    const domRef = useDOMRef(ref);

    return (
        <Component
            {...props}
            className={cn(
                props.variant === 'bordered' && 'border-2',
                !props.color &&
                    props.variant === 'bordered' &&
                    'border-[#C6C6C6] dark:border-white',
                'rounded-[1.25rem] px-6 py-2.5 text-xl font-semibold !transition',
                className,
            )}
            ref={domRef}
        />
    );
});

export default Button;
