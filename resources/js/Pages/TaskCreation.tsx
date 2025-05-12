import Button from '@/Components/Shared/Button';
import {
    BreadcrumbItem,
    Breadcrumbs,
    Checkbox,
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
import DateScroller from '@/Components/DateSelector';

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
        <div className="flex min-h-[112rem] min-w-[87.5rem] flex-row dark:bg-[#2c2c2c]">
            {/* первый столбик */}
            <div className="flex w-[60rem] flex-col">
                {/* первый блок */}
                <div className="flex min-h-[12.25rem] flex-col items-center gap-2.5 border-b border-[#C6C6C6] pt-10 pb-10 dark:text-white">
                    <h2 className="text-[2rem] font-semibold">
                        {t('task-creation.select-category')}
                    </h2>
                    <Breadcrumbs
                        className="h-[1.75rem] gap-2.5 text-[1.25rem] font-medium"
                        size="lg"
                    >
                        <BreadcrumbItem className="h-[1.6875rem] gap-2.5 text-[1.25rem] font-medium">
                            {t('task-creation.all-categories')}
                        </BreadcrumbItem>
                        <BreadcrumbItem className="h-[1.6875rem] gap-2.5 text-[1.25rem] font-medium">
                            {t('task-creation.furniture-work')}
                        </BreadcrumbItem>
                        <BreadcrumbItem className="h-[1.6875rem] gap-2.5 text-[1.25rem] font-medium">
                            {t('task-creation.furniture-assembly')}
                        </BreadcrumbItem>
                        <BreadcrumbItem className="h-[1.6875rem] gap-2.5 text-[1.25rem] font-medium">
                            {t('task-creation.table-assembly')}
                        </BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                {/* второй блок */}
                <div className="flex flex-col items-center gap-6.25 border-b py-10 pt-10">
                    <h2 className="text-[2rem] font-semibold dark:text-white">
                        {t('task-creation.order-details')}
                    </h2>
                    <div className="flex flex-col items-center gap-2.5">
                        <h4 className="pb-2.5 text-base font-medium dark:text-white">
                            {t('task-creation.briefly')}
                        </h4>
                        <Textarea
                            className="w-[34.625rem]"
                            color="primary"
                            variant="bordered"
                            radius="lg"
                        />
                    </div>
                    <div className="mb-3 flex flex-col items-center gap-5">
                        <h4 className="mt-6 pb-0.5 text-base font-medium">
                            {t('task-creation.description')}:
                        </h4>
                        <Textarea
                            className="min-h-[10rem] w-[40rem]"
                            color="primary"
                            variant="bordered"
                            radius="lg"
                            minRows={8}
                        />
                        <div className="flex h-5.5 min-w-[20.0625rem] flex-row gap-17.5">
                            <Link
                                href="#"
                                className="text-base font-medium text-[#929292] dark:text-[#A7A7A7]"
                            >
                                {t('task-creation.confidential-data')}
                            </Link>
                            <Link href="#" className="text-primary text-base font-medium">
                                {t('task-creation.add-file')}
                            </Link>
                        </div>
                    </div>
                </div>
                {/* третий блок */}
                <div className="flex flex-col items-center gap-6.25 border-b py-10">
                    <h2 className="text-[2rem] font-semibold dark:text-white">
                        {t('task-creation.order-address')}
                    </h2>
                    {/* 1 строка */}
                    <div className="flex h-10 w-125 flex-row items-center justify-between gap-2.5">
                        <h4 className="mt-1 pb-2.5 text-base font-medium dark:text-white">
                            {t('task-creation.city')}
                        </h4>
                        <div className="flex w-100 flex-row justify-end gap-4">
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
                        </div>
                    </div>
                    {/* 2 строка */}
                    <div className="flex h-10 w-125 flex-row items-center justify-between gap-2.5">
                        <h4 className="mt-1 pb-2.5 text-base font-medium dark:text-white">
                            {t('task-creation.district')}
                        </h4>
                        <div className="w-100 justify-end gap-4">
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
                        </div>
                    </div>
                    {/* 3 строка */}
                    <div className="flex h-10 w-125 flex-row items-center justify-between gap-2.5">
                        <h4 className="mt-1 pb-2.5 text-base font-medium dark:text-white">
                            {t('task-creation.street')}
                        </h4>
                        <div className="h-10 w-100 justify-end">
                            <Textarea
                                className="mb-1"
                                placeholder="Наприклад: вул. Казимира Малевича"
                                variant="bordered"
                                radius="full"
                                size="lg"
                                color="primary"
                                minRows={1}
                            />
                        </div>
                    </div>
                    {/* 4 строка */}
                    <div className="flex h-10 w-125 flex-row items-start justify-between">
                        <h4 className="mt-1 pb-2.5 text-base font-medium dark:text-white">
                            {t('task-creation.house')}
                        </h4>
                        <div className="w-100 justify-end">
                            <Textarea
                                className="mb-1"
                                placeholder="Наприклад: будинок 234-А, кв. 12"
                                variant="bordered"
                                radius="full"
                                size="lg"
                                color="primary"
                                minRows={1}
                            />
                        </div>
                    </div>
                    {/* 5 строка */}
                    <div className="mb-6 flex h-10 w-125 flex-row items-start justify-between">
                        <h4 className="mt-1 w-20 pb-2.5 text-base font-medium dark:text-white">
                            {t('task-creation.adrs-details')}
                        </h4>
                        <div className="w-100 justify-end">
                            <Textarea
                                className="mb-1 text-base"
                                placeholder="Наприклад: код-домофону - 111"
                                variant="bordered"
                                radius="full"
                                size="lg"
                                color="primary"
                                minRows={1}
                            />
                        </div>
                    </div>
                </div>
                {/* четвертый блок */}
                <div className="flex flex-col items-center gap-6.25 border-b py-10">
                    <h2 className="text-[2rem] font-semibold">{t('task-creation.fulfill-date')}</h2>
                    <DateScroller />
                    <h4 className="text-base font-medium dark:text-white">
                        {t('task-creation.briefly')}
                    </h4>
                    <div className="h-5.5">
                        <RadioGroup
                            value={selected}
                            onValueChange={setSelected}
                            orientation="horizontal"
                            defaultValue="3-part"
                            color="primary"
                        >
                            <Radio value="any-time">{t('task-creation.any-time')}</Radio>
                            <Radio value="1-part">{t('task-creation.1-part')}</Radio>
                            <Radio value="2-part">{t('task-creation.2-part')}</Radio>
                            <Radio value="3-part">{t('task-creation.3-part')}</Radio>
                        </RadioGroup>
                    </div>
                </div>
                {/* пятый блок */}
                <div className="flex min-h-[39.125rem] flex-col items-center gap-6.25 border-b py-10">
                    <h2 className="text-[2rem] font-semibold">{t('task-creation.payment')}</h2>
                    <div className="flex min-h-[15.625rem] min-w-[48.5rem] flex-col justify-between">
                        <div className="flex h-10 w-125 gap-5.75">
                            <div className="flex h-10 w-125 flex-col gap-8">
                                <div className="flex h-10 w-125 flex-row justify-between gap-5.75">
                                    <h4 className="mt-1 pb-2.5 text-base font-medium dark:text-white">
                                        {t('task-creation.payment-details')}
                                    </h4>
                                    <div className="w-100 justify-end">
                                        <Textarea
                                            className="mb-1"
                                            variant="bordered"
                                            radius="full"
                                            size="lg"
                                            color="primary"
                                            minRows={1}
                                        />
                                    </div>
                                </div>

                                <div className="mt-2 flex h-10 w-125 flex-row justify-between gap-5.75">
                                    <h4 className="mt-1 pb-2.5 text-base font-medium dark:text-white">
                                        {t('task-creation.method')}
                                    </h4>
                                    <div className="ml-5 flex h-[6rem] w-125 flex-row gap-[3,375rem]">
                                        <RadioGroup
                                            value={selected2}
                                            onValueChange={setSelected2}
                                            defaultValue="cash"
                                            color="primary"
                                        >
                                            <Radio value="cash">{t('task-creation.cash')}</Radio>
                                            <Radio value="card">{t('task-creation.card')}</Radio>
                                        </RadioGroup>
                                    </div>
                                </div>

                                <div className="mt-2 flex h-10 w-125 flex-row justify-between gap-5.75">
                                    <h4 className="mt-1 h-[4.125rem] w-[4.9375rem] pb-2.5 text-base font-medium dark:text-white">
                                        {t('task-creation.select-options')}
                                    </h4>
                                    <div className="ml-7.5 flex h-[6rem] w-100 flex-row content-end gap-[3.375rem]">
                                        <RadioGroup
                                            value={selected3}
                                            onValueChange={setSelected3}
                                            defaultValue="option1"
                                            color="primary"
                                        >
                                            <Radio value="option1">
                                                {t('task-creation.option-1')}
                                            </Radio>
                                            <Radio value="option2">
                                                {t('task-creation.option-2')}
                                            </Radio>
                                            <Radio value="option3">
                                                {t('task-creation.option-3')}
                                            </Radio>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </div>

                            <div className="ml-4 flex min-h-[9rem] w-[15.6875rem] flex-col items-start rounded-[1.25rem] bg-[#00CCFF1A] px-[2rem] py-[1rem]">
                                <h5 className="text-center text-[1rem] font-[400] text-black dark:text-white">
                                    {t('task-creation.proposed')}
                                </h5>
                                <div className="my-3 flex h-10 items-center justify-start gap-2">
                                    <div className="w-[8.375rem] items-start">
                                        <Textarea
                                            className="mb-1"
                                            variant="bordered"
                                            radius="full"
                                            size="lg"
                                            minRows={1}
                                            placeholder="1000"
                                            color="primary"
                                        />
                                    </div>
                                    <h4 className="mt-1 pb-2.5 text-center text-[1.25rem] font-[500] text-black dark:text-white">
                                        {t('task-creation.currency')}
                                    </h4>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Checkbox
                                        defaultSelected
                                        size="sm"
                                        radius="lg"
                                        color="primary"
                                        className="mr-2"
                                    >
                                        <h4 className="text-base font-medium text-[#00CCFF]">
                                            {t('task-creation.negotiable')}
                                        </h4>
                                    </Checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[4.75rem] w-[48rem]">
                        <h4 className="mt-1 text-[0.875rem] font-medium">
                            {t('task-creation.warnings')}
                        </h4>
                    </div>
                    <div className="mt-[3rem] mb-5 flex h-[4.3125rem] max-h-10 w-[44rem] flex-row items-center justify-between gap-5.75">
                        <Button className="bg-primary color-[#FFFFFF] hover:color-[#FFFFFF] mt-1 ml-10 flex flex-row rounded-[2rem] px-[5.46875rem] py-[1.3125rem] text-xl font-semibold">
                            {t('task-creation.publish')}
                        </Button>
                        <h4 className="text-[0.875rem] font-medium">{t('task-creation.rules')}</h4>
                    </div>
                </div>
            </div>

            {/* второй столбик */}
            <div className="ml-2.25 flex min-h-[112rem] w-[24.8rem] flex-col content-start items-center gap-y-6.25 border-s-1 border-[#C6C6C6] px-1.5 py-15">
                <h3 className="flex h-[1.6875rem] w-[23.875rem] flex-col text-center text-xl font-semibold dark:text-white">
                    {t('task-creation.top-employees')}
                </h3>
                <FavoriteEmployeesSM />
                <FavoriteEmployeesSM />
                <FavoriteEmployeesSM />
                <FavoriteEmployeesSM />
                <FavoriteEmployeesSM />
                <FavoriteEmployeesSM />
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
