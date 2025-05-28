import Button from '@/Components/Shared/Button';
import { Avatar, Divider, Link } from '@heroui/react';
import { useLaravelReactI18n } from 'laravel-react-i18n';
import HeartCheckbox from '@/Components/HeartCheckbox';
import { Star } from 'lucide-react';

export default function EmployeeCard() {
    const { t } = useLaravelReactI18n();
    const absenceTime = 2; // Заглушка: был(а) на сайте 2 години назад



    return (
        <div className="bg-white relative max-w-[44.25rem] rounded-[1.25rem] p-2.5 gap-2.5 border-1 border-primary flex flex-col shadow-sm">
            {/* Верхний блок: Аватар, имя, кнопка */}

            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-between items-start gap-4">
                    <div className="flex flex-row items-start gap-5 min-w-[24.28125rem] min-h-[7.25rem]">
                        <Avatar
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            className="min-w-[5.5rem] min-h-[5.5rem]"
                        />
                        <div className="text-center md:text-left">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <h2 className="text-xl font-semibold">Шевченко Т. </h2>
                                <HeartCheckbox />
                            </div>
                            <p className="text-muted text-sm">Був(ла) на сайті {absenceTime} години назад</p>
                            <div className="flex items-center mt-2 gap-6 text-sm text-muted min-w-[rem]">
                                <div className="flex items-center gap-2 text-black dark:text-white">
                                    <span className="text-primary text-2xl font-black">✓ </span><span>На сайті з<br/> 14 березня 2022</span>
                                </div>
                                <div className="flex items-center gap-2 text-black dark:text-white">
                                    <span className="text-primary text-2xl font-[1000]">✓ </span><span>Паспорт<br/> перевірено</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col absolute top-2.5 right-2.5 justify-end gap-2.5 text-center w-full max-w-[19.75rem] font-semibold">
                    <Button
                        as={Link}
                        href="#"
                        variant="solid"
                        color="primary"
                        className="text-white rounded-full px-6 py-3 text-lg font-semibold"
                    >
                        Запропонувати роботу
                    </Button>
                    <div className="flex flex-row justify-end gap-2 font-medium">
                        <div>
                            <div className="text-[1.25rem] font-medium">12456</div>
                            <div className="text-[0.75rem] text-primary">{t('fav-employees.reviews')}</div>
                        </div>
                        <Divider orientation="vertical" className="h-12 bg-primary" />
                        <div>
                            <div className="text-[1.25rem] font-medium">100%</div>
                            <div className="text-[0.75rem] text-muted">{t('fav-employees.positive')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {[1, 2].map((item) => (
                    <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-muted p-4 bg-white"
                    >
                        <Avatar
                            size="sm"
                            className="rounded-full bg-muted text-white"
                            icon={<span className="text-2xl">👤</span>}
                        />
                        <div className="flex-1 space-y-1">
                            <div className="flex justify-between items-center">
                                <h4 className="font-semibold text-sm">Ім’я користувача</h4>
                                <div className="flex items-center text-yellow-500 text-sm">
                                    <Star className="w-4 h-4 fill-yellow-500" /> 5
                                </div>
                            </div>
                            <p className="text-muted text-sm">2 місяці тому</p>
                            <p className="text-sm text-gray-700">
                                Lorem Ipsum is simply dummy text of the printing an...
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
