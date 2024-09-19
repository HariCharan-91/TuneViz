import sys
import json
from sklearn.datasets import load_diabetes
from sklearn.linear_model import LinearRegression

def main(fit_intercept, copy_x, n_jobs, positive):
    # Load the dataset
    dataset = load_diabetes()
    X, y = dataset.data, dataset.target
    
    # Create the LinearRegression model with the given parameters
    lr = LinearRegression(
        fit_intercept=fit_intercept.lower() == 'true',
        copy_X=copy_x.lower() == 'true',
        n_jobs=None if n_jobs.lower() == 'none' else int(n_jobs),
        positive=positive.lower() == 'true'
    )
    
    # Fit the model
    lr.fit(X, y)

    # Prepare output
    result = {
        'coefficients': lr.coef_.tolist(),  # Convert numpy array to list for JSON serialization
        'intercept': lr.intercept_
    }
    
    print(json.dumps(result))  # Output the result as JSON

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: python linear_regression.py <fit_intercept> <copy_x> <n_jobs> <positive>")
    else:
        fit_intercept, copy_x, n_jobs, positive = sys.argv[1:]
        main(fit_intercept, copy_x, n_jobs, positive)
