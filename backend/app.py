from flask import Flask, request, jsonify
import subprocess
import json
import os
from config.param import default_params  # Import the parameters

app = Flask(__name__)

@app.route('/<algorithm>', methods=['GET'])
def run_algorithm(algorithm):
    # Get parameters from request
    params = request.args.to_dict()
    params = {k: v if v.lower() in ['true', 'false'] else str(v) for k, v in params.items()}
    
    # Use default values for missing parameters
    if algorithm not in default_params:
        return jsonify({'error': f'Algorithm {algorithm} not found.'}), 404
    
    algorithm_defaults = default_params[algorithm]
    for key, (default_value, value_type) in algorithm_defaults.items():
        if key not in params:
            params[key] = default_value
        # Convert parameter to the correct type
        if value_type == bool:
            params[key] = params[key].lower() == 'true'
        elif value_type == int:
            params[key] = int(params[key])

    # Define the script path based on the algorithm
    script_folder = 'scripts'
    script_path = os.path.join(script_folder, f'{algorithm}.py')

    if os.path.exists(script_path):
        try:
            # Construct command with parameters based on the algorithm
            command = ['python', script_path] + [
                str(params[key]) for key in algorithm_defaults.keys()
            ]
            result = subprocess.run(command, capture_output=True, text=True)

            # Parse the JSON output from the script
            output = json.loads(result.stdout)

            return jsonify(output)

        except json.JSONDecodeError:
            return jsonify({'error': 'Failed to parse script output.'})

        except Exception as e:
            return jsonify({'error': str(e)})

    else:
        return jsonify({'error': 'Script not found.'})

if __name__ == "__main__":
    app.run(debug=True)
