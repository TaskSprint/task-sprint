import Button from '@/Components/Shared/Button';
import { Link } from '@heroui/link';
import { Avatar } from '@heroui/avatar';
import { Divider } from "@heroui/divider";
import { useLaravelReactI18n } from 'laravel-react-i18n';
import HeartCheckbox from "@/Components/Icons/HeartCheckbox";

export default function FavoriteEmployeesSM() {
    const { t } = useLaravelReactI18n();
    const absenceTime = "2 години"; /*заглушка на время вместо CurrentTimeStamp - LastVisitTime*/

    return (
        <div className="relative flex flex-col w-[21.25rem] min-h-[15rem] gap-2.5 rounded-[1.25rem] border-1 border-primary dark:color-white items-start">
            <div className="flex flex-row mb-5 h-[9rem]">
                <div><Avatar className="size-21.5 justify-start content-start ml-2.75 mt-3.5"
                             src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                             as={Link}
                             href="#"></Avatar>
                </div>
                <div className="flex flex-col w-[10.75rem] mt-6 ml-3.25 h-11.5 gap-5">
                    <div className="flex flex-row gap-2.5 h-5">
                        <h2><Link className="dark:text-white focus:text-gray-500 text-xl font-bold" href="#">Коваль А.</Link></h2>
                        <p>
                            <HeartCheckbox />
                        </p>
                    </div>
                    <h3 className="content-start w-[13.3125rem] h-[1.1875rem] text-[0.875rem] font-medium text-[#929292] dark:text-[#A7A7A7]"
                    >{t('task-creation.last-visit', { absence: absenceTime } )}</h3>
                    <div className="flex flex-row gap-2.5 w-[14rem] pl-1.75 h-[2.875rem] items-center font-medium">
                        <div className="flex flex-col">
                            <h2 className="text-[1.25rem] dark:text-white">12456</h2>
                            <h3 className="text-[0.75rem] text-primary">{t('task-creation.reviews')}</h3>
                        </div>
                        <Divider className="bg-primary max-h-11.5" orientation="vertical"/>
                        <div className="flex flex-col">
                            <h2 className="text-[1.25rem] dark:text-white">100%</h2>
                            <h3 className="text-[0.75rem] text-gray-500 dark:text-[#A7A7A7]">{t('task-creation.positive')}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <p className=""><Button
                as={Link}
                href="#"
                className="flex flex-col bg-primary rounded-[2.25rem] ml-10.25 px-4 py-3 text-xl font-semibold"
            >
                {t('task-creation.offer')}
            </Button></p>
        </div>
    );
}

