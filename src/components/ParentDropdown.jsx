import React, { useState } from 'react';
import Dropdown from './Dropdown';

const ParentDropdown = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const dropdownItems = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  return (
    <div>
      <h1>Parent Component</h1>
      <Dropdown
        items={dropdownItems}
        onSelect={handleSelect}
        color="#ff0000" // Custom color
        width="300px"   // Custom width
        style={{ border: '2px solid #000' }} // Custom style
      />
      {selectedItem && (
        <p>Selected Item: {selectedItem.label}</p>
      )}
    </div>
  );
};

export default ParentDropdown;
