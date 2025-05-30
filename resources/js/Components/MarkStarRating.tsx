import React, { useState } from 'react';

const FullStar = () => (
    <svg viewBox="0 0 24 24" fill="#1FCDFE" width="24" height="24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const EmptyStar = () => (
    <svg viewBox="0 0 24 24" fill="transparent" stroke="#335E65" width="24" height="24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

interface StarRatingProps {
    maxRating: number;
    onRatingChange?: (rating: number) => void;
}

const MarkStarRating: React.FC<StarRatingProps> = ({ maxRating, onRatingChange }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [rating, setRating] = useState<number>(0);

    const handleClick = (index: number) => {
        setRating(index + 1);
        onRatingChange?.(index + 1); // Call the function to pass the new rating
    };

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="flex gap-1">
            {Array.from({ length: maxRating }, (_, index) => {
                const isFilled = index < (hoveredIndex !== null ? hoveredIndex + 1 : rating);
                return (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        style={{ cursor: 'pointer' }}
                    >
                        {isFilled ? <FullStar /> : <EmptyStar />}
                    </button>
                );
            })}
        </div>
    );
};

export default MarkStarRating;
