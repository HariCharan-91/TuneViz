import image1 from "../assets/card_images/linear_reg.png";


export const categories = {
    Supervised: [
      { title: 'Regression', image: 'url-to-regression-image.jpg', algorithms: ['Linear Regression', 'Logistic Regression'] },
      { title: 'Classification', image: image1, algorithms: ['Logistic Regression', 'Decision Tree'] }
    ],
    Unsupervised: [
      { title: 'Clustering', image: 'url-to-clustering-image.jpg', algorithms: [] },
      { title: 'Dimensionality Reduction', image: 'url-to-dimensionality-image.jpg', algorithms: [] },
      { title: 'Dimen', image: image1, algorithms: [] },
      { title: 'Dimen', image: image1, algorithms: [] },
      { title: 'Dimen', image: image1, algorithms: [] }
    ],
    Reinforcement: [
      { title: 'Q-Learning', image: 'url-to-qlearning-image.jpg', algorithms: [] },
      { title: 'Policy Gradient', image: 'url-to-policy-gradient-image.jpg', algorithms: [] }
    ]
  };
  