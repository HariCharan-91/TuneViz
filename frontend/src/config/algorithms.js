import linearRegImg from '../assets/card_images/linear_reg.png';
import logisticRegImg from '../assets/card_images/logistic.png';
import decisionTreeImg from '../assets/card_images/decision.png';

export const algorithms = [
    {
        title: 'Linear Regression',
        description: 'Perform regression analysis on continuous variables.',
        route: 'linear_regression',
        img_url: linearRegImg,
        parameters: [
            { name: 'Learning Rate', type: 'slider', min: 0, max: 1, step: 0.01, defaultValue: 0.01 },  // Added step for precision
            { name: 'Iterations', type: 'slider', min: 100, max: 1000, step: 50, defaultValue: 500 },  // Removed duplicate Itera
        ]
    },
    {
        title: 'Logistic Regression',
        description: 'Predict binary outcomes using logistic function.',
        route: 'logistic_regression',
        img_url: logisticRegImg,
        parameters: [
            { name: 'Regularization', type: 'slider', min: 0, max: 1, step: 0.1, defaultValue: 0.1 },  // Added step for regularization
            { name: 'Penalty', type: 'dropdown', options: ['l1', 'l2'], defaultValue: 'l2' },  // Added defaultValue for dropdown
        ]
    },
    {
        title: 'Decision Tree',
        description: 'Classify data using a tree-based structure.',
        route: 'decision_tree',
        img_url: decisionTreeImg,
        parameters: [
            { name: 'Max Depth', type: 'slider', min: 1, max: 20, step: 1, defaultValue: 5 },  // Added step for Max Depth
            { name: 'Criterion', type: 'dropdown', options: ['gini', 'entropy'], defaultValue: 'gini' },  // Added defaultValue for dropdown
        ]
    }
];
