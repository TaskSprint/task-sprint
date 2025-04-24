import { HTMLAttributes, useEffect } from 'react';
import { forwardRef } from '@heroui/system';
import { useDOMRef } from '@heroui/react-utils';
import DOMPurify from 'isomorphic-dompurify';
import { cn } from '@heroui/theme';

interface SafeHtmlProps extends HTMLAttributes<HTMLDivElement> {
    classNames?: {
        wrapper?: string;
        content?: string | string[];
    };
    html: string;
}

const SafeHtml = forwardRef<'div', SafeHtmlProps>(
    ({ className, classNames, html, ...props }, ref) => {
        const domRef = useDOMRef<HTMLDivElement>(ref);

        useEffect(() => {
            if (domRef.current) {
                if (typeof classNames?.content === 'string' && domRef.current.firstElementChild) {
                    const contentClassName = cn(
                        classNames?.content,
                        domRef.current.firstElementChild.className,
                    );
                    domRef.current.firstElementChild.classList.remove(
                        ...domRef.current.firstElementChild.classList,
                    );
                    domRef.current.firstElementChild.classList.add(...contentClassName.split(' '));
                }
                if (Array.isArray(classNames?.content) && domRef.current.firstElementChild) {
                    classNames?.content.forEach((className, index) => {
                        const domElement = domRef.current?.children[index];
                        if (domElement) {
                            const contentClassName = cn(className, domElement.className);
                            domElement.classList.remove(...domElement.classList);
                            domElement.classList.add(...contentClassName.split(' '));
                        }
                    });
                }
            }
        }, [html, classNames]);

        return (
            <div
                {...props}
                className={cn(className, classNames?.wrapper)}
                ref={domRef}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
            />
        );
    },
);

export default SafeHtml;
