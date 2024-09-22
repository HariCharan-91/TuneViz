import React, { useState, useEffect } from 'react';
import { algorithms } from '../../config/algorithms';  // Import the algorithms
import './vizalgo.css';
import { useParams } from 'react-router-dom';

const Vizalgo = () => {
  const { algorithm } = useParams();  // Get the algorithm from the URL
  const [paramValues, setParamValues] = useState({});
  
  // Find the selected algorithm object
  const selectedAlgorithm = algorithms.find((algo) => algo.title.toLowerCase() === algorithm);
  const algoParams = selectedAlgorithm ? selectedAlgorithm.parameters : [];

  useEffect(() => {
    if (algoParams.length > 0) {
      const initialValues = algoParams.reduce((acc, param) => {
        // Set dropdown values or use defaultValue for sliders
        acc[param.name] = param.defaultValue || param.options?.[0] || param.min || '';  // Handle dropdown default values
        return acc;
      }, {});
      setParamValues(initialValues);
    }
  }, [algoParams]);

  const handleChange = (name, value) => {
    setParamValues((prevValues) => ({
      ...prevValues,
      [name]: value,  // Store dropdown value as is (no need for parseFloat here)
    }));
  };

  const renderParameter = (param, index) => {
    if (param.type === 'slider') {
      return (
        <div className="parameter-group" key={index}>
          <label htmlFor={param.name}>
            {param.name}: {paramValues[param.name]} {/* Display the current slider value */}
          </label>
          <input
            type="range"
            id={param.name}
            min={param.min}
            max={param.max}
            step={param.step || 1}  // Add step attribute to handle floats
            value={paramValues[param.name] || param.defaultValue}
            onChange={(e) => handleChange(param.name, e.target.value)}
          />
        </div>
      );
    }
    if (param.type === 'dropdown') {
      return (
        <div className="parameter-group" key={index}>
          <label htmlFor={param.name}>{param.name}</label>
          <select
            id={param.name}
            value={paramValues[param.name] || ''}  // Ensure it's controlled properly
            onChange={(e) => handleChange(param.name, e.target.value)}
          >
            {param.options.map((option, idx) => (
              <option key={idx} value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
    }
    return null;
  };

  // Function to handle the "Create JSON" button click
  const handleCreateJson = () => {
    const jsonData = JSON.stringify(paramValues, null, 2);  // Create JSON string with formatting
    console.log("Generated JSON:", jsonData);  // You can send it to an API or download it
    alert(`Generated JSON: \n${jsonData}`);
  };

  return (
    <div className="page-container">
      <div className="sidebar">
        <h2>Model Parameters for {algorithm.replace('_', ' ')}</h2>
        {algoParams.length > 0 ? (
          algoParams.map((param, index) => renderParameter(param, index))
        ) : (
          <p>No parameters found for this algorithm.</p>
        )}
        {/* Add the button to create JSON */}
        <button className="create-json-btn" onClick={handleCreateJson}>
          Create JSON
        </button>
      </div>
      <div className="main-content">
        <h2>Graphs</h2>
        <div className="graph-placeholder">Graph will be displayed here</div>
      </div>
    </div>
  );
};

export default Vizalgo;
