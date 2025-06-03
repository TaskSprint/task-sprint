import StarRating from '@/Components/StarRating';
import { Avatar, Link } from '@heroui/react';

export default function TaskCard() {
    return (
        <div className="h-fit min-h-[18.0625rem] w-full max-w-[45rem] flex-row items-center justify-center gap-8 overflow-hidden rounded-[1.25rem] border-1 border-[#B3F0FF] bg-[#FFFFFF] p-4 dark:border-none dark:bg-[#313131]">
            <div className="flex size-full w-full flex-row gap-3 sm:flex-col">
                <div className="absolute mr-4 max-w-32 items-center">
                    <Avatar
                        className="flex aspect-square size-32"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        as={Link}
                        href="#"
                    />
                </div>
                <div className="ml-42 flex min-h-[16.0625rem] w-full max-w-[32.125rem] flex-col items-start gap-2">
                    <h2>
                        <Link
                            className="text-[1.5rem] font-bold text-black focus:text-gray-500 dark:text-white"
                            href="#"
                        >
                            <div className="overflow-hidden text-ellipsis whitespace-nowrap dark:text-white">
                                Створеня клону сайту
                            </div>
                        </Link>
                    </h2>
                    <h3 className="text-[1rem] font-bold">Антон П.</h3>
                    <div className="flex flex-row text-[1rem] font-normal">
                        <StarRating totalReviews={24} positiveReviews={22} /> / 24 відгуки - 89%
                        позитивних
                    </div>
                    <h4 className="text-[0.875rem] font-semibold">Miсто: Київ</h4>
                    <div className="border-primary flex min-w-[9.375rem] flex-row border-2"></div>
                    <h4 className="text-[0.875rem] font-semibold">
                        Розробити копию сайта - з відтворенням основного функціоналу сайту-зразку,
                        але з унікальним дизайном, використовуючи технології Laravel/HeroUI.
                    </h4>
                    <div className="border-primary flex min-w-[32.125rem] flex-row border-2"></div>
                    <div className="flex flex-row gap-30">
                        <h5 className="text-[1rem] font-semibold">Зробити до 23.05.2025</h5>
                        <h5 className="text-[1rem] font-semibold">Оплата:1000грн</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
