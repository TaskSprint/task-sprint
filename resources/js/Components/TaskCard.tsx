import { Avatar, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import StarRating from '@/Components/StarRating';

export default function TaskCard() {
    const { t } = useLaravelReactI18n();

    return (
        <div className="w-full max-w-[45rem] min-h-[18.0625rem] h-fit flex-row items-center justify-center gap-8 overflow-hidden
            rounded-[1.25rem] border-1 border-[#B3F0FF] dark:border-none p-4 bg-[#FFFFFF] dark:bg-[#313131]">
            <div className="flex flex-row w-full gap-3 size-full sm:flex-col">
                <div className="absolute items-center max-w-32 mr-4">
                    <Avatar
                        className="aspect-square size-32 flex"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        as={Link}
                        href="#"
                    />
                </div>
                    <div className="flex flex-col w-full max-w-[32.125rem] min-h-[16.0625rem] ml-42 gap-2 items-start">
                        <h2>
                            <Link
                                className="text-[1.5rem] font-bold focus:text-gray-500 text-black dark:text-white"
                                href="#"
                            >
                                <div className="dark:text-white overflow-hidden text-ellipsis whitespace-nowrap">
                                    Створеня клону сайту
                                </div>
                            </Link>
                        </h2>
                        <h3 className="text-[1rem] font-bold">Антон П.</h3>
                        <div className="flex flex-row text-[1rem] font-normal"><StarRating totalReviews={24} positiveReviews={22} /> / 24 відгуки - 89% позитивних</div>
                        <h4 className="text-[0.875rem] font-semibold">Miсто: Київ</h4>
                        <div className="flex flex-row border-primary border-2 min-w-[9.375rem]"></div>
                        <h4 className="text-[0.875rem] font-semibold">Розробити копию сайта - з відтворенням основного функціоналу сайту-зразку, але з унікальним дизайном, використовуючи технології Laravel/HeroUI.</h4>
                        <div className="flex flex-row border-primary border-2 min-w-[32.125rem]"></div>
                        <div className="flex flex-row gap-30">
                            <h5 className="font-semibold text-[1rem]">Зробити до 23.05.2025</h5>
                            <h5 className="font-semibold text-[1rem]">Оплата:1000грн</h5>
                        </div>
                    </div>
            </div>
        </div>
    );
}
