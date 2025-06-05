import User from '@/types/models/user';

export default interface FileModel {
    id: number;
    name: string;
    mimeType: string;
    size: number;
    path: string;
    disk: string;
    fileableId: number;
    fileableType: string;
    createdAt: string;
    updatedAt: string;
    temporaryUrl: string;

    userId: number;

    user?: User;
}
