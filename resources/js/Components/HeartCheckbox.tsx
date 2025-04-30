import { useState } from 'react';

export default function HeartCheckbox() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="text-primary relative size-8">
            <input
                type="checkbox"
                checked={checked}
                className="peer absolute inset-0 z-1 size-full cursor-pointer opacity-0"
                onChange={() => setChecked(!checked)}
            />
            <svg
                viewBox="0 0 24 24"
                className="stroke-0.5 h-8 w-8 fill-transparent stroke-current transition peer-checked:fill-current peer-active:scale-90"
            >
                <path d="M12 21s-6-4.35-9-8.15C-1 6.6 4.8 0 12 6.2 19.2 0 25 6.6 21 12.85 18 16.65 12 21 12 21z" />
            </svg>
        </div>
    );
}
