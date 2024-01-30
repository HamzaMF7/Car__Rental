import styled from "styled-components";

interface ButtonProps {
  p?: string;
  fs?: string;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  padding: ${({ p }) => p || "10px 20px"};
  background-color: #3563e9; 
  color: white;
  font-size: ${({ fs }) => fs || "12px"};
  font-weight: 500; 
  border-radius: 4px;
  cursor: pointer;
`;
