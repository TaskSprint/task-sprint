import { Config } from 'ziggy-js';
import User from '@/types/models/user';
import Category from '@/types/models/category';
import SubCategory from '@/types/models/sub-category';
import Task from '@/types/models/task';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user?: User;
    };
    search?: {
        query: string;
        categories: Category[];
        subCategories: SubCategory[];
        tasks: Task[];
    };
    ziggy: Config & { location: string };
    locale?: {
        current: string;
        available: string[];
    };
};
