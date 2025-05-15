import Button from '@/Components/Shared/Button';
import {
    BreadcrumbItem,
    Breadcrumbs,
    Checkbox,
    Divider,
    Input,
    Link,
    Radio,
    RadioGroup,
    Select,
    SelectItem,
    Textarea,
} from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import FavoriteEmployeesSM from '@/Components/FavoriteEmployeesSM';
import React from 'react';
import DateSelector from '@/Components/DateSelector';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/Components/Shared/Carousel';

export default function TaskCreationPage() {
    const { t } = useLaravelReactI18n();

    const cities = [
        { key: 'kyiv', label: 'Київ' },
        { key: 'odessa', label: 'Одеса' },
        { key: 'kharkov', label: 'Харків' },
        { key: 'zaporizha', label: 'Запоріжжюя' },
        { key: 'lviv', label: 'Львів' },
        { key: 'donetsk', label: 'Донецк' },
    ];

    const districts = [
        { key: 'pecherskiiy', label: 'Печерський' },
        { key: 'obolonskiiy', label: 'Обольнський' },
        { key: 'podolskiiy', label: 'Поділський' },
    ];

    const [selected, setSelected] = React.useState('3-part');
    const [selected2, setSelected2] = React.useState('cash');

    const [selected3, setSelected3] = React.useState('option-1');

    return (
        <div className="bg-surface flex min-h-full w-full max-w-[87.5rem] flex-col xl:flex-row">
            <div className="flex w-full flex-col px-4">
                <div className="border-muted flex flex-col items-center gap-2.5 border-b pt-10 pb-10">
                    <h2 className="text-center text-[2rem] font-semibold">
                        {t('task-creation.select-category')}
                    </h2>
                    <Breadcrumbs
                        className="gap-2.5 text-[1.25rem] font-medium"
                        size="lg"
                        classNames={{
                            list: 'justify-center',
                        }}
                    >
                        <BreadcrumbItem className="gap-2.5 text-[1.25rem] font-medium">
                            {t('task-creation.all-categories')}
                        </BreadcrumbItem>
                        <BreadcrumbItem className="gap-2.5 text-[1.25rem] font-medium">
                            {t('task-creation.furniture-work')}
                        </BreadcrumbItem>
                        <BreadcrumbItem className="gap-2.5 text-[1.25rem] font-medium">
                            {t('task-creation.furniture-assembly')}
                        </BreadcrumbItem>
                        <BreadcrumbItem className="gap-2.5 text-[1.25rem] font-medium">
                            {t('task-creation.table-assembly')}
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
                            className="w-full max-w-[40rem]"
                            color="primary"
                            variant="bordered"
                            radius="lg"
                            minRows={8}
                        />
                        <div className="flex flex-row gap-17.5">
                            <Link href="#" className="text-muted text-base font-medium">
                                {t('task-creation.confidential-data')}
                            </Link>
                            <Link href="#" className="text-primary text-base font-medium">
                                {t('task-creation.add-file')}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="border-muted flex flex-col items-center gap-6.25 border-b py-10">
                    <h2 className="text-[2rem] font-semibold">
                        {t('task-creation.order-address')}
                    </h2>
                    <div className="grid w-full grid-cols-1 flex-row items-center justify-between gap-2.5 sm:w-auto sm:grid-cols-[auto_minmax(0,25rem)] [&>h4]:mt-4 sm:[&>h4]:mt-0">
                        <h4 className="text-base font-medium">{t('task-creation.city')}</h4>
                        <Select
                            radius="full"
                            labelPlacement="outside"
                            variant="bordered"
                            defaultSelectedKeys={['kyiv']}
                            size="lg"
                            color="primary"
                            className="min-w-48"
                        >
                            {cities.map((city) => (
                                <SelectItem key={city.key}>{city.label}</SelectItem>
                            ))}
                        </Select>

                        <h4 className="text-base font-medium">{t('task-creation.district')}</h4>
                        <Select
                            radius="full"
                            labelPlacement="outside"
                            variant="bordered"
                            color="primary"
                            defaultSelectedKeys={['pecherskiiy']}
                            size="lg"
                            className="min-w-48"
                        >
                            {districts.map((district) => (
                                <SelectItem key={district.key}>{district.label}</SelectItem>
                            ))}
                        </Select>

                        <h4 className="text-base font-medium">{t('task-creation.street')}</h4>
                        <Input
                            placeholder={t('task-creation.exmp-str')}
                            variant="bordered"
                            radius="full"
                            size="lg"
                            color="primary"
                        />

                        <h4 className="text-base font-medium">{t('task-creation.house')}</h4>
                        <Input
                            placeholder={t('task-creation.exmp-home')}
                            variant="bordered"
                            radius="full"
                            size="lg"
                            color="primary"
                        />

                        <h4 className="text-base font-medium">{t('task-creation.adrs-details')}</h4>
                        <Input
                            placeholder={t('task-creation.exmp-dtls')}
                            variant="bordered"
                            radius="full"
                            size="lg"
                            color="primary"
                        />
                    </div>
                </div>
                <div className="border-muted flex flex-col items-center gap-6.25 border-b py-10">
                    <h2 className="text-[2rem] font-semibold">{t('task-creation.fulfill-date')}</h2>
                    <DateSelector />
                    <h4 className="text-base font-medium">{t('task-creation.briefly')}</h4>
                    <RadioGroup
                        value={selected}
                        onValueChange={setSelected}
                        orientation="horizontal"
                        defaultValue="3-part"
                        color="primary"
                        classNames={{ wrapper: 'justify-center gap-6' }}
                    >
                        <Radio value="any-time">{t('task-creation.any-time')}</Radio>
                        <Radio value="1-part">{t('task-creation.1-part')}</Radio>
                        <Radio value="2-part">{t('task-creation.2-part')}</Radio>
                        <Radio value="3-part">{t('task-creation.3-part')}</Radio>
                    </RadioGroup>
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
                                    className="mb-1"
                                    variant="bordered"
                                    radius="full"
                                    size="lg"
                                    color="primary"
                                    minRows={1}
                                />

                                <h4 className="text-base font-medium dark:text-white">
                                    {t('task-creation.method')}
                                </h4>
                                <RadioGroup
                                    value={selected2}
                                    onValueChange={setSelected2}
                                    classNames={{
                                        wrapper: 'flex-row gap-4 sm:gap-2 sm:flex-col',
                                    }}
                                    defaultValue="cash"
                                    color="primary"
                                >
                                    <Radio value="cash">{t('task-creation.cash')}</Radio>
                                    <Radio value="card">{t('task-creation.card')}</Radio>
                                </RadioGroup>

                                <h4 className="text-base font-medium dark:text-white">
                                    {t('task-creation.select-options')}
                                </h4>
                                <RadioGroup
                                    value={selected3}
                                    onValueChange={setSelected3}
                                    classNames={{
                                        wrapper: 'flex-row gap-4 sm:gap-2 sm:flex-col',
                                    }}
                                    defaultValue="option1"
                                    color="primary"
                                >
                                    <Radio value="option1">{t('task-creation.option-1')}</Radio>
                                    <Radio value="option2">{t('task-creation.option-2')}</Radio>
                                    <Radio value="option3">{t('task-creation.option-3')}</Radio>
                                </RadioGroup>
                            </div>

                            <div className="flex h-fit w-fit flex-col items-start gap-2 rounded-[1.25rem] bg-[#00CCFF1A] px-[2rem] py-[1rem]">
                                <h5 className="text-center text-[1rem] text-black dark:text-white">
                                    {t('task-creation.proposed')}
                                </h5>
                                <div className="flex items-center justify-start gap-2">
                                    <Input
                                        variant="bordered"
                                        radius="full"
                                        placeholder="1000"
                                        color="primary"
                                        type="number"
                                        className="w-36"
                                    />
                                    <h4 className="mt-1 pb-2.5 text-center text-[1.25rem] font-[500] text-black dark:text-white">
                                        {t('task-creation.currency')}
                                    </h4>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Checkbox
                                        defaultSelected
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
            </div>

            <div className="border-muted flex flex-col items-center gap-y-6.25 border-t px-4 py-10 xl:border-t-0 xl:border-l">
                <h3 className="flex flex-col text-center text-xl font-semibold dark:text-white">
                    {t('task-creation.top-employees')}
                </h3>
                <div className="hidden flex-col gap-6.25 xl:flex">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <FavoriteEmployeesSM key={i} />
                    ))}
                </div>
                <Carousel className="w-full xl:hidden">
                    <CarouselContent className="-ml-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <CarouselItem key={i} className="w-fit basis-2/3 pl-4">
                                <FavoriteEmployeesSM />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <Link
                    href="#"
                    underline="always"
                    className="text-center text-xl font-medium text-[#929292] dark:text-[#A7A7A7]"
                >
                    {t('task-creation.show-more')}
                </Link>
            </div>
        </div>
    );
}
