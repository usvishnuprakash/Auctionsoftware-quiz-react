import styled from "styled-components";

const LoginWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  border-radius: 12px;
  margin: 300px auto;
  background-color: red;
  .child {
    width: 50%;
    height: max-content;
  }
`;

export default LoginWrapper;
