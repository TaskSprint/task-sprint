import Task from '@/types/models/task';
import User from '@/types/models/user';

export default interface TaskOrder {
    taskId: number;
    employeeId: number;
    createdAt: string;
    updatedAt: string;

    status: 'pending' | 'pending for completion' | 'completed';

    employee?: User;
    task?: Task;
}
