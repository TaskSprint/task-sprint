import Button from '@/Components/Shared/Button';
import { Link } from '@heroui/link';
import { Avatar } from "@heroui/avatar";
import { Divider } from "@heroui/divider";
import { useLaravelReactI18n } from 'laravel-react-i18n';
import HeartCheckbox from "@/Components/Icons/HeartCheckbox";


export default function TaskCreationPage() {
    const { t } = useLaravelReactI18n();
    const absenceTime = "2 години"; /*заглушка на время вместо CurrentTimeStamp - LastVisitTime*/


    return (



        <div className="flex flex-row w-[60rem] h-60 border-b gap-3 ml-3.5 py-10 px-25 dark:bg-[#2c2c2c]">
             <div className="flex flex-row gap-5 w-[45rem] h-[10rem] items-start">
                 <a><Avatar className="size-max justify-start content-start"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            as={Link}
                            href="#"></Avatar></a>
                 <div className="flex flex-col w-[16rem] h-40 gap-5">
                     <div className="flex flex-row gap-2">
                         <h2><Link className="text-black dark:text-white focus:text-gray-500 text-2xl font-bold" href="#">Коваль А.</Link></h2>
                         <p>
                             <HeartCheckbox />
                         </p>
                     </div>
                     <h3 className="content-start text-base font-medium text-[#929292] dark:text-[#A7A7A7]"
                     >{t('fav-employees.last-visit', { absence: absenceTime } )}</h3>
                 </div>
             </div>
            <div className="relative flex flex-col gap-5 w-[20rem] h-[10rem] items-start">
                 <Button
                     as={Link}
                     href="#"
                     className="h-fit bg-white dark:bg-[#2c2c2c] border-2 border-primary rounded-[2.25rem] px-10 py-5 text-xl font-semibold text-primary"
                 >{t('fav-employees.offer')}</Button>
                 <div className="flex flex-row gap-2.5 w-[14rem] h-[4.5rem] items-start font-medium">
                     <div className="flex flex-col">
                         <h2 className="text-[2rem] dark:text-white">12456</h2>
                         <h3 className="text-xl text-primary">{t('fav-employees.reviews')}</h3>
                     </div>
                     <Divider className="bg-primary my-4 max-h-12" orientation="vertical"/>
                     <div className="flex flex-col">
                         <h2 className="text-[2rem] dark:text-white">100%</h2>
                         <h3 className="text-xl text-gray-500 dark:text-[#A7A7A7]">{t('fav-employees.positive')}</h3>
                     </div>
                 </div>
             </div>
         </div>
    );
}

