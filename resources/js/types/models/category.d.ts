import LocaleString from '@/types/locale-string';
import SubCategory from '@/types/models/sub-category';

export default interface Category {
    id: number;
    name: LocaleString;
    color: string;
    icon?: string;
    subCategories?: SubCategory[];
    updatedAt: string;
    createdAt: string;
}
