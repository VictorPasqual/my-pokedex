import React from 'react';

interface SelectGenerationProps {
  onSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectGeneration: React.FC<SelectGenerationProps> = ({ onSelectChange }) => {
  return (
    <div className="select-container">
      <select name="selectGen" id="selectGen" className="selectGen" onChange={onSelectChange}>
        <option value="gen_1">1st Gen</option>
        <option value="gen_2">2nd Gen</option>
        <option value="gen_3">3rd Gen</option>
        <option value="gen_4">4th Gen</option>
        <option value="gen_5">5th Gen</option>
        <option value="gen_6">6th Gen</option>
        <option value="gen_7">7th Gen</option>
        <option value="gen_8">8th Gen</option>
        <option value="gen_9">9th Gen</option>
      </select>
    </div>
  );
};

export default SelectGeneration;