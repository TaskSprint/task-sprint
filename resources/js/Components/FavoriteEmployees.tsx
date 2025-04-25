import Button from '@/Components/Shared/Button';
import { Link } from '@heroui/link';
import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";
import { useLaravelReactI18n } from 'laravel-react-i18n';
import { useState } from "react";


export default function FavoriteEmployees() {
    const { t } = useLaravelReactI18n();
    const absence = 2; /*заглушка на время вместо CurrentTimeStamp - LastVisitTime*/
    const [checked, setChecked] = useState(false);


    return (
        <div className="flex flex-row w-[60rem] h-60 border-b gap-3 ml-3.5 py-10 px-25">
            <div className="flex flex-row gap-5 w-[45rem] h-[10rem] items-start">
                <a><Avatar className="size-max justify-start content-start"
                           src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/></a>
                    <div className="flex flex-col w-[16rem] h-40 gap-5">
                        <div className="flex flex-row gap-2">
                            <h2 className="text-2xl font-bold">Коваль А.</h2>
                            <p>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                        className="sr-only"
                                    />
                                    <svg
                                        viewBox="0 0 24 24"
                                        className={`w-8 h-8 transition-all duration-200 ${
                                            checked ? "fill-sky-400 stroke-sky-400" : "fill-transparent stroke-sky-400"
                                        } stroke-[3px]`}
                                    >
                                        <path d="M12 21s-6-4.35-9-8.15C-1 6.6 4.8 0 12 6.2 19.2 0 25 6.6 21 12.85 18 16.65 12 21 12 21z" />
                                    </svg>
                                </label>
                            </p>
                        </div>
                            <h3 className="content-start text-base font-medium text-gray-500">Був(ла) на сайті { absence } години назад</h3>
                    </div>
            </div>
            <div className="relative flex flex-col gap-5 w-[20rem] h-[10rem] items-start">
                <Button
                as={Link}
                href="#"
                className="h-fit rounded-[2.25rem] px-10 py-5 text-xl font-semibold text-white"
                color="primary"
                >Запропонувати роботу</Button>
                <div className="flex flex-row gap-2.5 w-[14rem] h-[4.5rem] items-start font-medium">
                    <div className="flex flex-col">
                        <h2 className="text-[2rem]">12456</h2>
                        <h3 className="text-xl text-primary">відгуків</h3>
                    </div>
                    <Divider className="text-primary" orientation="vertical"/>
                    <div className="flex flex-col">
                        <h2 className="text-[2rem]">100%</h2>
                        <h3 className="text-xl text-gray-500">позитивних</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
