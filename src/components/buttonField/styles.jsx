import styled from "styled-components";

const Button = styled.button`
  width: ${({ width }) => width || "50%"};
  height: 40px;
  background-color: aliceblue;
  border: 1px solid blue;
  outline: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  transition: 1s color;
  :hover {
    background-color: blue;
    color: white;
  }
`;

export default Button;
