import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const HomePage: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Welcome to the ALX Listing App</h1>
            <Button text="Click Me" onClick={() => alert('Button Clicked!')} />
            <div className="mt-4">
                <Card
                    title="Beautiful Apartment"
                    description="A lovely 2-bedroom apartment in the city center."
                    imageUrl="./assets/564730784.jpg/"
                />
            </div>
        </div>
    );
};

export default HomePage;
