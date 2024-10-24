import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({
  setError,
  selectedNumber,
  setSelectedNumber,
  error,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const SelectNumberHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p style={{ color: "red" }}>{error}</p>
      <div className="flex">
        {numbers.map((value, i) => (
          <Box
            $isSelected={value === selectedNumber}
            key={i}
            onClick={() => SelectNumberHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};
export default NumberSelector;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  background-color: ${(props) => (props.$isSelected ? "black" : "white")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};
`;
