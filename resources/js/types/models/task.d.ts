import SubCategory from '@/types/models/sub-category';
import User from '@/types/models/user';

export default interface Task {
    id: number;
    name: string;
    description: string;
    price: string;
    subCategory?: SubCategory;
    currency_code: string;
    address: { city: string; street: string; house: string };
    estimated_date: string;
    status: string;
    user: User;
}
