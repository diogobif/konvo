import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  align-content: flex-start;
  row-gap: 15px;
`;

export const ColumnLabel = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
