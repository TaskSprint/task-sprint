import SubCategory from '@/types/models/sub-category';
import User from '@/types/models/user';
import Currency from '@/types/models/currency';

export default interface Task {
    id: number;
    name: string;
    description: string;
    price: `${number}` | 'Infinity' | '-Infinity' | '+Infinity';
    subCategory?: SubCategory;
    currency?: Currency;
    address: { city: string; region: string; street: string; house: string };
    estimatedDate: string;
    status: string;
    user?: User;
    updatedAt: string;
    createdAt: string;
}
