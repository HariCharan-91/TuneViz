# This is the Standardization of the values

import numpy as np

class Standardization:
    def __init__(self):
        self.mean_ = None
        self.std_ = None

    def fit(self, x):
        """
        calculates the mean and std
        :param x:
        :return: updates the mean and std
        """
        self.mean_ = np.mean(x, axis=0)
        self.std_ = np.std(x, axis=0)
        return self

    def transform(self, x):
        """
        :param x:
        :return: calculated z - value for each
        """
        if self.mean_ is None or self.std_ is None:
            raise ValueError("The values of the mean and std is not calculated call 'fit' method")

        return (x - self.mean_) / self.std_

    def fit_transform(self, x):
        """
        :param x:
        :return: update and transform
        """
        self.fit(x)
        return self.transform(x)

    def inverse_transform(self, x):
        """
        Reverses the transformation of the values
        :param x:
        :return:
        """
        if self.mean_ is None or self.std_ is None:
            raise ValueError("The values of the mean and std is not calculated call 'fit' method")

        return (x * self.std_) + self.mean_
