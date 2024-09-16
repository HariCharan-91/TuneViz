import numpy as np

class LinearRegression:
    def __init__(self):
        """
        Initialize the LinearRegression model.
        """
        self.slope_ = None
        self.intercept_ = None

    def fit(self, x, y):
        """
        Fit the linear regression model by calculating the slope and intercept.

        :param x: Features (independent variable), 1D numpy array.
        :param y: Target (dependent variable), 1D numpy array.
        :return: self (fitted model)
        """
        try:
            # Input validation
            if not isinstance(x, np.ndarray) or not isinstance(y, np.ndarray):
                raise ValueError("Input features and target values must be numpy arrays.")
            if x.ndim != 1 or y.ndim != 1:
                raise ValueError("Both x and y should be 1D numpy arrays.")
            if x.shape[0] != y.shape[0]:
                raise ValueError("x and y must have the same number of samples.")

            # Calculate mean of x and y
            x_mean = np.mean(x)
            y_mean = np.mean(y)

            # Compute the numerator and denominator for the slope
            num = np.sum((x - x_mean) * (y - y_mean))
            den = np.sum((x - x_mean) ** 2)

            # Prevent division by zero
            if den == 0:
                raise ZeroDivisionError("Denominator in slope calculation is zero. x values must not be constant.")

            # Calculate slope and intercept
            self.slope_ = num / den
            self.intercept_ = y_mean - self.slope_ * x_mean

            return self

        except ValueError as ve:
            print(f"ValueError: {ve}")
        except ZeroDivisionError as zde:
            print(f"ZeroDivisionError: {zde}")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")

    def predict(self, x):
        """
        Predict the target values for the given features.

        :param x: Features (independent variable), 1D numpy array.
        :return: Predicted target values, 1D numpy array.
        """
        try:
            if self.slope_ is None or self.intercept_ is None:
                raise ValueError("Model is not fitted yet. Call the 'fit' method before prediction.")

            if not isinstance(x, np.ndarray):
                raise ValueError("Input features must be a numpy array.")
            if x.ndim != 1:
                raise ValueError("x should be a 1D numpy array.")

            # Make predictions
            return self.slope_ * x + self.intercept_

        except ValueError as ve:
            print(f"ValueError: {ve}")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")
