import LocaleString from '@/types/locale-string';
import Category from '@/types/models/category';
import Task from '@/types/models/task';

export default interface SubCategory {
    id: number;
    name: LocaleString;
    category?: Category;
    tasks?: Task[];
    updatedAt: string;
    createdAt: string;
}
