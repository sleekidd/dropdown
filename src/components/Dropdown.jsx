import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ items, onSelect, color, width, style }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" style={{ width }}>
      <button
        className="dropdown-toggle"
        style={{ backgroundColor: color, ...style }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem ? selectedItem.label : 'Select'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li key={item.value} onClick={() => handleSelect(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.object,
};

Dropdown.defaultProps = {
  color: '#ccc',
  width: '200px',
  style: {},
};

export default Dropdown;
