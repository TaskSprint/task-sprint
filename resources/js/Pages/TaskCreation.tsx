import Button from '@/Components/Shared/Button';
import { Link } from '@heroui/link';
import { Breadcrumbs, BreadcrumbItem } from '@heroui/react';
import {Textarea} from "@heroui/input";
import {Select, SelectItem} from "@heroui/react";
import { useLaravelReactI18n } from 'laravel-react-i18n';
import FavoriteEmployeesSM from '@/Components/FavoriteEmployeesSM';
import React from 'react';
import { RadioGroup, Radio } from '@heroui/radio';
import DateScroller from '@/Components/DateSelector';
import {Checkbox} from "@heroui/react";


export default function TaskCreationPage() {
    const { t } = useLaravelReactI18n();

    const cities = [
        {key: "kyiv", label: "Київ"},
        {key: "odessa", label: "Одеса"},
        {key: "kharkov", label: "Харків"},
        {key: "zaporizha", label: "Запоріжжюя"},
        {key: "lviv", label: "Львів"},
        {key: "donetsk", label: "Донецк"}
    ];

    const districts = [
        {key: "pecherskiiy", label: "Печерський"},
        {key: "obolonskiiy", label: "Обольнський"},
        {key: "podolskiiy", label: "Поділський"}
    ];

    const [selected, setSelected] = React.useState("3-part")
    const [selected2, setSelected2] = React.useState("cash")

    const [selected3, setSelected3] = React.useState("option-1")

    return (
        <div className="flex flex-row min-w-[87.5rem] min-h-[112rem]  dark:bg-[#2c2c2c]">
            {/* первый столбик */ }
            <div className="flex flex-col w-[60rem]">
                {/* первый блок */ }
                <div className="flex flex-col min-h-[12.25rem] pt-10 pb-10 gap-2.5 items-center dark:text-white border-[#C6C6C6] border-b">
                    <h2 className="font-semibold text-[2rem]">{t('task-creation.select-category')}</h2>
                    <Breadcrumbs
                        className="gap-2.5 h-[1.75rem] text-[1.25rem] font-medium"
                        size="lg"
                    >
                        <BreadcrumbItem className="gap-2.5 h-[1.6875rem] text-[1.25rem] font-medium">{t('task-creation.all-categories')}</BreadcrumbItem>
                        <BreadcrumbItem className="gap-2.5 h-[1.6875rem] text-[1.25rem] font-medium">{t('task-creation.furniture-work')}</BreadcrumbItem>
                        <BreadcrumbItem className="gap-2.5 h-[1.6875rem] text-[1.25rem] font-medium">{t('task-creation.furniture-assembly')}</BreadcrumbItem>
                        <BreadcrumbItem className="gap-2.5 h-[1.6875rem] text-[1.25rem] font-medium">{t('task-creation.table-assembly')}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                {/* второй блок */ }
                <div className="flex flex-col gap-6.25 pt-10 py-10 items-center border-b">
                    <h2 className="font-semibold text-[2rem] dark:text-white">{t('task-creation.order-details')}</h2>
                    <div className="flex flex-col gap-2.5 items-center">
                        <h4 className="font-medium text-base pb-2.5 dark:text-white">{t('task-creation.briefly')}</h4>
                        <Textarea
                            className="w-[34.625rem]"
                            color="primary"
                            variant="bordered"
                            radius="lg"
                        />
                    </div>
                    <div className="flex flex-col gap-5 mb-3  items-center">
                        <h4 className="font-medium text-base mt-6 pb-0.5">{t('task-creation.description')}:</h4>
                        <Textarea
                            className="w-[40rem] min-h-[10rem]"
                            color="primary"
                            variant="bordered"
                            radius="lg"
                            minRows={8}
                        />
                        <div className="flex flex-row h-5.5 min-w-[20.0625rem] gap-17.5">
                            <Link
                                href="#"
                                className="text-base font-medium text-[#929292] dark:text-[#A7A7A7]">
                                {t('task-creation.confidential-data')}
                            </Link>
                            <Link
                                href="#"
                                className="text-base font-medium text-primary">
                                {t('task-creation.add-file')}
                            </Link>
                        </div>
                    </div>
                </div>
                {/* третий блок */ }
                <div className="flex flex-col py-10 items-center border-b gap-6.25">
                    <h2 className="font-semibold text-[2rem] dark:text-white">{t('task-creation.order-address')}</h2>
                    {/* 1 строка */ }
                    <div className="flex flex-row w-125 h-10 gap-2.5 items-center justify-between">
                        <h4 className="font-medium text-base pb-2.5 mt-1 dark:text-white">{t('task-creation.city')}</h4>
                        <div className="flex flex-row w-100 gap-4 justify-end">
                            <Select
                                radius="full"
                                labelPlacement="outside"
                                variant="bordered"
                                defaultSelectedKeys={['kyiv']}
                                size="lg"
                                color="primary"
                                className="min-w-48">
                                {cities.map((city) => (
                                    <SelectItem key={city.key}>{city.label}</SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    {/* 2 строка */ }
                    <div className="flex flex-row w-125 h-10 gap-2.5 items-center justify-between">
                        <h4 className="font-medium text-base pb-2.5 mt-1 dark:text-white">{t('task-creation.district')}</h4>
                        <div className="w-100 gap-4 justify-end">
                            <Select
                                radius="full"
                                labelPlacement="outside"
                                variant="bordered"
                                color="primary"
                                defaultSelectedKeys={['pecherskiiy']}
                                size="lg"
                                className="min-w-48 ">
                                {districts.map((district) => (
                                    <SelectItem key={district.key}>{district.label}</SelectItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    {/* 3 строка */ }
                    <div className="flex flex-row w-125 h-10 gap-2.5 items-center justify-between">
                        <h4 className="font-medium text-base pb-2.5 mt-1 dark:text-white">{t('task-creation.street')}</h4>
                        <div className="w-100 h-10 justify-end">
                            <Textarea
                                className="mb-1 "
                                placeholder="Наприклад: вул. Казимира Малевича"
                                variant="bordered"
                                radius="full"
                                size="lg"
                                color="primary"
                                minRows={1}
                            />
                        </div>
                    </div>
                    {/* 4 строка */ }
                    <div className="flex flex-row w-125 h-10 items-start justify-between">
                        <h4 className="font-medium text-base pb-2.5 mt-1 dark:text-white">{t('task-creation.house')}</h4>
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
                    {/* 5 строка */ }
                    <div className="flex flex-row w-125 h-10 items-start mb-6 justify-between">
                        <h4 className="w-20 font-medium text-base pb-2.5 mt-1 dark:text-white">{t('task-creation.adrs-details')}</h4>
                        <div className="w-100 justify-end">
                            <Textarea
                                className="text-base mb-1"
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
                        {/* четвертый блок */ }
                    <div className="flex flex-col gap-6.25 py-10 items-center border-b">
                        <h2 className="font-semibold text-[2rem]">{t('task-creation.fulfill-date')}</h2>
                        <DateScroller />
                        <h4 className="font-medium text-base dark:text-white">{t('task-creation.briefly')}</h4>
                        <div className="h-5.5">
                            <RadioGroup
                                value = { selected }
                                onValueChange = { setSelected }
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
                        {/* пятый блок */ }
                    <div className="flex flex-col min-h-[39.125rem] gap-6.25 py-10 border-b items-center">
                        <h2 className="font-semibold text-[2rem]">{t('task-creation.payment')}</h2>
                        <div className="flex flex-col min-w-[48.5rem] min-h-[15.625rem] justify-between">
                            <div className="flex w-125 h-10 gap-5.75">
                                <div className="flex flex-col w-125 h-10 gap-8">
                                    <div className="flex flex-row w-125 h-10 gap-5.75 justify-between">
                                        <h4 className="font-medium text-base pb-2.5 mt-1 dark:text-white">{t('task-creation.payment-details')}</h4>
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

                                        <div className="flex flex-row w-125 h-10 gap-5.75 mt-2 justify-between">
                                            <h4 className="font-medium text-base pb-2.5 mt-1 dark:text-white">{t('task-creation.method')}</h4>
                                            <div className="flex flex-row w-125 h-[6rem] ml-5 gap-[3,375rem]">
                                                <RadioGroup
                                                    value = { selected2 }
                                                    onValueChange = { setSelected2 }
                                                    defaultValue="cash"
                                                    color="primary"
                                                >
                                                    <Radio value="cash">{t('task-creation.cash')}</Radio>
                                                    <Radio value="card">{t('task-creation.card')}</Radio>
                                                </RadioGroup>
                                            </div>
                                        </div>

                                            <div className="flex flex-row w-125 h-10 mt-2 gap-5.75 justify-between">
                                                <h4 className="font-medium text-base pb-2.5 mt-1 dark:text-white w-[4.9375rem] h-[4.125rem]">{t('task-creation.select-options')}</h4>
                                                <div className="flex flex-row w-100 h-[6rem] gap-[3.375rem] ml-7.5 content-end">
                                                    <RadioGroup
                                                        value = { selected3 }
                                                        onValueChange = { setSelected3 }
                                                        defaultValue="option1"
                                                        color="primary"
                                                    >
                                                        <Radio value="option1">{t('task-creation.option-1')}</Radio>
                                                        <Radio value="option2">{t('task-creation.option-2')}</Radio>
                                                        <Radio value="option3">{t('task-creation.option-3')}</Radio>
                                                    </RadioGroup>
                                                </div>
                                            </div>
                                </div>

                                <div className="flex flex-col w-[15.6875rem] min-h-[9rem] bg-[#00CCFF1A] items-start rounded-[1.25rem] py-[1rem] px-[2rem] ml-4">
                                    <h5 className="font-[400] text-[1rem] text-black dark:text-white text-center">{t('task-creation.proposed')}</h5>
                                    <div className="flex h-10 my-3 gap-2 justify-start items-center">
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
                                        <h4 className="pb-2.5 mt-1 font-[500] text-[1.25rem] text-black text-center dark:text-white">
                                            {t('task-creation.currency')}
                                        </h4>
                                    </div>
                                    <div className="flex gap-2.5 items-start">
                                        <Checkbox defaultSelected
                                                  size="sm"
                                                  radius="lg"
                                                  color="primary"
                                                  className="mr-2">
                                            <h4 className="text-base font-medium text-[#00CCFF]">{t('task-creation.negotiable')}</h4>
                                        </Checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="w-[48rem] h-[4.75rem]">
                                <h4 className="mt-1 font-medium text-[0.875rem]">{t('task-creation.warnings')}</h4>
                            </div>
                                <div className="flex flex-row w-[44rem] h-[4.3125rem] max-h-10 mb-5 gap-5.75 items-center justify-between mt-[3rem]">
                                    <Button className="flex flex-row ml-10 mt-1 text-xl font-semibold bg-primary rounded-[2rem] py-[1.3125rem] px-[5.46875rem]
                                     color-[#FFFFFF] hover:color-[#FFFFFF]">{t('task-creation.publish')}</Button>
                                    <h4 className="font-medium text-[0.875rem]">{t('task-creation.rules')}</h4>
                                </div>
                    </div>
                </div>

            {/* второй столбик */ }
                <div  className="flex flex-col ml-2.25 border-s-1 border-[#C6C6C6] py-15 px-1.5 gap-y-6.25 w-[24.8rem] min-h-[112rem] content-start items-center">
                    <h3 className="flex flex-col text-xl font-semibold w-[23.875rem] h-[1.6875rem] dark:text-white text-center">{t('task-creation.top-employees')}</h3>
                        <FavoriteEmployeesSM />
                        <FavoriteEmployeesSM />
                        <FavoriteEmployeesSM />
                        <FavoriteEmployeesSM />
                        <FavoriteEmployeesSM />
                        <FavoriteEmployeesSM />
                            <Link href="#" underline="always" className="text-center text-xl font-medium text-[#929292] dark:text-[#A7A7A7]">
                                {t('task-creation.show-more')}
                            </Link>
                </div>
        </div>
    );
}

