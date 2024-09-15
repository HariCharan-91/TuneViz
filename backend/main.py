import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from Regression.MultiLinearRegression import MultiLinearRegression
import matplotlib.pyplot as plt
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.metrics import r2_score

def main():
    df = pd.read_csv('Data/50_Startups.csv')
    # x = Independent features
    x = df.iloc[:, 0:-1].values
    # y = Target
    y = df.iloc[:, -1].values

    # preprocessing
    ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [3])], remainder='passthrough')
    x = np.array(ct.fit_transform(x))


    # training test split
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=0)
    print(x_train.shape , y_train.shape)


    # training
    lr = MultiLinearRegression()
    lr.fit(x_train, y_train)
    #
    # Predicting the x_test

    y_pred = lr.predict(x_test)
    # plt.scatter(x_train, y_train, color='red')
    # plt.plot(x_train, lr.predict(x_train))
    # plt.show()

    print(r2_score(y_test, y_pred))

if __name__ == '__main__':
    main()
