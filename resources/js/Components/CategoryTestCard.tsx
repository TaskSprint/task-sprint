import { useRouter } from '@/hooks/useRouter';
import Category from '@/types/models/category';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
    Input,
} from '@heroui/react';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';

export function CategoryTestCard({ category }: Readonly<{ category: Category }>) {
    const { props } = usePage();
    const localizedNames: Record<`name_${string}`, string> = {};
    props.locale?.available.forEach((locale) => {
        localizedNames[`name_${locale}`] = category.name.data[locale];
    });

    const { route } = useRouter();
    const {
        data,
        setData,
        post,
        processing,
        delete: destroy,
    } = useForm<{
        _method: 'PUT';
        icon?: File;
        color: string;
        [key: `name_${string}`]: string;
    }>({
        _method: 'PUT',
        icon: undefined,
        color: category.color,
        ...localizedNames,
    });
    const [removedIcon, setRemovedIcon] = useState(false);

    const handleCategoryUpdate: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        post(route('category-test.update', { category: category.id }));
    };

    const handleCategoryDelete = () => {
        destroy(route('category-test.destroy', { category: category.id }));
    };

    const handleIconRemove = () => {
        setRemovedIcon(true);
        setData('icon', undefined);
    };

    useEffect(() => {
        setRemovedIcon(false);
    }, [category.icon]);

    return (
        <Card>
            <CardHeader>
                <h2>Update category "{category.name.current}"</h2>
            </CardHeader>
            <Divider />
            <form onSubmit={handleCategoryUpdate} className="flex h-full flex-col">
                <CardBody className="flex h-full flex-col gap-2">
                    {category.icon && !removedIcon ? (
                        <>
                            <Image src={category.icon} alt="icon" />
                            <Button
                                color="danger"
                                variant="bordered"
                                onPress={handleIconRemove}
                                disabled={processing}
                            >
                                Remove icon
                            </Button>
                        </>
                    ) : (
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={(event) => setData('icon', event.target.files?.[0])}
                            readOnly={processing}
                        />
                    )}
                    {props.locale?.available.map((locale) => (
                        <Input
                            key={`name_${locale}`}
                            value={data[`name_${locale}`]}
                            placeholder={`Name (${locale})`}
                            onChange={(e) => setData(`name_${locale}`, e.target.value)}
                            readOnly={processing}
                        />
                    ))}
                    <Input
                        type="color"
                        value={data.color}
                        placeholder={`Color`}
                        onChange={(e) => setData('color', e.target.value)}
                        readOnly={processing}
                    />
                </CardBody>
                <Divider />
                <CardFooter className="flex gap-2">
                    <Button type="submit" disabled={processing}>
                        Update
                    </Button>
                    <Button
                        type="button"
                        color="danger"
                        onPress={handleCategoryDelete}
                        disabled={processing}
                    >
                        Delete
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
