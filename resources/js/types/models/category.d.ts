import LocaleString from '@/types/locale-string';

export default interface Category {
    id: number;
    name: LocaleString;
    color: string;
    icon?: string;
    updated_at: string;
    created_at: string;
}
