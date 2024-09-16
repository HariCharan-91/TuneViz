import numpy as np
import pandas as pd
class Regressor:
    """
    Initialize the SGDRegressor model
    """
    def __init__(self):
        self.coef_ = None
        self.Loss = 'squared_error'
        self.gd = 'sgd'

    def fit(self, x, y):
        """
         Steps:
    1.) Initialize the training parameters using normal distribution.
    2.) Selecting a random point in the dataset.
    3.) Calculate the slope and update the coefficients

        :param x:
        :param y:
        :return:
        """
        self.coef_ = np.random.randn(x.shape[1] + 1) * 0.01

        for i in range(x.shape[0]):
            val = np.random.randint( low = 0 , high = x.shape[0])

def main():
    df = pd.read_csv('../Data/Salary_Data.csv')
    # x = Independent features
    x = df.iloc[:, :-1].values
    # y = Target
    y = df.iloc[:, -1].values
    reg = Regressor()
    reg.fit(x,y)

if __name__ == "__main__":
    main()