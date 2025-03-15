import styled from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  align-content: flex-start;
  row-gap: ${pxToRem(15)}rem;
`;

export const ColumnLabel = styled.p`
  font-weight: bold;
  font-size: ${pxToRem(15)}rem;
`;

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${pxToRem(12)}rem;
`;
