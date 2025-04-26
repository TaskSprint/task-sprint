import Button from '@/Components/Shared/Button';
import {useLaravelReactI18n} from "laravel-react-i18n";
import React from "react";
import {Divider} from "@heroui/divider";


export default function NewTask() {

    const { t } = useLaravelReactI18n();


    const tasks = [
        {
            title: "Створити сайт для магазину одягу",
            deadline: "15 квітня",
            image: "https://www.colorland.com/sites/default/files/styles/optimized/public/article/A%20man%20wearing%20a%20hat%2C%20taking%20a%20photo%20at%20sunset.jpg?itok=RL_hlVbF",
            price: "2000",
            customer: "Георгій Ф.",
        },
        {
            title: "Редизайн мобільного додатку",
            deadline: "20 травня",
            image: "https://www.digitalphoto.de/media/digitalphoto/styles/tec_frontend_large/public/images/2018/09/adobestock_101692534.jpeg?itok=lMmBoMR5",
            price: "1500",
            customer: "Егором К.",
        },
        {
            title: "Лендінг для курсу",
            deadline: "1 червня",
            image: "https://www.nationalgeographic.it/upload/ngi-hero/cover-1685960847724-Hero_100.jpg",
            price: "1000",
            customer: "Георгій Ф.",
        },
    ];


    return (
        <>
            <div
                className="flex flex-col items-center justify-center gap-[1.56rem] py-[2.5rem] box-border">

                <div className="flex items-center justify-center text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white w-full h-[2.75rem] text-center">
                    {t('new-task.title')}
                </div>

                <div className="items-center  w-[22.75rem] text-muted dark:text-[#A7A7A7] text-[0.875rem] leading-[1.19rem] font-medium text-center">
                      {t('new-task.description')}
                </div>

                <Button className="justify-center items-center py-[2rem] bg-primary text-white text-[1.25rem] leading-[1.69rem] font-semibold text-center rounded-full">
                         {t('new-task.create_task_button')}
                </Button>
            </div>


            <div
                className="flex flex-col items-center justify-center gap-[1.56rem] py-[2.5rem] ">

                <div
                    className="text-[2rem] leading-[2.75rem] font-semibold text-black dark:text-white text-center">
                    {t('new-task.popular_tasks')}
                </div>



                <div
                    className="font-manrope font-medium text-[0.875rem] leading-[1.1875rem] text-muted dark:text-[#A7A7A7]">
                    {t('new-task.popular_tasks_description')}
                </div>

            </div>

            <Divider className="bg-muted" />


            <div className="px-[6.25rem]">
                <div className="flex flex-col items-start justify-center gap-[1.875rem] py-[2.5rem]">
                    {tasks.map((task, index) => (
                        <div key={index} className="flex items-start gap-[1.25rem] w-full">
                            {task.image.startsWith('http') ? (
                                <img
                                    src={task.image}
                                    alt={task.title}
                                    className="h-[5rem] w-[5rem] rounded-full  r"
                                />
                            ) : (
                                <div
                                    className="h-[5rem] w-[5rem] rounded-full "
                                    dangerouslySetInnerHTML={{ __html: task.image }}
                                />
                            )}

                            <div className="flex flex-col items-start gap-[0.3125rem] w-full">

                                <div className="flex justify-between w-full gap-[5.75rem]">
                                    <div className="font-semibold text-[1.625rem] leading-[2.25rem] text-black dark:text-white">
                                        {task.title}
                                    </div>
                                    <div className="font-semibold text-[2rem] leading-[2.75rem] text-black dark:text-white">
                                        {task.price}
                                    </div>
                                </div>


                                <div className="font-medium text-[1.125rem] leading-[1.5625rem] break-all text-black dark:text-white">
                                    {t('new-task.completed_today_by', { customer: task.customer })}
                                </div>


                                <div className="flex items-start gap-[0.625rem]">
                                    <Button className="flex justify-center items-center  py-[1.875rem] bg-primary rounded-[2.25rem] text-white font-semibold text-[1.25rem] leading-[1.6875rem]">
                                        {t('new-task.repeat-task')}
                                    </Button>

                                    <Button className="flex justify-center items-center  py-[1.875rem] bg-[0] border-2 border-primary rounded-[2.25rem] text-primary font-semibold text-[1.25rem] leading-[1.6875rem]">
                                        {t('new-task.view-task')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>
    );
}
