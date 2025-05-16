import React from 'react';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="p-4 border rounded shadow-md">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default Card;
