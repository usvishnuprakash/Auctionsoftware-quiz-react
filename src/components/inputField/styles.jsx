import styled from "styled-components";

export const Input = styled.div`
  width: ${({ width }) => width || "80%"};
  height: 40px;
  border: 1px solid blue;
  border-radius: 12px;
  padding-left: 10px;
`;
export const InputFieldWrapper = styled.div`
  width: 80%;
  height: max-content;
  padding: 1%;
  margin: ${({ margin }) => margin || "10px auto 10px 0px"};
  label {
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 20px;
  }
`;
