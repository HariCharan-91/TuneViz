import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories} from '../../config/categories';
import { algorithms} from '../../config/algorithms';
import Card from "../../components/Card/card";
import './algo.css';

const Algos = () => {
    const { type, category } = useParams();  // Get category and subcategory from URL
    const navigate = useNavigate();

    const handleCardClick = (algorithm) => {
        navigate(`/ml/${type}/${category}/visualize/${algorithm.toLowerCase()}`);
    };

    const selectedCategory = categories[type.charAt(0).toUpperCase() + type.slice(1)];
    const selectedSubcategory = selectedCategory?.find(sub => sub.title.toLowerCase() === category.toLowerCase());
   

    if (!selectedSubcategory) return <div>Category not found</div>;

    const relevantAlgorithms = algorithms.filter(alg => selectedSubcategory.algorithms.includes(alg.title));

    return (
        <div className="ml-container">
            {relevantAlgorithms.map((algo, index) => (
                <Card
                    key={index}
                    title={algo.title}
                    description={algo.description}
                    img_url={algo.img_url}
                    onClick={() => handleCardClick(algo.title)}
                />
            ))}
        </div>
    );
};

export default Algos;
