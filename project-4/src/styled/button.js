import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  gap: 10px;
  min-width: 220px;
  height: 44px;
  background-color: black;
  border-radius: 5px;
  color: white;
  border: none;
  font-size: 13px;
  transition: 0ms.4s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0ms.3s background ease-in;
  }
`;
