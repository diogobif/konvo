import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  border: 1px solid #000;
  padding: 15px;
  border-radius: 20px;
`;

export const TaskTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

export const TaskLabel = styled.span`
  font-size: 13px;
`;
export const TaskValue = styled.span`
  font-weight: bold;
  font-size: 13px;
`;
