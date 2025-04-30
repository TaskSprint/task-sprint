import { useState } from "react";
import { cn } from '@heroui/theme';


export default function HeartCheckbox() {
    const [checked, setChecked] = useState(false);

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="sr-only"
            />
            <svg
                viewBox="0 0 24 24"
                className={cn('w-8 h-8 transition-all duration-200', checked ?
                    "fill-sky-400 stroke-sky-400" : "fill-transparent stroke-sky-400", 'stroke-0.5')}
            >
                <path d="M12 21s-6-4.35-9-8.15C-1 6.6 4.8 0 12 6.2 19.2 0 25 6.6 21 12.85 18 16.65 12 21 12 21z" />
            </svg>
        </label>
        );
}
