type TaskProps = {
    id: number;
    name: string;
    description: string;
    price: string;
    currency_code: string;
    address: Record<string, any>;
    estimated_date: string;
    status: string;
    customer: { id: number; name: string };
};

export default function LastTaskCard({
                                     id, name,
                                     description,
                                     price,
                                     currency_code,
                                     address,
                                     estimated_date,
                                     status,
                                     customer
                                 }: TaskProps) {
    return (


            <div className="w-[353px] h-[179px] flex flex-col justify-center items-start p-[0px_20px] gap-[40px] bg-white border-2 border-gray-400 rounded-[23px]">
                {/* Верхний блок с заголовком и категорией */}
                <div className="flex flex-col items-start gap-[8px] w-[220px] h-[54px]">

                    <h3 className="text-black font-manrope font-semibold text-[20px] leading-[27px]">
                        {name}
                    </h3>
                    <p className="text-black font-manrope font-semibold text-[14px] leading-[19px]">
                        {description}   {/* должна быть категория category.name */}
                    </p>
                </div>

                {/* Нижний блок с датой и ценой */}
                <div className="flex flex-col items-start gap-[8px] w-[107px] h-[57px]">
                    <p className="text-gray-400 font-manrope font-semibold text-[12px] leading-[16px]">
                        Виконати до {estimated_date}
                    </p>
                    <p className="text-black font-manrope font-semibold text-[24px] leading-[33px]">
                        {price}
                    </p>
                </div>
            </div>

    );
}
