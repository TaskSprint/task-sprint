import Currency from '@/types/models/currency';
import SubCategory from '@/types/models/sub-category';
import TaskOrder from '@/types/models/task-order';
import User from '@/types/models/user';

export default interface Task {
    id: number;
    name: string;
    description: string;
    secretDescription?: string;
    paymentDetails?: string;
    price: `${number}` | 'Infinity' | '-Infinity' | '+Infinity';
    subCategory?: SubCategory;
    currency?: Currency;
    address: { city: string; region: string; street: string; building: string; details?: string };
    estimatedDate: string;
    status: 'pending' | 'pending for executor' | 'in progress' | 'completed' | 'cancelled';
    user?: User;
    order?: TaskOrder;
    files?: string[];
    images?: string[];
    updatedAt: string;
    createdAt: string;
    negotiable: boolean;
}
