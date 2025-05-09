import { useLaravelReactI18n } from 'laravel-react-i18n';
import { Accordion, AccordionItem, Input, Link } from '@heroui/react';
import { usePage } from '@inertiajs/react';
import { FocusEvent, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import Button from '@/Components/Shared/Button';
import { useQueryState } from 'nuqs';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
    const { t } = useLaravelReactI18n();
    const { search } = usePage().props;
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useQueryState('q', {
        defaultValue: '',
        clearOnDefault: true,
    });
    const [inputValue, setInputValue] = useState(query);

    const debounce = useDebouncedCallback((value: string) => setQuery(value), 750);

    const handleSearch = (e: string) => {
        setInputValue(e);
        debounce(e);
    };

    const handleFocus = (e: FocusEvent) => {
        if (inputRef.current && e.target?.getAttribute('data-slot') === 'trigger') {
            inputRef.current.focus();
        }
    };

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleCollapse = () => {
        setExpanded(false);
    };

    useOnClickOutside(ref, handleCollapse);
    useOnClickOutside(ref, handleCollapse, 'focusin');

    return (
        <Accordion
            className="relative box-border h-full max-h-full"
            selectedKeys={expanded && search?.subCategories.length ? ['searchBar'] : []}
            variant="splitted"
            onClick={handleExpand}
            ref={ref}
        >
            <AccordionItem
                key="searchBar"
                aria-label="Accordion SearchBar"
                hideIndicator
                onFocus={handleFocus}
                classNames={{
                    base: [
                        'bg-transparent border border-foreground overflow-clip rounded-[1.35rem] transition-all p-0',
                        expanded && 'bg-background/70 backdrop-blur-lg backdrop-saturate-150',
                    ],
                    title: 'flex items-center h-[2.625rem]',
                    trigger: 'p-0',
                    content: 'p-2',
                }}
                title={
                    <Input
                        ref={inputRef}
                        type="text"
                        className="h-full w-80"
                        onFocus={handleExpand}
                        tabIndex={-1}
                        value={inputValue}
                        onChange={(e) => handleSearch(e.target.value)}
                        classNames={{
                            inputWrapper: [
                                'shadow-none px-4 min-h-full h-full py-0 rounded-full border-none border-black dark:border-white',
                                expanded && 'bg-foreground/10',
                            ],
                        }}
                        variant="bordered"
                        placeholder={t('navigation.search')}
                    />
                }
            >
                {search?.subCategories.map((subCategory) => (
                    <Button
                        className="w-full justify-start text-base font-normal"
                        key={subCategory.id}
                        as={Link}
                        variant="light"
                    >
                        {subCategory.name.current}
                    </Button>
                ))}
            </AccordionItem>
        </Accordion>
    );
}
