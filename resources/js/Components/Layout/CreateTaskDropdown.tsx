import SafeHtml from '@/Components/SafeHtml';
import Button from '@/Components/Shared/Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/Components/Shared/DropdownMenu';
import { useRouter } from '@/hooks/useRouter';
import { Image } from '@heroui/react';
import { Link, usePage } from '@inertiajs/react';
import isSvg from 'is-svg';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { useState } from 'react';

export default function CreateTaskDropdown() {
    const { t } = useLaravelReactI18n();
    const { route } = useRouter();
    const {
        default: { categories },
    } = usePage().props;
    const [open, setOpen] = useState(false);

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    className="border-foreground h-11 rounded-full border text-base font-medium"
                    variant="bordered"
                >
                    {t('navigation.create')}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{t('navigation.categories')}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {categories.map((category) =>
                        category.subCategories?.length ? (
                            <DropdownMenuSub key={category.id}>
                                <DropdownMenuSubTrigger>
                                    {category.icon &&
                                        (isSvg(category.icon) ? (
                                            <SafeHtml<'svg'>
                                                className="aspect-square h-full w-fit"
                                                html={category.icon}
                                            />
                                        ) : (
                                            <Image
                                                src={category.icon}
                                                alt={category.name.current}
                                                width=""
                                                height=""
                                                className="size-4"
                                                classNames={{
                                                    wrapper: 'aspect-square h-full w-fit',
                                                }}
                                            />
                                        ))}
                                    {category.name.current}
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        {category.subCategories.map((subCategory) => (
                                            <DropdownMenuItem key={subCategory.id} className="p-0">
                                                <Link
                                                    className="w-full px-2 py-1.5"
                                                    href={route('sub-category.task.create.index', {
                                                        subCategory: subCategory.id,
                                                    })}
                                                    onClick={() => setOpen(false)}
                                                >
                                                    {subCategory.name.current}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        ) : (
                            <DropdownMenuItem key={category.id}>
                                {category.icon &&
                                    (isSvg(category.icon) ? (
                                        <SafeHtml<'svg'>
                                            className="aspect-square h-full w-fit"
                                            html={category.icon}
                                        />
                                    ) : (
                                        <Image
                                            src={category.icon}
                                            alt={category.name.current}
                                            width=""
                                            height=""
                                            className="size-4"
                                            classNames={{
                                                wrapper: 'aspect-square h-full w-fit',
                                            }}
                                        />
                                    ))}
                                {category.name.current}
                            </DropdownMenuItem>
                        ),
                    )}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
