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
      </select>
    </div>
  );
};

export default SelectGeneration;


// const SelectType: React.FC<SelectGenerationProps> = ({ onSelectChange }) => {
//   return (
//     <div className="select-container">
//         <select name="selectType" id="selectType" className="selectType" onChange={onSelectChange}>
//           <option value="">All Types</option>
//           <option value="normal">Normal</option>
//           <option value="fighting">Fighting</option>
//           <option value="flying">Flying</option>
//           <option value="poison">Poison</option>
//           <option value="ground">Ground</option>
//           <option value="rock">Rock</option>
//           <option value="bug">Bug</option>
//           <option value="ghost">Ghost</option>
//           <option value="steel">Steel</option>
//           <option value="fire">Fire</option>
//           <option value="water">Water</option>
//           <option value="grass">Grass</option>
//           <option value="electric">Electric</option>
//           <option value="psychic">Psychic</option>
//           <option value="ice">Ice</option>
//           <option value="dragon">Dragon</option>
//           <option value="dark">Dark</option>
//           <option value="fairy">Fairy</option>
//         </select>
//     </div>
//   );
// };

// export {SelectType};
