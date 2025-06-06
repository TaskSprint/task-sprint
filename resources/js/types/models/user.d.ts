import Task from '@/types/models/task';

export default interface User {
    id: number;
    avatar?: string;
    name: string;
    phone: string;
    email: string;
    city: string;
    emailVerifiedAt: string;
    createdAt: string;
    updatedAt: string;
    tasks?: Task[];
}
