import { cn, forwardRef } from '@heroui/react';
import parse, { attributesToProps, DOMNode, domToReact, Element } from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';
import { ComponentProps, ElementType, HTMLProps, ReactElement } from 'react';

type ElementProps<T> = T extends ElementType ? ComponentProps<T> : HTMLProps<T>;

type SafeHtmlProps<T = HTMLElement> = Omit<ElementProps<T>, 'children'> & {
    html: string;
};

const SafeHtml = forwardRef<ElementType, Omit<SafeHtmlProps, 'ref'>>(
    ({ className, html, ...props }, ref) => {
        return parse(DOMPurify.sanitize(html), {
            replace: (domNode) => {
                const element = domNode as Element;
                const Component = element.tagName as ElementType;
                const attrs = attributesToProps(element.attribs);
                return (
                    <Component
                        {...attrs}
                        {...props}
                        ref={ref}
                        className={cn(element.attribs.class, className)}
                    >
                        {domToReact(element.children as DOMNode[])}
                    </Component>
                );
            },
        });
    },
) as <T = HTMLElement>(p: SafeHtmlProps<T>) => ReactElement;

export default SafeHtml;
