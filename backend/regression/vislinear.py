from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split

class VizLinearRegression:
    def __init__(self) -> None:
        # Load the dataset here
        self.dataset = load_diabetes()
        self.coef_ = None
        self.intercept_ = None
        # Default parameters for LinearRegression
        self.fit_intercept = True
        self.copy_x = True
        self.n_jobs = None
        self.positive = False
        
    def Vizfit(self):
        # Extract data
        X, y = self.dataset.data, self.dataset.target
        
        # Create the LinearRegression model with the set parameters
        lr = LinearRegression(
            fit_intercept=self.fit_intercept,
            copy_X=self.copy_x,
            n_jobs=self.n_jobs,
            positive=self.positive
        )
        
        # Fit the model
        lr.fit(X, y)

        # Output the coefficients and intercept for visualization or debugging
        print("Coefficients:", lr.coef_)
        print("Intercept:", lr.intercept_)
        
        self.coef_ = lr.coef_
        self.intercept_ = lr.intercept_
        return self
    def predict(self):
        pass
    
# Instantiate and use the class
viz_lr = VizLinearRegression()
viz_lr.Vizfit()
