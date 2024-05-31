import React, { useState } from 'react';

function CustomSelect({ onSelect }) {
  // STATE TO STORE THE SELECTED OPTION
  const [selectedOption, setSelectedOption] = useState('');

  // FUNCTION TO MANAGE CHANGES IN THE SELECT INPUT
  const handleChange = (event) => {
    setSelectedOption(event.target.value); 
    onSelect(event.target.value); 
  };

  return (
    // SELECT COMPONENT
    <div style={{ minWidth: '350px', position: 'relative' }}>
      <select 
        value={selectedOption} 
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '15px',
          fontFamily: 'Montserrat',
          backgroundColor: '#313441',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          appearance: 'none',
          WebkitAppearance: 'none',
          outline: 'none',
          cursor: 'pointer',
          fontWeight: '500',
          fontSize: '16px',
          textAlign:'center'
        }}
      >
        <option value="" disabled>Select a Workflow</option> 
        <option value="convertAssets">Convert Assets</option> 
      </select>
    </div>
  );
}

export default CustomSelect;

