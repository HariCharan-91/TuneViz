import image1 from "../assets/card_images/linear_reg.png";


export const categories = {
    Supervised: [
        { title: 'Regression', image: 'url-to-regression-image.jpg', algorithms: ['Linear Regression', 'Logistic Regression', 'Decision Tree'] },
        { title: 'Classification', image: 'url-to-classification-image.jpg', algorithms: ['Logistic Regression', 'Decision Tree'] }
    ],
    Unsupervised: [
        { title: 'Clustering', image: 'url-to-clustering-image.jpg', algorithms: ['K-Means Clustering'] },
        { title: 'Dimensionality Reduction', image: 'url-to-dimensionality-image.jpg', algorithms: [] },
    ],
    Reinforcement: [
        { title: 'Q-Learning', image: 'url-to-qlearning-image.jpg', algorithms: [] },
        { title: 'Policy Gradient', image: 'url-to-policy-gradient-image.jpg', algorithms: [] }
    ]
};
  