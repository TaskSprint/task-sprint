import { HTMLAttributes } from 'react';
import { cn, forwardRef } from '@heroui/react';
import { useDOMRef } from '@heroui/react-utils';
import DOMPurify from 'isomorphic-dompurify';

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

        const addClassNames = (html: string) => {
            const div = document.createElement('div');
            div.innerHTML = html;

            if (typeof classNames?.content === 'string' && div.firstElementChild) {
                const contentClassName = cn(classNames?.content, div.firstElementChild.className);
                if (div.firstElementChild.className !== contentClassName) {
                    div.firstElementChild.classList.remove(...div.firstElementChild.classList);
                    div.firstElementChild.classList.add(...contentClassName.split(' '));
                }
            }
            if (Array.isArray(classNames?.content) && div.firstElementChild) {
                classNames?.content.forEach((className, index) => {
                    const domElement = div?.children[index];
                    if (domElement) {
                        const contentClassName = cn(className, domElement.className);
                        if (domElement.className !== contentClassName) {
                            domElement.classList.remove(...domElement.classList);
                            domElement.classList.add(...contentClassName.split(' '));
                        }
                    }
                });
            }
            return div.innerHTML;
        };

        return (
            <div
                {...props}
                className={cn(className, classNames?.wrapper)}
                ref={domRef}
                dangerouslySetInnerHTML={{ __html: addClassNames(DOMPurify.sanitize(html)) }}
            />
        );
    },
);

export default SafeHtml;
