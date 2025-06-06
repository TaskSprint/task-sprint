import { CategoryTestCard } from '@/Components/CategoryTestCard';
import { useRouter } from '@/hooks/useRouter';
import { PageProps } from '@/types';
import Category from '@/types/models/category';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input } from '@heroui/react';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useRef } from 'react';

export default function CategoryTest({ categories }: PageProps<{ categories: Category[] }>) {
    const { props } = usePage();
    const localizedNames: Record<`name_${string}`, string> = {};
    props.locale?.available.forEach((locale) => {
        localizedNames[`name_${locale}`] = '';
    });

    const { route } = useRouter();
    const { data, setData, post, processing, reset } = useForm<{
        icon?: File;
        color: string;
        [key: `name_${string}`]: string;
    }>({
        icon: undefined,
        color: '#00CCFF',
        ...localizedNames,
    });
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleCategoryAdd: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        post(route('category-test.store'));
        reset();
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    useEffect(() => {
        console.log(categories);
    }, [categories]);

    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
            <h1>CategoryTest</h1>
            <Card>
                <CardHeader>
                    <h2>Add category</h2>
                </CardHeader>
                <Divider />
                <form onSubmit={handleCategoryAdd}>
                    <CardBody className="flex flex-col gap-2">
                        <Input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={(event) => setData('icon', event.target.files?.[0])}
                            readOnly={processing}
                        />
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
                    <CardFooter>
                        <Button type="submit" disabled={processing}>
                            Add
                        </Button>
                    </CardFooter>
                </form>
            </Card>
            <Divider />
            <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
                {categories.map((category) => (
                    <CategoryTestCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
}
