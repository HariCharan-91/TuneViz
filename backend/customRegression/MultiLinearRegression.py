import numpy as np


class MultiLinearRegression:
    def __init__(self):
        """
        Initialize the MultiLinearRegression model.
        """
        self.coef_ = None

    def fit(self, x, y):
        """
        Fits the model to the training data by calculating the coefficients using the normal equation.

        :param x: Input features, a 2D numpy array of shape (n_samples, n_features)
        :param y: Target values, a 1D numpy array of shape (n_samples,)
        :return: self (the fitted model)
        """
        try:
            # Input validation
            if not isinstance(x, np.ndarray) or not isinstance(y, np.ndarray):
                raise ValueError("Input features and target values must be numpy arrays.")
            if x.ndim != 2:
                raise ValueError("Input features must be a 2D array.")
            if y.ndim != 1:
                raise ValueError("Target values must be a 1D array.")
            if x.shape[0] != y.shape[0]:
                raise ValueError("Number of samples in x and y must be the same.")

            # Convert x and y to float type
            x = x.astype(np.float64)
            y = y.astype(np.float64)

            # Add a column of ones to account for the intercept
            x = np.hstack((np.ones((x.shape[0], 1)), x))

            # Normal equation: (X^T * X)^-1 * X^T * y
            xtx = np.matmul(x.T, x)
            xty = np.matmul(x.T, y)

            # Attempt to solve the linear system
            self.coef_ = np.linalg.solve(xtx, xty)
            return self

        except ValueError as ve:
            print(f"ValueError: {ve}")
        except np.linalg.LinAlgError as lae:
            print(f"Linear Algebra Error: {lae}")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")

    def predict(self, x):
        """
        Predicts target values based on the input features using the learned coefficients.

        :param x: Input features, a 2D numpy array of shape (n_samples, n_features)
        :return: Predicted target values, a 1D numpy array of shape (n_samples,)
        """
        try:
            if self.coef_ is None:
                raise ValueError("Model is not fitted yet. Call the 'fit' method first.")

            # Input validation
            if not isinstance(x, np.ndarray):
                raise ValueError("Input features must be a numpy array.")
            if x.ndim != 2:
                raise ValueError("Input features must be a 2D array.")
            if x.shape[1] != len(self.coef_) - 1:
                raise ValueError("Number of features in x must match the number of features used in fitting.")

            # Convert x to float type
            x = x.astype(np.float64)

            # Add a column of ones to account for the intercept
            x = np.hstack((np.ones((x.shape[0], 1)), x))

            # Return predictions
            return np.matmul(x, self.coef_)

        except ValueError as ve:
            print(f"ValueError: {ve}")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")
