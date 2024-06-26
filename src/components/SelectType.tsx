import React from 'react';

interface SelectTypeProps {
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectType: React.FC<SelectTypeProps> = ({ onSelectChange }) => {
  return (
    <div className="select-container">
      <select name="selectType" id="selectType" className="selectType" onChange={onSelectChange}>
        <option value="">All Types</option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
      </select>
    </div>
  );
};

export default SelectType;
