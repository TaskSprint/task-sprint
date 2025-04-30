import LocaleString from '@/types/locale-string';

export default interface Currency {
    code: string;
    name: LocaleString;
    updatedAt: string;
    createdAt: string;
}
