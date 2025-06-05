import { As, ButtonProps, cn, forwardRef, Button as HeroUiButton } from '@heroui/react';
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
                props.color === 'primary'
                    ? 'data-[focus-visible=true]:border-foreground dark:data-[focus-visible=true]:border-foreground data-[focus-visible=true]:border-2'
                    : 'data-[focus-visible=true]:border-primary dark:data-[focus-visible=true]:border-primary data-[focus-visible=true]:border-2',
                'rounded-[1.25rem] px-6 py-2.5 text-xl font-semibold !transition disabled:pointer-events-none disabled:opacity-30',
                className,
            )}
            ref={domRef}
        />
    );
});

export default Button;
