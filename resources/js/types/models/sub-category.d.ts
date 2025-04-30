import Category from '@/types/models/category';
import LocaleString from '@/types/locale-string';

export default interface SubCategory {
    id: number;
    name: LocaleString;
    category?: Category;
    updatedAt: string;
    createdAt: string;
}
