import ActionModal from '@/Components/ActionModal';
import DateSelector from '@/Components/DateSelector';
import FavoriteEmployeesSM from '@/Components/FavoriteEmployeesSM';
import Button from '@/Components/Shared/Button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/Components/Shared/Carousel';
import Input from '@/Components/Shared/Input';
import Textarea from '@/Components/Shared/Textarea';
import UploadFileModal from '@/Components/UploadFileModal';
import { useRouter } from '@/hooks/useRouter';
import { PageProps } from '@/types';
import SubCategory from '@/types/models/sub-category';
import User from '@/types/models/user';
import { BreadcrumbItem, Breadcrumbs, Checkbox, cn, Divider, Form, Link } from '@heroui/react';
import { Head, useForm } from '@inertiajs/react';
import { addDays, startOfDay } from 'date-fns';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { useQueryState } from 'nuqs';
import { FormEvent, useState } from 'react';

export default function TaskCreationPage({
    subCategory,
    employees,
    employee,
}: PageProps<{
    subCategory: SubCategory;
    employees?: User[];
    employee?: User;
}>) {
    const { route } = useRouter();
    const { t } = useLaravelReactI18n();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [uploadedFilename] = useState<string | null>(null);
    const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
    const [queryName] = useQueryState('n');
    const [queryDescription] = useQueryState('d');
    // const [selected2, setSelected2] = React.useState('cash');
    // const [selected3, setSelected3] = React.useState('option-1');

    const { data, setData, errors, clearErrors, post, processing } = useForm<{
        name: string;
        files: File[] | null;
        description: string;
        secret_description: string;
        estimated_date: Date;
        address: {
            city: string;
            region: string;
            street: string;
            building: string;
            details: string | null;
        };
        payment_details: string | null;
        price: string;
        currency_code: string;
        sub_category_id: number;
        employee_id: number | null;
        negotiable: boolean;
    }>({
        name: queryName ?? '',
        files: null,
        description: queryDescription ?? '',
        secret_description: '',
        estimated_date: startOfDay(addDays(new Date(), 1)),
        address: {
            city: '',
            region: '',
            street: '',
            building: '',
            details: null,
        },
        payment_details: null,
        price: '0',
        currency_code: 'UAH',
        sub_category_id: subCategory.id,
        employee_id: employee?.id ?? null,
        negotiable: true,
    });

    // const cities = [
    //     { key: 'kyiv', label: 'Київ' },
    //     { key: 'odessa', label: 'Одеса' },
    //     { key: 'kharkov', label: 'Харків' },
    //     { key: 'zaporizha', label: 'Запоріжжюя' },
    //     { key: 'lviv', label: 'Львів' },
    //     { key: 'donetsk', label: 'Донецк' },
    // ];
    //
    // const districts = [
    //     { key: 'pecherskiiy', label: 'Печерський' },
    //     { key: 'obolonskiiy', label: 'Обольнський' },
    //     { key: 'podolskiiy', label: 'Поділський' },
    // ];

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('sub-category.task.create.store', { subCategory: subCategory.id }));
    };

    return (
        <>
            <Head title={`${t('task-creation.title')} - ${subCategory.name.current}`} />

            <div className="bg-surface flex min-h-full w-full max-w-[87.5rem] flex-col xl:flex-row">
                <Form
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col items-center px-4 [&>*]:w-full"
                >
                    <div className="border-muted flex flex-col items-center gap-2.5 border-b pt-10 pb-10">
                        <h2 className="text-center text-[2rem] font-semibold">
                            {t('task-creation.select-category')}
                        </h2>
                        <Breadcrumbs
                            className="text-[1.25rem] font-medium"
                            size="lg"
                            classNames={{
                                list: 'justify-center',
                            }}
                        >
                            <BreadcrumbItem className="gap-2.5 text-[1.25rem] font-medium">
                                {subCategory.category?.name.current}
                            </BreadcrumbItem>
                            <BreadcrumbItem className="ml-2.5 text-[1.25rem] font-medium">
                                {subCategory.name.current}
                            </BreadcrumbItem>
                        </Breadcrumbs>
                    </div>
                    <div className="border-muted flex flex-col items-center gap-6.25 border-b py-10 pt-10">
                        <h2 className="text-[2rem] font-semibold">
                            {t('task-creation.order-details')}
                        </h2>
                        <div className="flex w-full flex-col items-center gap-2.5">
                            <h4 className="pb-2.5 text-base font-medium">
                                {t('task-creation.briefly')}
                            </h4>
                            <Textarea
                                name="name"
                                errorMessage={errors.name}
                                value={data.name}
                                onClearError={clearErrors}
                                onValueChange={(value) => setData('name', value)}
                                className="w-full max-w-[34.625rem]"
                                color="primary"
                                variant="bordered"
                                radius="lg"
                            />
                        </div>
                        <div className="mb-3 flex w-full flex-col items-center gap-5">
                            <h4 className="mt-6 pb-0.5 text-base font-medium">
                                {t('task-creation.description')}:
                            </h4>
                            <Textarea
                                name="description"
                                errorMessage={errors.description}
                                className="w-full max-w-[40rem]"
                                color="primary"
                                variant="bordered"
                                radius="lg"
                                minRows={8}
                                value={data.description}
                                onClearError={clearErrors}
                                onValueChange={(value) => setData('description', value)}
                            />
                            <div className="flex flex-row flex-wrap justify-center gap-x-10 gap-y-2">
                                <div>
                                    <Button
                                        variant="light"
                                        className="text-medium sm:text-xl"
                                        color={errors.secret_description ? 'danger' : 'default'}
                                        onPress={() => setIsDescriptionModalOpen(true)}
                                    >
                                        + {t('task-creation.confidential-data.title')}
                                    </Button>

                                    <ActionModal
                                        name="secret_description"
                                        errorMessage={errors.secret_description}
                                        onClearError={clearErrors}
                                        open={isDescriptionModalOpen}
                                        onOpenChange={setIsDescriptionModalOpen}
                                        onSave={(desc) => setData('secret_description', desc)}
                                        title={t('task-creation.confidential-data.title')}
                                        subtitle={t('task-creation.confidential-data.subtitle')}
                                        placeholder={t(
                                            'task-creation.confidential-data.placeholder',
                                        )}
                                        type="textarea"
                                    />
                                </div>
                                <div>
                                    <Button
                                        onPress={() => setIsModalOpen(true)}
                                        color={
                                            Object.keys(errors).find((e) => e.startsWith('files'))
                                                ? 'danger'
                                                : 'primary'
                                        }
                                        variant="light"
                                        className="text-medium sm:text-xl"
                                    >
                                        {t('task-creation.add-file')}
                                    </Button>

                                    {uploadedFilename && (
                                        <div className="mt-2 text-sm dark:text-[#00CCFF]">
                                            {t('task-creation.add-loaded')} {uploadedFilename}
                                        </div>
                                    )}

                                    <UploadFileModal
                                        name="files"
                                        errorMessage={
                                            Object.keys(errors).find((e) =>
                                                e.startsWith('files'),
                                            ) ? (
                                                <ul className="list-disc pl-4">
                                                    {Object.entries(errors)
                                                        .filter(([key]) => key.startsWith('files'))
                                                        .map(([key, message]) => (
                                                            <li key={key} className="text-danger">
                                                                {message}
                                                            </li>
                                                        ))}
                                                </ul>
                                            ) : undefined
                                        }
                                        onClearError={() =>
                                            Object.keys(errors)
                                                .filter((key) => key.startsWith('files'))
                                                .forEach((key) =>
                                                    clearErrors(key as keyof typeof errors),
                                                )
                                        }
                                        open={isModalOpen}
                                        onOpenChange={setIsModalOpen}
                                        value={data.files}
                                        onSave={(files) => setData('files', files)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-muted flex flex-col items-center gap-6.25 border-b py-10">
                        <h2 className="text-[2rem] font-semibold">
                            {t('task-creation.order-address')}
                        </h2>
                        <div className="grid w-full grid-cols-1 flex-row items-center justify-between gap-2.5 sm:w-auto sm:grid-cols-[auto_minmax(0,25rem)] [&>h4]:mt-4 sm:[&>h4]:mt-0">
                            <h4 className="text-base font-medium">{t('task-creation.city')}</h4>
                            <Input
                                name="address.city"
                                errorMessage={errors['address.city']}
                                placeholder={t('task-creation.exmp-city')}
                                variant="bordered"
                                radius="full"
                                size="lg"
                                color="primary"
                                value={data.address.city}
                                onClearError={clearErrors}
                                onValueChange={(value) => setData('address.city', value)}
                            />
                            {/*<Select*/}
                            {/*    radius="full"*/}
                            {/*    labelPlacement="outside"*/}
                            {/*    variant="bordered"*/}
                            {/*    defaultSelectedKeys={['kyiv']}*/}
                            {/*    size="lg"*/}
                            {/*    color="primary"*/}
                            {/*    className="min-w-48"*/}
                            {/*>*/}
                            {/*    {cities.map((city) => (*/}
                            {/*        <SelectItem key={city.key}>{city.label}</SelectItem>*/}
                            {/*    ))}*/}
                            {/*</Select>*/}

                            <h4 className="text-base font-medium">{t('task-creation.district')}</h4>
                            <Input
                                name="address.region"
                                errorMessage={errors['address.region']}
                                placeholder={t('task-creation.exmp-district')}
                                variant="bordered"
                                radius="full"
                                size="lg"
                                color="primary"
                                value={data.address.region}
                                onClearError={clearErrors}
                                onValueChange={(value) => setData('address.region', value)}
                            />
                            {/*<Select*/}
                            {/*    radius="full"*/}
                            {/*    labelPlacement="outside"*/}
                            {/*    variant="bordered"*/}
                            {/*    color="primary"*/}
                            {/*    defaultSelectedKeys={['pecherskiiy']}*/}
                            {/*    size="lg"*/}
                            {/*    className="min-w-48"*/}
                            {/*>*/}
                            {/*    {districts.map((district) => (*/}
                            {/*        <SelectItem key={district.key}>{district.label}</SelectItem>*/}
                            {/*    ))}*/}
                            {/*</Select>*/}

                            <h4 className="text-base font-medium">{t('task-creation.street')}</h4>
                            <Input
                                name="address.street"
                                errorMessage={errors['address.street']}
                                placeholder={t('task-creation.exmp-str')}
                                variant="bordered"
                                radius="full"
                                size="lg"
                                color="primary"
                                value={data.address.street}
                                onClearError={clearErrors}
                                onValueChange={(value) => setData('address.street', value)}
                            />

                            <h4 className="text-base font-medium">{t('task-creation.house')}</h4>
                            <Input
                                name="address.building"
                                errorMessage={errors['address.building']}
                                placeholder={t('task-creation.exmp-home')}
                                variant="bordered"
                                radius="full"
                                size="lg"
                                color="primary"
                                value={data.address.building}
                                onClearError={clearErrors}
                                onValueChange={(value) => setData('address.building', value)}
                            />

                            <h4 className="text-base font-medium">
                                {t('task-creation.adrs-details')}
                            </h4>
                            <Input
                                name="address.details"
                                errorMessage={errors['address.details']}
                                placeholder={t('task-creation.exmp-dtls')}
                                variant="bordered"
                                radius="full"
                                size="lg"
                                color="primary"
                                value={data.address.details ?? ''}
                                onClearError={clearErrors}
                                onValueChange={(value) => setData('address.details', value)}
                            />
                        </div>
                    </div>
                    <div className="border-muted flex flex-col items-center gap-6.25 border-b py-10">
                        <DateSelector
                            name="estimated_date"
                            errorMessage={errors.estimated_date}
                            onClearError={clearErrors}
                            value={data.estimated_date}
                            onValueChange={(value) => setData('estimated_date', value)}
                        />
                    </div>
                    <div className="flex flex-col items-center gap-6.25 py-10 sm:px-20">
                        <h2 className="text-[2rem] font-semibold">{t('task-creation.payment')}</h2>
                        <div className="flex w-full flex-col justify-between">
                            <div className="flex w-full flex-col items-center gap-5.75 lg:flex-row lg:items-start">
                                <div className="grid flex-1 grid-cols-1 gap-2.5 sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8 [&>h4]:mt-4 sm:[&>h4]:mt-0">
                                    <h4 className="mt-1 pb-2.5 text-base font-medium dark:text-white">
                                        {t('task-creation.payment-details')}
                                    </h4>
                                    <Textarea
                                        name="payment_details"
                                        errorMessage={errors.payment_details}
                                        className="mb-1"
                                        variant="bordered"
                                        radius="full"
                                        size="lg"
                                        color="primary"
                                        minRows={1}
                                        value={data.payment_details ?? ''}
                                        onClearError={clearErrors}
                                        onValueChange={(value) => setData('payment_details', value)}
                                    />

                                    {/*<h4 className="text-base font-medium dark:text-white">*/}
                                    {/*    {t('task-creation.method')}*/}
                                    {/*</h4>*/}
                                    {/*<RadioGroup*/}
                                    {/*    value={selected2}*/}
                                    {/*    onValueChange={setSelected2}*/}
                                    {/*    classNames={{*/}
                                    {/*        wrapper: 'flex-row gap-4 sm:gap-2 sm:flex-col',*/}
                                    {/*    }}*/}
                                    {/*    defaultValue="cash"*/}
                                    {/*    color="primary"*/}
                                    {/*>*/}
                                    {/*    <Radio value="cash">{t('task-creation.cash')}</Radio>*/}
                                    {/*    <Radio value="card">{t('task-creation.card')}</Radio>*/}
                                    {/*</RadioGroup>*/}

                                    {/*<h4 className="text-base font-medium dark:text-white">*/}
                                    {/*    {t('task-creation.select-options')}*/}
                                    {/*</h4>*/}
                                    {/*<RadioGroup*/}
                                    {/*    value={selected3}*/}
                                    {/*    onValueChange={setSelected3}*/}
                                    {/*    classNames={{*/}
                                    {/*        wrapper: 'flex-row gap-4 sm:gap-2 sm:flex-col',*/}
                                    {/*    }}*/}
                                    {/*    defaultValue="option1"*/}
                                    {/*    color="primary"*/}
                                    {/*>*/}
                                    {/*    <Radio value="option1">{t('task-creation.option-1')}</Radio>*/}
                                    {/*    <Radio value="option2">{t('task-creation.option-2')}</Radio>*/}
                                    {/*    <Radio value="option3">{t('task-creation.option-3')}</Radio>*/}
                                    {/*</RadioGroup>*/}
                                </div>

                                <div className="flex h-fit w-fit flex-col items-start gap-2 rounded-[1.25rem] bg-[#00CCFF1A] px-[2rem] py-[1rem]">
                                    <h5 className="text-center text-[1rem] text-black dark:text-white">
                                        {t('task-creation.proposed')}
                                    </h5>
                                    <div className="flex items-center justify-start gap-2">
                                        <Input
                                            name="price"
                                            errorMessage={errors.price}
                                            variant="bordered"
                                            radius="full"
                                            placeholder="1000"
                                            color="primary"
                                            type="number"
                                            className="w-36"
                                            value={data.price}
                                            onClearError={clearErrors}
                                            onValueChange={(value) => setData('price', value)}
                                        />
                                        <h4 className="mt-1 pb-2.5 text-center text-[1.25rem] font-[500] text-black dark:text-white">
                                            {t('task-creation.currency')}
                                        </h4>
                                    </div>
                                    <div className="flex items-start gap-2.5">
                                        <Checkbox
                                            isSelected={data.negotiable}
                                            onValueChange={(value) => setData('negotiable', value)}
                                            size="sm"
                                            color="primary"
                                            className="mr-2"
                                        >
                                            <h4 className="text-muted group-has group-data-[selected=true]:text-primary text-base font-medium">
                                                {t('task-creation.negotiable')}
                                            </h4>
                                        </Checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="mt-1 text-[0.875rem] font-medium">
                            {t('task-creation.warnings')}
                        </h4>
                        <Divider className="bg-muted sm:hidden" />
                        <div className="flex flex-col-reverse items-center justify-between gap-5.75 sm:flex-row">
                            <Button
                                type="submit"
                                isLoading={processing}
                                size="lg"
                                className="bg-primary flex flex-row rounded-[2rem] px-[5.46875rem] py-[1.3125rem] text-xl font-semibold"
                            >
                                {t('task-creation.publish')}
                            </Button>
                            <h4 className="text-muted text-[0.875rem] font-medium">
                                {t('task-creation.rules')}
                            </h4>
                        </div>
                    </div>
                </Form>

                <div
                    className={cn(
                        'border-muted flex flex-col items-center gap-y-6.25 border-t px-4 py-10 xl:border-t-0 xl:border-l',
                        employee && 'p-0',
                    )}
                >
                    {employee ? (
                        <FavoriteEmployeesSM
                            className="bg-primary/10 w-full rounded-none xl:rounded-br-2xl"
                            id={employee.id}
                            name={employee.name}
                            photo={employee.avatar}
                            totalReviews={0}
                            positiveReviews={0}
                            lastVisit={new Date()}
                        />
                    ) : (
                        <>
                            <h3 className="flex flex-col text-center text-xl font-semibold dark:text-white">
                                {t('task-creation.top-employees')}
                            </h3>
                            <div className="hidden flex-col gap-6.25 xl:flex">
                                {employees?.map((employee) => (
                                    <FavoriteEmployeesSM
                                        key={employee.id}
                                        id={employee.id}
                                        name={employee.name}
                                        photo={employee.avatar}
                                        totalReviews={0}
                                        positiveReviews={0}
                                        lastVisit={new Date()}
                                        subCategoryId={subCategory.id}
                                        routerOptions={{ preserveState: true }}
                                    />
                                ))}
                            </div>
                            <Carousel className="w-full xl:hidden">
                                <CarouselContent className="-ml-4">
                                    {employees?.map((employee) => (
                                        <CarouselItem
                                            key={employee.id}
                                            className="w-fit basis-2/3 pl-4"
                                        >
                                            <FavoriteEmployeesSM
                                                id={employee.id}
                                                name={employee.name}
                                                photo={employee.avatar}
                                                totalReviews={0}
                                                positiveReviews={0}
                                                lastVisit={new Date()}
                                                subCategoryId={subCategory.id}
                                                routerOptions={{
                                                    preserveState: true,
                                                }}
                                            />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                            <Link
                                underline="always"
                                className="text-center text-xl font-medium text-[#929292] dark:text-[#A7A7A7]"
                            >
                                {t('task-creation.show-more')}
                            </Link>{' '}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
