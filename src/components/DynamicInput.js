import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 8px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: ${props => props.fontWeight || '600'};
    width: ${props => props.width || '160px'};
`;

const ExpandingInput = ({ defaultValue, width, fontWeight }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput
      value={value}
      onChange={handleChange}
      width={width}
      fontWeight={fontWeight}
    />
  );
};

export default ExpandingInput;
