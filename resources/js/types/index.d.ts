import { Config } from 'ziggy-js';
import User from '@/types/models/user';

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user?: User;
    };
    ziggy: Config & { location: string };
    locale?: {
        current: string;
        available: string[];
    };
};
