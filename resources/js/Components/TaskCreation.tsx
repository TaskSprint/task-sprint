import Button from '@/Components/Shared/Button';
import { Link } from '@heroui/link';
import { Avatar } from '@heroui/avatar';
import { Divider } from "@heroui/divider";
import { useLaravelReactI18n } from 'laravel-react-i18n';
import HeartCheckbox from "@/Components/Icons/HeartCheckbox";

export default function TaskCreationPage() {
    const { t } = useLaravelReactI18n();
    const absenceTime = "2 години"; /*заглушка на время вместо CurrentTimeStamp - LastVisitTime*/


    return (
        <div className="flex flex-row w-[90rem] h-60 min-h-[140rem] border-b gap-3 py-15 px-1.5 dark:bg-[#2c2c2c]
        rounded-[1.25rem]">
            <div>
                <div className="flex flex-col w-[60rem] h-[273,1875rem]">

                </div>
            </div>
            <div  className="flex flex-col m-3  gap-5 w-[21.25rem] h-[15rem] items-start">
                <h2 className="flex flex-col m-3  gap-6.25 w-[25.25rem] h-[15rem] items-start">{t('TaskCreation.top-employees')}</h2>
                <div>
                    <a><Avatar className="size-21.5 justify-start content-start"
                               src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                               as={Link}
                               href="#"
                    ></Avatar>
                    </a>
                    <div className="flex flex-row w-[10.75rem] h-11.5 gap-5">
                        <div className="flex flex-row gap-2 h-5">
                            <h2><Link className="text-black dark:text-white focus:text-gray-500 text-xl font-bold" href="#">Коваль А.</Link></h2>
                            <p>
                                <HeartCheckbox />
                            </p>
                        </div>
                        <h3 className="content-start w-[13.3125rem] text-[1.19rem] font-medium text-[#929292] dark:text-[#A7A7A7]"
                        >{t('fav-employees.last-visit', { absence: absenceTime } )}</h3>
                        <div className="relative flex flex-col gap-5 w-[14rem] h-[2.875rem] items-center">
                            <div className="flex flex-row gap-2.5 w-[14rem] h-[2.875rem] items-start font-medium">
                                <div className="flex flex-col">
                                    <h2 className="text-[1.25rem] dark:text-white">12456</h2>
                                    <h3 className="text-[0.75rem] text-primary">{t('fav-employees.reviews')}</h3>
                                </div>
                                <Divider className="bg-primary max-h-11.5" orientation="vertical"/>
                                <div className="flex flex-col">
                                    <h2 className="text-[1.25rem] dark:text-white">100%</h2>
                                    <h3 className="text-[0.75rem] text-gray-500 dark:text-[#A7A7A7]">{t('fav-employees.positive')}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Button
                        as={Link}
                        href="#"
                        className="flex flex-row w-64 h-fit bg-white bg-primary rounded-[2.25rem] px-4 py-3 text-xl font-semibold"
                    >
                        {t('task-creation.offer')}
                    </Button>
                </div>
            </div>

        </div>
    );
}

