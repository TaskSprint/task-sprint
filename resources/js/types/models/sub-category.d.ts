import Category from '@/types/models/category';
import LocaleString from '@/types/locale-string';
import Task from '@/types/models/task';

export default interface SubCategory {
    id: number;
    name: LocaleString;
    category?: Category;
    tasks?: Task[];
    updatedAt: string;
    createdAt: string;
}
