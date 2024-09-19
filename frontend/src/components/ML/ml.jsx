import React from 'react';
import Card from "../Card/card";
import './ml.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { algorithms } from '../../config/algorithms'; // Import the algorithms

const Ml = () => {
    const navigate = useNavigate();  // Use useNavigate for navigation

    const handleCardClick = (route) => {
        navigate(`/ml/visualize/${route}`);  // Navigate to the visualize page with the selected route
    };

    return (
        <div className="ml-container">
            {algorithms.map((algo, index) => (
                <Card
                    key={index}
                    title={algo.title}
                    description={algo.description}
                    img_url={algo.img_url}
                    onClick={() => handleCardClick(algo.route)}  // Pass route to navigate
                />
            ))}
        </div>
    );
};

export default Ml;
