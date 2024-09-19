import React from 'react';
import './card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, img_url, onClick }) => {
    return (
        <div className="container">
            <div className="wrapper">
                <div>
                    <img src={img_url} alt="display" className="banner-image" />
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="button-wrapper">
                <button className="btn outline">DETAILS</button>
                <button className="btn fill" onClick={onClick}>Visualize</button> {/* Use the onClick prop here */}
            </div>
        </div>
    );
};

export default Card;
