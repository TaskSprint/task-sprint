import { InputHTMLAttributes } from 'react';

export default function Checkbox({
    className = '',
    ...props
}: Readonly<InputHTMLAttributes<HTMLInputElement>>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded-xs border-gray-300 text-indigo-600 shadow-2xs focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 ' +
                className
            }
        />
    );
}
