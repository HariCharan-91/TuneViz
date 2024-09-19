import React, { useState, useEffect } from 'react';
import { parameters } from '../../config/algorithms';  // Import the parameters
import './vizalgo.css';
import { useParams } from 'react-router-dom';

const Vizalgo = () => {
  const { algorithm } = useParams();  // Get the algorithm from the URL
  const [paramValues, setParamValues] = useState({});
  
  // Get the parameters based on the selected algorithm
  const algoParams = parameters[algorithm] || [];

  useEffect(() => {
    console.log('Selected Algorithm:', algorithm);
    console.log('Parameters:', algoParams);

    const initialValues = algoParams.reduce((acc, param) => {
      acc[param.name] = param.defaultValue || '';
      return acc;
    }, {});
    setParamValues(initialValues);
  }, [algorithm, algoParams]);

  const handleChange = (name, value) => {
    setParamValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const renderParameter = (param, index) => {
    if (param.type === 'slider') {
      return (
        <div className="parameter-group" key={index}>
          <label htmlFor={param.name}>{param.name}</label>
          <input
            type="range"
            id={param.name}
            min={param.min}
            max={param.max}
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
            value={paramValues[param.name] || ''}
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

  return (
    <div className="page-container">
      <div className="sidebar">
        <h2>Model Parameters for {algorithm.replace('_', ' ')}</h2>
        {algoParams.map((param, index) => renderParameter(param, index))}
      </div>
      <div className="main-content">
        <h2>Graphs</h2>
        <div className="graph-placeholder">Graph will be displayed here</div>
      </div>
    </div>
  );
};

export default Vizalgo;
