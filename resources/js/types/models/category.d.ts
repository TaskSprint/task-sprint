import LocaleString from '@/types/locale-string';

export default interface Category {
    id: number;
    name: LocaleString;
    color: string;
    icon?: string;
    updatedAt: string;
    createdAt: string;
}
