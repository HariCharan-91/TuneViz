// config/algorithms.js
import linearRegImg from '../assets/card_images/linear_reg.png';
import logisticRegImg from '../assets/card_images/logistic.png';
import decisionTreeImg from '../assets/card_images/decision.png';


export const algorithms = [
    {
        title: 'Linear Regression',
        description: 'Perform regression analysis on continuous variables.',
        route: 'linear_regression',
        img_url: linearRegImg, // Use import statement if necessary
        parameters: [
            { name: 'Learning Rate', type: 'slider', min: 0, max: 1, defaultValue: 0.01 },
            { name: 'Iterations', type: 'slider', min: 100, max: 1000, defaultValue: 500 },
        ]
    },
    {
        title: 'Logistic Regression',
        description: 'Predict binary outcomes using logistic function.',
        route: 'logistic_regression',
        img_url: logisticRegImg, // Use import statement if necessary
        parameters: [
            { name: 'Regularization', type: 'slider', min: 0, max: 1, defaultValue: 0.1 },
            { name: 'Penalty', type: 'dropdown', options: ['l1', 'l2'] },
        ]
    },
    {
        title: 'Decision Tree',
        description: 'Classify data using a tree-based structure.',
        route: 'decision_tree',
        img_url: decisionTreeImg, // Use import statement if necessary
        parameters: [
            { name: 'Max Depth', type: 'slider', min: 1, max: 20, defaultValue: 5 },
            { name: 'Criterion', type: 'dropdown', options: ['gini', 'entropy'] },
        ]
    },
    // Add more algorithms as needed
];
