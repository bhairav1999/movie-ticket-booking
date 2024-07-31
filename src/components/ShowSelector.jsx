import React from 'react';
import '../App.css'; 

const ShowSelector = ({ selectedShow, setSelectedShow }) => {
  const handleSelect = (e) => {
    setSelectedShow(e.target.value);
  };

  return (
    <div className="show-selector">
      <h2>Select Show</h2>
      <select onChange={handleSelect} value={selectedShow} className="show-select">
        <option value="">Select Show</option>
        <option value="1">Show 1</option>
        <option value="2">Show 2</option>
        <option value="3">Show 3</option>
      </select>
    </div>
  );
};

export default ShowSelector;
