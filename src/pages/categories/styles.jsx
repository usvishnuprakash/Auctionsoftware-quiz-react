import styled, { css } from "styled-components";

export const CategoryWrapper = styled.div`
  width: 100%;
  height: max-content;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  /* background-color: orange; */
  .select-wrap {
    width: clamp(230px, 30%, 30%);
    height: max-content;
    min-height: 100px;
    display: flex;
    justify-content: center;
    select {
      width: 70%;
      height: 50px;
      outline: none;
      border-radius: 10px;
      border: 2px solid blue;
    }
  }
  .table-wrapper {
    width: clamp(400px, 70%, 70%);
    height: max-content;
    min-height: 400px;
    display: flex;
    justify-content: center;
    table {
      width: 85%;
      height: max-content;
      font-family: arial, sans-serif;
      border-collapse: collapse;
      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
    }
  }
`;

export const Paginator = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 0 auto;
  margin-top: 30px;
  /* background-color: blue; */

  .seg {
    width: calc(100% / 3);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
`;
export const Seg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  height: 40px;
  border-radius: 50%;
  background-color: ${({ dim }) => (dim ? "transparent" : "cyan")};
  color: ${({ dim }) => (dim ? "rgba(0,0,0,0.4)" : "white")};
  border: ${({ dim }) => (dim ? "1px solid cyan" : "none")};

  transition: 0.5s scale;
  ${({ dim }) =>
    dim &&
    css`
      opacity: 0.4;
      :hover {
        opacity: 0.2;
      }
    `}
  :hover {
    :nth-child(1) {
      scale: 17px;
    }
  }
`;
