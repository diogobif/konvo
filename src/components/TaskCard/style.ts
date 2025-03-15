import styled from "styled-components";
import { pxToRem } from "../../styles/utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(10)}rem;
  border: 1px solid #000;
  padding: ${pxToRem(15)}rem;
  border-radius: 20px;
`;

export const TaskTitle = styled.p`
  font-size: ${pxToRem(15)}rem;
  font-weight: bold;
`;

export const TaskLabel = styled.span`
  font-size: ${pxToRem(13)}rem;
`;
export const TaskValue = styled.span`
  font-weight: bold;
  font-size: ${pxToRem(13)}rem;
`;
