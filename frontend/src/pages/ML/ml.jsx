import React, { useState } from "react";
import "./ml.css";
import { categories } from "../../config/categories";
import { useNavigate } from "react-router-dom";
import image2 from "../../assets/card_images/isometrix.jpeg";


function ML() {
  const [selectedCategory, setSelectedCategory] = useState("Supervised");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleReadMore = (type, subcategory) => {
    navigate(`/ml/${type.toLowerCase()}/${subcategory.toLowerCase()}`);
  };

  return (
    <div className="ml">
      <div className="main-section">
        <div className="main-section-set">
          <div className="main-section-header">
            <h1>Explore The Machine Learning Through Visualizations</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio
              provident commodi, recusandae, culpa quidem, praesentium nesciunt
              saepe ipsum asperiores dolorem! Modi ipsa cupiditate earum dolorem
              laboriosam nisi quis quia.
            </p>
          </div>
          <div className="main-section-banner">
            <img src={image2} alt="main-section-image" />
          </div>
        </div>

        <div className="text-and-button"></div>
      </div>
      <nav className="navbar">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="card-container">
        {selectedCategory &&
          categories[selectedCategory].map((subcategory, index) => (
            <div className="unique-card" key={index}>
              <div
                className="unique-box"
                style={{ backgroundImage: `url(${subcategory.image})` }}
              >
                <div className="unique-content">
                  <h3>{subcategory.title}</h3>
                  <p>
                    {selectedCategory} - {subcategory.title}
                  </p>
                  <a
                    onClick={() =>
                      handleReadMore(selectedCategory, subcategory.title)
                    }
                  >
                    Explore {subcategory.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ML;

{
  /* <div className="card-container">
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
            </div> */
}

// <div className="description">
//             <h2>Luxury Meets Performance</h2>
//             <p>Discover the perfect solution for all your business transportation needs, indulge in a luxurious wedding getaway experience, or embark on an unforgettable thrill – experience excellence with our unmatched service.</p>
//           </div>
//           <div className="button-container">
//             <a href="#">BOOK NOW</a>
//           </div>
