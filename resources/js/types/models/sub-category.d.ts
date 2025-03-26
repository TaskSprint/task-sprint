import Category from '@/types/models/category';

export default interface SubCategory {
    id: number;
    name: string;
    category?: Category;
    updated_at: string;
    created_at: string;
}
