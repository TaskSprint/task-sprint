import SubCategory from '@/App/Models';
import { useLaravelReactI18n } from 'laravel-react-i18n';
type TaskProps = {
    id: number;
    name: string;
    description: string;
    price: string;
    subCategory?: SubCategory;
    currency_code: string;
    address: Record<string, any>;
    estimated_date: string;
    status: string;
    User: { id: number; name: string };
};

export default function LastTaskCard({
                                     id, name,
                                     description,
                                     price,
                                     currency_code,
                                     address,
                                     estimated_date,
                                     subCategory,
                                     customer
                                 }: TaskProps) {
    const { t } = useLaravelReactI18n();

    return (


        <div className="w-[22.06rem] h-[11.19rem] flex flex-col justify-center items-start px-5 gap-10 bg-white border-2 border-gray-400 rounded-[1.44rem]">
            {/* Top block with title and category */}
            <div className="flex flex-col items-start gap-2 w-[13.75rem] h-[3.38rem]">
                <h3 className="text-black font-manrope font-semibold text-[1.25rem] leading-[1.69rem]">
                    {name}
                </h3>
                <p className="text-black font-manrope font-semibold text-[0.88rem] leading-[1.19rem]">
                    {subCategory.category.name}
                </p>
            </div>

            {/* Bottom block with date and price */}
            <div className="flex flex-col items-start gap-2 w-[6.69rem] h-[3.56rem]">
                <p className="text-gray-400 font-manrope font-semibold text-[0.75rem] leading-[1rem] whitespace-nowrap">
                    {t('lastTasks.estimation', { estimated: estimated_date })}

                </p>
                <p className="text-black font-manrope font-semibold text-[1.5rem] leading-[2.06rem] whitespace-nowrap">
                    {price} ₴
                </p>
            </div>
        </div>

    );
}
