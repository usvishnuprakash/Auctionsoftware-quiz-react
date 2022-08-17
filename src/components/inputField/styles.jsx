import styled from "styled-components";

export const Input = styled.input`
  width: ${({ width }) => width || "100%"};
  height: 40px;
  border: 1px solid blue;
  border-radius: 12px;
`;
export const InputFieldWrapper = styled.div`
  width: 100%;
  height: max-content;

  /* background-color: black; */
  margin: ${({ margin }) => margin};
  label {
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
  }
  div {
    margin: 10px 0;
  }
  .error {
    margin-bottom: 4px;
    color: red;
    font-weight: bold;
  }
`;
