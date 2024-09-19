# Define default parameters and their types for each algorithm
default_params = {
    'linear_regression': {
        'fit_intercept': ('True', bool),
        'copy_x': ('True', bool),
        'n_jobs': ('None', str),
        'positive': ('False', bool)
    },
    'another_algorithm': {
        'param1': ('default1', str),
        'param2': ('default2', int)
    }
    # Add more algorithms and their parameters
}
