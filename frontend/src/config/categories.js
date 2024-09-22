import image1 from "../assets/card_images/Regression/regression.png";
import image2 from "../assets/card_images/Classification/classification.png";



export const categories = {
    Supervised: [
        { title: 'Regression', image: image1, algorithms: ['Linear Regression', 'Logistic Regression', 'Decision Tree'] },
        { title: 'Classification', image: image2, algorithms: ['Logistic Regression', 'Decision Tree'] }    
    ],
    Unsupervised: [
        { title: 'Clustering', image: image2, algorithms: ['K-Means Clustering'] },
        { title: 'Dimensionality Reduction', image: 'url-to-dimensionality-image.jpg', algorithms: [] },
    ],
    Reinforcement: [
        { title: 'Q-Learning', image: 'url-to-qlearning-image.jpg', algorithms: [] },
        { title: 'Policy Gradient', image: 'url-to-policy-gradient-image.jpg', algorithms: [] }
    ]
};
