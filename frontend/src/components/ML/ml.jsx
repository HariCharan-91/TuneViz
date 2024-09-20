import React, { useState } from 'react';
import './ml.css';
import image2 from "../../assets/card_images/model.png";
import image1 from "../../assets/card_images/linear_reg.png";
import {categories} from "../../config/categories"

function ML() {
  const [selectedCategory, setSelectedCategory] = useState('Supervised');


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="ml">

<div className="main-section">
      
      <div className='main-section-set'>
      <div main-section-header>
      <h1>Explore The Machine Learning Through Visualizations</h1>
      <div className="card-container">
        <div className="card">
          <img src={image1} alt="McLaren" />
          <div className="card-info">
            <h2>McLaren</h2>
            <p>3 cars available</p>
          </div>
        </div>
        <div className="card">
          <img src={image1} alt="Mercedes-Benz" />
          <div className="card-info">
            <h2>Mercedes-Benz</h2>
            <p>14 cars available</p>
          </div>
        </div>
      </div>
      </div>
      <div className="main-section-banner">
          <img src={image2} alt="Lamborghini" />
        </div>
      </div>

      

      <div className="text-and-button">
        <div className="description">
          <h2>Luxury Meets Performance</h2>
          <p>
            Discover the perfect solution for all your business transportation needs, indulge in a luxurious wedding getaway experience, or embark on an unforgettable thrill – experience excellence with our unmatched service.
          </p>
        </div>
        <div className="button-container">
          <a href="#">BOOK NOW</a>
        </div>
      </div>
    </div>
      <nav className="navbar">
        {['Supervised', 'Unsupervised', 'Reinforcement'].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="card-container">
        {selectedCategory && categories[selectedCategory].map((type, index) => (
          <div className="unique-card" key={index}>
            <div className="unique-box" style={{ backgroundImage: `url(${type.image})` }}>
              <div className="unique-content">
                {/* <h2>{index + 1}</h2> */}
                <h3>{type.title}</h3>
                <p>{selectedCategory} Learning Type</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ML;
