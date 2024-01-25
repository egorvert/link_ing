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

const ExpandingInput = ({ placeholder, width, fontWeight }) => {
  const [value, setValue] = useState(placeholder);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput
      placeholder={value}
      onChange={handleChange}
      width={width}
      fontWeight={fontWeight}
    />
  );
};

export default ExpandingInput;
