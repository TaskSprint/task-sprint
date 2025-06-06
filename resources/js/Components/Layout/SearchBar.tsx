import Button from '@/Components/Shared/Button';
import { useRouter } from '@/hooks/useRouter';
import { cn, Input, Link, LinkIcon, Spinner, Tooltip } from '@heroui/react';
import { usePage } from '@inertiajs/react';
import * as Accordion from '@radix-ui/react-accordion';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { useQueryState } from 'nuqs';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useOnClickOutside } from 'usehooks-ts';

export default function SearchBar() {
    const { t } = useLaravelReactI18n();
    const { route } = useRouter();
    const { search } = usePage().props;
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useQueryState('q', {
        defaultValue: '',
        clearOnDefault: true,
    });
    const [inputValue, setInputValue] = useState(query);
    const getRadixHeight = useCallback(
        () =>
            `calc(var(--spacing) * 10 * ${search?.subCategories.length ?? 0} + (var(--spacing) * 2 * ${Math.max(0, (search?.subCategories.length ?? 0) - 1)} + var(--spacing ) * 4)`,
        [search?.subCategories.length],
    );
    const [previousRadixHeight, setPreviousRadixHeight] = useState(getRadixHeight);
    const [isDebouncing, setIsDebouncing] = useState(false);

    const debounce = useDebouncedCallback(async (value: string) => {
        await setQuery(value);
        setIsDebouncing(false);
    }, 750);

    const handleSearch = (e: string) => {
        setInputValue(e);
        setIsDebouncing(true);
        debounce(e);
    };

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleCollapse = () => {
        setExpanded(false);
    };

    useOnClickOutside(ref, handleCollapse);
    useOnClickOutside(ref, handleCollapse, 'focusin');

    useEffect(() => {
        if (search?.subCategories.length) {
            setPreviousRadixHeight(getRadixHeight);
        }
    }, [search, getRadixHeight]);

    return (
        <Accordion.Root
            className="relative box-border h-full max-h-full"
            type="single"
            value={expanded && search?.subCategories.length ? 'searchBar' : ''}
            onClick={handleExpand}
            ref={ref}
            collapsible
        >
            <Accordion.Item
                value="searchBar"
                aria-label="Accordion SearchBar"
                className={cn(
                    'border-foreground max-w-80 overflow-clip rounded-[1.35rem] border bg-transparent p-0 transition-all',
                    expanded && 'bg-background/70 backdrop-blur-lg backdrop-saturate-150',
                )}
            >
                <Accordion.Header className="flex h-[2.625rem] items-center">
                    <Input
                        ref={inputRef}
                        type="text"
                        className="h-full w-full min-w-80"
                        onFocus={handleExpand}
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
                        endContent={
                            isDebouncing && (
                                <Spinner size="sm" className="-translate-y-1/4" variant="wave" />
                            )
                        }
                    />
                </Accordion.Header>
                <Accordion.Content
                    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down h-radix-accordion-content-height transition-height flex flex-col gap-2 overflow-hidden p-2 duration-300"
                    style={
                        {
                            '--radix-accordion-content-height': search?.subCategories.length
                                ? getRadixHeight()
                                : previousRadixHeight,
                        } as CSSProperties
                    }
                >
                    {search?.subCategories.map((subCategory) => (
                        <Tooltip
                            key={subCategory.id}
                            content={subCategory.name.current}
                            delay={700}
                        >
                            <Button
                                className="group w-full justify-start text-base font-normal text-nowrap"
                                as={Link}
                                href={route('sub-category.task.create.index', {
                                    subCategory: subCategory.id,
                                })}
                                variant="light"
                                endContent={
                                    <div className="text-muted ml-auto w-0 opacity-0 transition-all group-hover:w-4 group-hover:opacity-100 [&>svg]:m-0">
                                        <LinkIcon />
                                    </div>
                                }
                            >
                                <div className="truncate">{subCategory.name.current}</div>
                            </Button>
                        </Tooltip>
                    ))}
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    );
}
