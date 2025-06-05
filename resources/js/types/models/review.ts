import TaskOrder from '@/types/models/task-order';

export default interface Review {
    id: number;
    rating: number;
    content?: string;
    updatedAt: string;
    createdAt: string;

    taskOrder?: TaskOrder;
}
